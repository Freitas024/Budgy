export interface RegisterData {
    nome: string;
    email: string;
    password: string;
    telefone_whatsapp: string;
    ramo_atividade: string;
    horario_funcionamento: string;
}

export interface AuthResponse {
    message?: string;
    error?: string;
    loja?: {
        id: number;
        nome: string;
        email: string;
    };
}

export async function registerUser(data: RegisterData): Promise<AuthResponse> {
    const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    const json: AuthResponse = await res.json();

    if (!res.ok) {
        throw new Error(json.error || "Erro ao criar conta.");
    }

    return json;
}

export interface LoginData {
    email: string;
    password: string;
}

export async function loginUser(data: LoginData): Promise<AuthResponse> {
    const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    const json: AuthResponse = await res.json();

    if (!res.ok) {
        throw new Error(json.error || "E-mail ou senha incorretos.");
    }

    return json;
}
