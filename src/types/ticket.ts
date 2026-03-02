export type TicketStatus = "aberto" | "em_andamento" | "concluido" | "cancelado";

export interface Ticket {
    id: number;
    loja_id: number;
    cliente_id: number | null;
    descricao_pedido: string;
    data_agendamento: string | null;
    hora_agendamento: string | null;
    status: TicketStatus;
    valor_estimado: number | null;
    data_criacao: string;
    data_validade: string | null;
}
