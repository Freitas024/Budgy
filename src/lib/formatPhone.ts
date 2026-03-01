
export function formatPhone(value: string): string {
    // 1. Remove tudo que não é dígito
    const digits = value.replace(/\D/g, "");

    // 2. Limita a 11 dígitos (DDD + 9 dígitos)
    const limited = digits.slice(0, 11);

    // 3. Aplica a máscara progressivamente
    if (limited.length <= 2) {
        // Só o DDD ou menos → mostra só os dígitos
        return limited;
    }

    const ddd = limited.slice(0, 2);
    const number = limited.slice(2);

    return `(${ddd}) ${number}`;
}
