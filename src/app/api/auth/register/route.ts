import { NextRequest, NextResponse } from "next/server";
import prisma from "@/src/lib/db";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const {
            nome,
            email,
            password,
            telefone_whatsapp,
            ramo_atividade,
            horario_funcionamento,
        } = body;

        // Validações
        if (
            !nome ||
            !email ||
            !password ||
            !telefone_whatsapp ||
            !ramo_atividade ||
            !horario_funcionamento
        ) {
            return NextResponse.json(
                { error: "Todos os campos são obrigatórios." },
                { status: 400 }
            );
        }

        if (password.length < 6) {
            return NextResponse.json(
                { error: "A senha deve ter no mínimo 6 caracteres." },
                { status: 400 }
            );
        }

        // Verificar se email já existe
        const existingEmail = await prisma.lojas.findFirst({
            where: { email },
            select: { id: true }
        });

        if (existingEmail) {
            return NextResponse.json(
                { error: "Já existe uma loja cadastrada com este e-mail." },
                { status: 409 }
            );
        }

        // Verificar se telefone já existe
        const existingPhone = await prisma.lojas.findFirst({
            where: { telefone_whatsapp },
            select: { id: true }
        });

        if (existingPhone) {
            return NextResponse.json(
                { error: "Já existe uma loja cadastrada com este telefone." },
                { status: 409 }
            );
        }

        // Hash da senha
        const salt = await bcrypt.genSalt(10);
        const password_hash = await bcrypt.hash(password, salt);

        // Inserir no banco
        const result = await prisma.lojas.create({
            data: {
                nome,
                telefone_whatsapp,
                ativo: true,
                horario_funcionamento,
                ramo_atividade,
                email,
                password_hash,
            },
            select: { id: true, nome: true, email: true }
        });

        return NextResponse.json(
            {
                message: "Loja cadastrada com sucesso!",
                loja: result,
            },
            { status: 201 }
        );
    } catch (error: unknown) {
        const errMsg = error instanceof Error ? error.message : String(error);
        const errStack = error instanceof Error ? error.stack : "";
        console.error("Erro ao cadastrar loja:", errMsg);
        console.error("Stack:", errStack);
        return NextResponse.json(
            { error: "Erro interno do servidor.", detail: errMsg },
            { status: 500 }
        );
    }
}
