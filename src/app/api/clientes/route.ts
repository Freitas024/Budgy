import { NextResponse } from "next/server";
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
