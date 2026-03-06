import { NextRequest, NextResponse } from "next/server";
import prisma from "@/src/lib/db";

export async function GET() {
    try {
        const tickets = await prisma.tickets.findMany({
            include: {
                clientes: {
                    select: { nome: true }
                }
            },
            orderBy: { data_criacao: "desc" },
        });

        const result = tickets.map((t) => ({
            id: t.id,
            loja_id: t.loja_id,
            cliente_id: t.cliente_id,
            cliente_nome: t.clientes?.nome || null,
            descricao_pedido: t.descricao_pedido,
            status: t.status,
            valor_estimado: t.valor_estimado ? Number(t.valor_estimado) : null,
            data_criacao: t.data_criacao,
            data_validade: t.data_validade,
            data_agendamento: t.data_agendamento,
            hora_agendamento: t.hora_agendamento,
        }));

        return NextResponse.json(result, { status: 200 });
    } catch (error: unknown) {
        const errMsg = error instanceof Error ? error.message : String(error);
        console.error("Erro ao buscar tickets:", errMsg);
        return NextResponse.json(
            { error: "Erro ao buscar tickets." },
            { status: 500 }
        );
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { descricao_pedido, cliente_id, valor_estimado, data_validade, status } = body;

        if (!descricao_pedido || !descricao_pedido.trim()) {
            return NextResponse.json(
                { error: "A descrição do orçamento é obrigatória." },
                { status: 400 }
            );
        }

        const ticket = await prisma.tickets.create({
            data: {
                descricao_pedido: descricao_pedido.trim(),
                cliente_id: cliente_id ? parseInt(cliente_id) : null,
                valor_estimado: valor_estimado ? parseFloat(valor_estimado) : null,
                data_validade: data_validade ? new Date(data_validade) : null,
                status: status || "Aberto",
            },
            include: {
                clientes: {
                    select: { nome: true }
                }
            }
        });

        return NextResponse.json(
            {
                id: ticket.id,
                loja_id: ticket.loja_id,
                cliente_id: ticket.cliente_id,
                cliente_nome: ticket.clientes?.nome || null,
                descricao_pedido: ticket.descricao_pedido,
                status: ticket.status,
                valor_estimado: ticket.valor_estimado ? Number(ticket.valor_estimado) : null,
                data_criacao: ticket.data_criacao,
                data_validade: ticket.data_validade,
                data_agendamento: ticket.data_agendamento,
                hora_agendamento: ticket.hora_agendamento,
            },
            { status: 201 }
        );
    } catch (error: unknown) {
        const errMsg = error instanceof Error ? error.message : String(error);
        console.error("Erro ao cadastrar orçamento:", errMsg);
        return NextResponse.json(
            { error: "Erro ao cadastrar orçamento." },
            { status: 500 }
        );
    }
}
