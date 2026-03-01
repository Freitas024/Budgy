export type ServicoStatus = "em_andamento" | "concluido" | "aguardando" | "cancelado";
export type ServicoPrioridade = "alta" | "media" | "baixa";

export interface Servico {
    id?: number;
    title: string;
    clientName: string;
    category: string;
    status: ServicoStatus;
    priority: ServicoPrioridade;
    progress: number;
    value: string;
    deadline: string;
}
