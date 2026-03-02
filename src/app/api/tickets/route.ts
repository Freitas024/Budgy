import { NextResponse } from "next/server";
import pool from "@/src/lib/db";

export async function GET() {
    try {
        const result = await pool.query(
            "SELECT * FROM public.tickets ORDER BY data_criacao DESC"
        );

        return NextResponse.json(result.rows, { status: 200 });
    } catch (error: unknown) {
        const errMsg = error instanceof Error ? error.message : String(error);
        console.error("Erro ao buscar tickets:", errMsg);
        return NextResponse.json(
            { error: "Erro ao buscar tickets." },
            { status: 500 }
        );
    }
}
