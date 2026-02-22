"use client";

import React from "react";

interface BudgetCardProps {
    code: string;
    title: string;
    clientName: string;
    status: "aprovado" | "pendente" | "recusado";
    value: string;
    createdAt: string;
    validUntil: string;
    onViewDetails?: () => void;
}

const statusStyles = {
    aprovado: "bg-green-500/15 text-green-400",
    pendente: "bg-yellow-500/15 text-yellow-400",
    recusado: "bg-red-500/15 text-red-400",
};

const statusLabels = {
    aprovado: "Aprovado",
    pendente: "Pendente",
    recusado: "Recusado",
};

export default function BudgetCard({
    code,
    title,
    clientName,
    status,
    value,
    createdAt,
    validUntil,
    onViewDetails,
}: BudgetCardProps) {
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
            {/* Header: code + status + value */}
            <div className="flex items-start justify-between px-5 pt-5 pb-2">
                <div className="flex items-center gap-2">
                    <span className="text-xs text-zinc-500 font-mono">{code}</span>
                    <span
                        className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${statusStyles[status]}`}
                    >
                        {statusLabels[status]}
                    </span>
                </div>
                <span className="text-lg font-bold text-zinc-100">{value}</span>
            </div>

            {/* Title + client */}
            <div className="px-5 pb-4">
                <p className="text-sm font-semibold text-zinc-100">{title}</p>
                <p className="text-xs text-zinc-500 mt-0.5">{clientName}</p>
            </div>

            {/* Footer: dates */}
            <div className="flex items-center justify-between px-5 py-3 border-t border-zinc-800">
                <span className="text-xs text-zinc-500">Criado: {createdAt}</span>
                <span className="text-xs text-zinc-500">Validade: {validUntil}</span>
            </div>
        </div>
    );
}
