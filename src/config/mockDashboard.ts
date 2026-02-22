export const mockStats = [
    {
        value: "127",
        label: "Total de clientes",
        badge: "+12%",
        badgeColor: "green" as const,
        iconName: "Users" as const,
    },
    {
        value: "18",
        label: "Orçamentos ativos",
        badge: "+3",
        badgeColor: "green" as const,
        iconName: "FileText" as const,
        iconBgColor: "bg-blue-600",
    },
    {
        value: "42",
        label: "Orçamentos aprovados",
        badge: "78%",
        badgeColor: "purple" as const,
        iconName: "CheckCircle" as const,
        iconBgColor: "bg-purple-600",
    },
];

export const mockChartData = [
    { label: "Aprovados", value: 42, color: "#22c55e" },
    { label: "Pendentes", value: 18, color: "#f59e0b" },
    { label: "Recusados", value: 8, color: "#ef4444" },
];

export const mockActivities = [
    {
        iconName: "FileText" as const,
        description: "Novo orçamento criado para TechSoft Ltda.",
        time: "Há 15 min",
    },
    {
        iconName: "DollarSign" as const,
        description: "Pagamento recebido — R$ 4.500,00",
        time: "Há 1 hora",
    },
    {
        iconName: "CheckCircle" as const,
        description: "Serviço concluído: Manutenção Server Pro",
        time: "Há 2 horas",
    },
    {
        iconName: "UserPlus" as const,
        description: "Novo cliente cadastrado: Marina Silva",
        time: "Há 3 horas",
    },
    {
        iconName: "CheckCircle" as const,
        description: "Orçamento aprovado — Digital Wave",
        time: "Há 5 horas",
    },
];
