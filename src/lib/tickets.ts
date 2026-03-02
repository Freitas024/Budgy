import { Ticket } from "@/src/types";

export async function fetchTickets(): Promise<Ticket[]> {
    const res = await fetch("/api/tickets");

    if (!res.ok) {
        throw new Error("Erro ao buscar tickets.");
    }

    return await res.json();
}
