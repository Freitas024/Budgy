"use client";

import { StatsCard, DonutChartCard, ActivityCard } from "@/src/components/ui/cards";
import { Users, FileText, CheckCircle, DollarSign, UserPlus } from "lucide-react";
import { SearchInput } from "@/src/components/ui/input";
import { mockStats, mockChartData, mockActivities } from "@/src/config";
import { ReactNode } from "react";

const iconMap: Record<string, ReactNode> = {
    Users: <Users />,
    FileText: <FileText />,
    CheckCircle: <CheckCircle />,
    DollarSign: <DollarSign />,
    UserPlus: <UserPlus />,
};

export default function InicioPage() {
    return (
        <div>
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-zinc-100">Olá, seja bem-vindo!</h1>
                <p className="text-sm text-zinc-500 mt-1">Visão geral do seu negócio</p>
            </div>

            <SearchInput placeholder="clientes, orçamentos, projetos...." className="mb-4" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {mockStats.map((stat) => (
                    <StatsCard
                        key={stat.label}
                        icon={iconMap[stat.iconName]}
                        value={stat.value}
                        label={stat.label}
                        badge={stat.badge}
                        badgeColor={stat.badgeColor}
                        iconBgColor={stat.iconBgColor}
                    />
                ))}
            </div>

            {/* Gráfico de orçamentos */}
            <div className="mt-6">
                <DonutChartCard title="Status dos orçamentos" data={mockChartData} />
            </div>

            {/* Atividades recentes */}
            <div className="mt-6">
                <ActivityCard
                    title="Atividades recentes"
                    onViewAll={() => { }}
                    items={mockActivities.map((a) => ({
                        icon: iconMap[a.iconName],
                        description: a.description,
                        time: a.time,
                    }))}
                />
            </div>
        </div>
    );
}