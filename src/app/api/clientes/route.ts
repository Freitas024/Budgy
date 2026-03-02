import { NextResponse } from "next/server";
import pool from "@/src/lib/db";

export async function GET() {
    try {
        const result = await pool.query(`
            SELECT 
                c.id,
                c.loja_id,
                c.nome,
                c.whatsapp,
                c.email,
                c.observacoes,
                c.ativo,
                c.data_cadastro,
                COUNT(t.id)::int AS total_tickets
            FROM public.clientes c
            LEFT JOIN public.tickets t ON t.cliente_id = c.id
            GROUP BY c.id
            ORDER BY c.data_cadastro DESC
        `);

        return NextResponse.json(result.rows, { status: 200 });
    } catch (error: unknown) {
        const errMsg = error instanceof Error ? error.message : String(error);
        console.error("Erro ao buscar clientes:", errMsg);
        return NextResponse.json(
            { error: "Erro ao buscar clientes." },
            { status: 500 }
        );
    }
}
