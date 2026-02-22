"use client";

import React from "react";

interface ClientCardProps {
    companyName: string;
    contactName: string;
    status: "ativo" | "inativo" | "pendente";
    budgets: number;
    conversion: string;
    total: string;
    lastContact: string;
    onViewDetails?: () => void;
}

const statusStyles = {
    ativo: "bg-green-500/15 text-green-400",
    inativo: "bg-zinc-500/15 text-zinc-400",
    pendente: "bg-yellow-500/15 text-yellow-400",
};

const statusLabels = {
    ativo: "Ativo",
    inativo: "Inativo",
    pendente: "Pendente",
};

export default function ClientCard({
    companyName,
    contactName,
    status,
    budgets,
    conversion,
    total,
    lastContact,
    onViewDetails,
}: ClientCardProps) {
    return (
        <div
            className="
        flex flex-col rounded-xl
        bg-zinc-900 border border-zinc-800
        hover:border-zinc-700 transition-all duration-200
      "
        >
            {/* Header: nome + status */}
            <div className="flex items-start justify-between px-5 pt-5 pb-4">
                <div>
                    <p className="text-sm font-semibold text-zinc-100">{companyName}</p>
                    <p className="text-xs text-zinc-500 mt-0.5">{contactName}</p>
                </div>
                <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusStyles[status]}`}
                >
                    {statusLabels[status]}
                </span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 px-5 py-4">
                <div className="text-center">
                    <p className="text-lg font-bold text-zinc-100">{budgets}</p>
                    <p className="text-xs text-zinc-500">Orçamentos</p>
                </div>
                <div className="text-center">
                    <p className="text-lg font-bold text-green-400">{conversion}</p>
                    <p className="text-xs text-zinc-500">Conversão</p>
                </div>
                <div className="text-center">
                    <p className="text-lg font-bold text-zinc-100">{total}</p>
                    <p className="text-xs text-zinc-500">Total</p>
                </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-5 py-3 border-t border-zinc-800">
                <span className="text-xs text-zinc-500">
                    Último contato: {lastContact}
                </span>
                {onViewDetails && (
                    <button
                        onClick={onViewDetails}
                        className="text-xs text-purple-400 hover:text-purple-300 transition-colors cursor-pointer"
                    >
                        Ver detalhes
                    </button>
                )}
            </div>
        </div>
    );
}
