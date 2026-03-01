"use client";

import React from "react";
import { Servico } from "@/src/types";

interface ServiceCardProps extends Servico {
    onViewDetails?: () => void;
}

const statusStyles = {
    em_andamento: "bg-blue-500/15 text-blue-400",
    concluido: "bg-green-500/15 text-green-400",
    aguardando: "bg-yellow-500/15 text-yellow-400",
    cancelado: "bg-red-500/15 text-red-400",
};

const statusLabels = {
    em_andamento: "Em andamento",
    concluido: "Concluído",
    aguardando: "Aguardando aprovação",
    cancelado: "Cancelado",
};

const priorityStyles = {
    alta: "bg-red-500/15 text-red-400",
    media: "bg-yellow-500/15 text-yellow-400",
    baixa: "bg-zinc-500/15 text-zinc-400",
};

const priorityLabels = {
    alta: "Alta",
    media: "Média",
    baixa: "Baixa",
};

const progressBarColor = (progress: number) => {
    if (progress >= 100) return "bg-green-500";
    if (progress >= 50) return "bg-purple-500";
    return "bg-purple-500";
};

export default function ServiceCard({
    title,
    clientName,
    category,
    status,
    priority,
    progress,
    value,
    deadline,
    onViewDetails,
}: ServiceCardProps) {
    return (
        <div
            onClick={onViewDetails}
            className="
        flex flex-col rounded-xl
        bg-zinc-900 border border-zinc-800
        hover:border-zinc-700 transition-all duration-200
        cursor-pointer
      "
        >
            {/* Header: title + priority */}
            <div className="flex items-start justify-between px-5 pt-5 pb-1">
                <div>
                    <p className="text-sm font-semibold text-zinc-100">{title}</p>
                    <p className="text-xs text-zinc-500 mt-0.5">
                        {clientName} · {category}
                    </p>
                </div>
                <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full ${priorityStyles[priority]}`}
                >
                    {priorityLabels[priority]}
                </span>
            </div>

            {/* Status */}
            <div className="px-5 pt-2 pb-3">
                <span
                    className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${statusStyles[status]}`}
                >
                    {statusLabels[status]}
                </span>
            </div>

            {/* Progress */}
            <div className="px-5 pb-4">
                <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs text-zinc-500">Progresso</span>
                    <span className="text-xs font-medium text-zinc-300">{progress}%</span>
                </div>
                <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                    <div
                        className={`h-full rounded-full transition-all duration-500 ${progressBarColor(progress)}`}
                        style={{ width: `${Math.min(progress, 100)}%` }}
                    />
                </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-5 py-3 border-t border-zinc-800">
                <span className="text-xs text-zinc-500">{value}</span>
                <span className="text-xs text-zinc-500">Prazo: {deadline}</span>
            </div>
        </div>
    );
}
