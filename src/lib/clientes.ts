import { ClienteDB } from "@/src/types";

export async function fetchClientes(): Promise<ClienteDB[]> {
    const res = await fetch("/api/clientes");

    if (!res.ok) {
        throw new Error("Erro ao buscar clientes.");
    }

    return await res.json();
}
