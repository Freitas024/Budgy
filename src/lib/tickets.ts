export interface TicketDB {
    id: number;
    loja_id: number | null;
    cliente_id: number | null;
    cliente_nome: string | null;
    descricao_pedido: string | null;
    status: string | null;
    valor_estimado: number | null;
    data_criacao: string | null;
    data_validade: string | null;
    data_agendamento: string | null;
    hora_agendamento: string | null;
}

export interface CreateTicketData {
    descricao_pedido: string;
    cliente_id?: string;
    valor_estimado?: string;
    data_validade?: string;
    status?: string;
}

export async function fetchTickets(): Promise<TicketDB[]> {
    const res = await fetch("/api/tickets");

    if (!res.ok) {
        throw new Error("Erro ao buscar orçamentos.");
    }

    return await res.json();
}

export async function createTicket(data: CreateTicketData): Promise<TicketDB> {
    const res = await fetch("/api/tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Erro ao cadastrar orçamento.");
    }

    return await res.json();
}
