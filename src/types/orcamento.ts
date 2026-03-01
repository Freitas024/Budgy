export type OrcamentoStatus = "aprovado" | "pendente" | "recusado";

export interface Orcamento {
    id?: number;
    code: string;
    title: string;
    clientName: string;
    status: OrcamentoStatus;
    value: string;
    createdAt: string;
    validUntil: string;
}
