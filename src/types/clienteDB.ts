export interface ClienteDB {
    id: number;
    loja_id: number;
    nome: string;
    whatsapp: string;
    email: string | null;
    observacoes: string | null;
    ativo: boolean;
    data_cadastro: string;
    total_tickets: number;
}
