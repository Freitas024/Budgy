export const mockSettings = {
    company: {
        name: "Minha Empresa Ltda.",
        email: "contato@empresa.com.br",
        phone: "(11) 99999-9999",
    },
    notifications: [
        {
            id: "new-budgets",
            label: "Novos orçamentos",
            description: "Receber alerta ao criar orçamento",
            enabled: true,
        },
        {
            id: "payments-received",
            label: "Pagamentos recebidos",
            description: "Notificar quando receber pagamento",
            enabled: true,
        },
        {
            id: "services-completed",
            label: "Serviços concluídos",
            description: "Alerta de conclusão de serviço",
            enabled: true,
        },
        {
            id: "weekly-reports",
            label: "Relatórios semanais",
            description: "Resumo semanal por e-mail",
            enabled: true,
        },
    ],
    users: [
        {
            id: "1",
            name: "Carlos Mendes",
            email: "carlos@empresa.com.br",
            role: "Administrador" as const,
        },
        {
            id: "2",
            name: "Ana Paula",
            email: "ana@empresa.com.br",
            role: "Colaborador" as const,
        },
    ],
};
