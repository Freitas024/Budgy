export interface ServicoDB {
    id: number;
    loja_id: number | null;
    nome: string | null;
    preco: number | null;
    instrucao_ia: string | null;
}

export interface CreateServicoData {
    nome: string;
    preco?: string;
    instrucao_ia?: string;
}

export async function fetchServicos(): Promise<ServicoDB[]> {
    const res = await fetch("/api/servicos");

    if (!res.ok) {
        throw new Error("Erro ao buscar serviços.");
    }

    return await res.json();
}

export async function createServico(data: CreateServicoData): Promise<ServicoDB> {
    const res = await fetch("/api/servicos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Erro ao cadastrar serviço.");
    }

    return await res.json();
}
