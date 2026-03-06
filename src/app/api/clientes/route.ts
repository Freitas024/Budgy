import { NextRequest, NextResponse } from "next/server";
import prisma from "@/src/lib/db";

export async function GET() {
    try {
        const clientes = await prisma.clientes.findMany({
            include: {
                _count: {
                    select: { tickets: true }
                }
            },
            orderBy: { data_cadastro: "desc" }
        });

        const formattedResult = clientes.map((c: any) => ({
            id: c.id,
            loja_id: c.loja_id,
            nome: c.nome,
            whatsapp: c.whatsapp,
            email: c.email,
            observacoes: c.observacoes,
            ativo: c.ativo,
            data_cadastro: c.data_cadastro,
            total_tickets: c._count.tickets
        }));

        return NextResponse.json(formattedResult, { status: 200 });
    } catch (error: unknown) {
        const errMsg = error instanceof Error ? error.message : String(error);
        console.error("Erro ao buscar clientes:", errMsg);
        return NextResponse.json(
            { error: "Erro ao buscar clientes." },
            { status: 500 }
        );
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { nome, whatsapp, email, observacoes } = body;

        // Validações
        if (!nome || !whatsapp) {
            return NextResponse.json(
                { error: "Nome e WhatsApp são obrigatórios." },
                { status: 400 }
            );
        }

        // Validar mínimo de dígitos do telefone
        const phoneDigits = whatsapp.replace(/\D/g, "");
        if (phoneDigits.length < 10) {
            return NextResponse.json(
                { error: "O telefone deve ter no mínimo 10 dígitos (DDD + número)." },
                { status: 400 }
            );
        }

        const cliente = await prisma.clientes.create({
            data: {
                nome,
                whatsapp,
                email: email || null,
                observacoes: observacoes || null,
                ativo: true,
            },
            include: {
                _count: {
                    select: { tickets: true }
                }
            }
        });

        return NextResponse.json(
            {
                id: cliente.id,
                loja_id: cliente.loja_id,
                nome: cliente.nome,
                whatsapp: cliente.whatsapp,
                email: cliente.email,
                observacoes: cliente.observacoes,
                ativo: cliente.ativo,
                data_cadastro: cliente.data_cadastro,
                total_tickets: cliente._count.tickets,
            },
            { status: 201 }
        );
    } catch (error: unknown) {
        const errMsg = error instanceof Error ? error.message : String(error);
        console.error("Erro ao cadastrar cliente:", errMsg);
        return NextResponse.json(
            { error: "Erro ao cadastrar cliente." },
            { status: 500 }
        );
    }
}
