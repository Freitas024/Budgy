export interface Loja {
    id?: number;
    nome: string;
    telefone_whatsapp: string;
    ativo: boolean;
    data_cadastro?: string;
    horario_funcionamento: string;
    ramo_atividade: string;
    email: string;
    password_hash?: string;
}
