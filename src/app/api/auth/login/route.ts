import { NextRequest, NextResponse } from "next/server";
import pool from "@/src/lib/db";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
    try {
        const { email, password } = await request.json();

        // 1. Validar campos
        if (!email || !password) {
            return NextResponse.json(
                { error: "E-mail e senha são obrigatórios." },
                { status: 400 }
            );
        }

        // 2. Buscar loja pelo email
        const result = await pool.query(
            "SELECT id, nome, email, password_hash FROM public.lojas WHERE email = $1",
            [email]
        );

        // 3. Se não encontrou → 401
        if (result.rows.length === 0) {
            return NextResponse.json(
                { error: "E-mail ou senha incorretos." },
                { status: 401 }
            );
        }

        const loja = result.rows[0];

        // 4. Comparar senha com o hash do banco
        const senhaCorreta = await bcrypt.compare(password, loja.password_hash);

        // 5. Se senha não bate → 401 (mesma mensagem por segurança)
        if (!senhaCorreta) {
            return NextResponse.json(
                { error: "E-mail ou senha incorretos." },
                { status: 401 }
            );
        }

        // 6. Sucesso → retornar dados da loja (sem o hash)
        return NextResponse.json(
            {
                message: "Login realizado com sucesso!",
                loja: {
                    id: loja.id,
                    nome: loja.nome,
                    email: loja.email,
                },
            },
            { status: 200 }
        );
    } catch (error: unknown) {
        const errMsg = error instanceof Error ? error.message : String(error);
        console.error("Erro no login:", errMsg);
        return NextResponse.json(
            { error: "Erro interno do servidor." },
            { status: 500 }
        );
    }
}