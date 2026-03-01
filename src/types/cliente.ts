export type ClienteStatus = "ativo" | "inativo" | "pendente";

export interface Cliente {
    id?: number;
    companyName: string;
    contactName: string;
    status: ClienteStatus;
    budgets: number;
    conversion: string;
    total: string;
    lastContact: string;
}
