import { NextResponse } from "next/server";
import prisma from "@/src/lib/db";

export async function GET() {
    try {
        const result = await prisma.tickets.findMany({
            orderBy: { data_criacao: "desc" }
        });

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
