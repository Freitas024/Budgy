import { ClienteDB } from "@/src/types";

export async function fetchClientes(): Promise<ClienteDB[]> {
    const res = await fetch("/api/clientes");

    if (!res.ok) {
        throw new Error("Erro ao buscar clientes.");
    }

    return await res.json();
}

export interface CreateClienteData {
    nome: string;
    whatsapp: string;
    email?: string;
    observacoes?: string;
}

export async function createCliente(data: CreateClienteData): Promise<ClienteDB> {
    const res = await fetch("/api/clientes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Erro ao cadastrar cliente.");
    }

    return await res.json();
}
