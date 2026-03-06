import { NextRequest, NextResponse } from "next/server";
import prisma from "@/src/lib/db";

export async function GET() {
    try {
        const servicos = await prisma.servicos.findMany({
            orderBy: { id: "desc" },
        });

        const result = servicos.map((s) => ({
            id: s.id,
            loja_id: s.loja_id,
            nome: s.nome,
            preco: s.preco ? Number(s.preco) : null,
            instrucao_ia: s.instrucao_ia,
        }));

        return NextResponse.json(result, { status: 200 });
    } catch (error: unknown) {
        const errMsg = error instanceof Error ? error.message : String(error);
        console.error("Erro ao buscar serviços:", errMsg);
        return NextResponse.json(
            { error: "Erro ao buscar serviços." },
            { status: 500 }
        );
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { nome, preco, instrucao_ia } = body;

        if (!nome || !nome.trim()) {
            return NextResponse.json(
                { error: "O nome do serviço é obrigatório." },
                { status: 400 }
            );
        }

        const servico = await prisma.servicos.create({
            data: {
                nome: nome.trim(),
                preco: preco ? parseFloat(preco) : null,
                instrucao_ia: instrucao_ia?.trim() || null,
            },
        });

        return NextResponse.json(
            {
                id: servico.id,
                loja_id: servico.loja_id,
                nome: servico.nome,
                preco: servico.preco ? Number(servico.preco) : null,
                instrucao_ia: servico.instrucao_ia,
            },
            { status: 201 }
        );
    } catch (error: unknown) {
        const errMsg = error instanceof Error ? error.message : String(error);
        console.error("Erro ao cadastrar serviço:", errMsg);
        return NextResponse.json(
            { error: "Erro ao cadastrar serviço." },
            { status: 500 }
        );
    }
}
