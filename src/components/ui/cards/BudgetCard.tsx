"use client";

import React from "react";
import { TicketDB } from "@/src/lib/tickets";
import { User, Calendar } from "lucide-react";

interface BudgetCardProps {
    ticket: TicketDB;
    onViewDetails?: () => void;
}

const statusStyles: Record<string, string> = {
    Aberto: "bg-blue-500/15 text-blue-400",
    "Em andamento": "bg-yellow-500/15 text-yellow-400",
    Concluído: "bg-green-500/15 text-green-400",
    Cancelado: "bg-red-500/15 text-red-400",
};

export default function BudgetCard({
    ticket,
    onViewDetails,
}: BudgetCardProps) {
    const formattedValue = ticket.valor_estimado
        ? `R$ ${ticket.valor_estimado.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`
        : "—";

    const formattedDate = (date: string | null) => {
        if (!date) return "—";
        return new Date(date).toLocaleDateString("pt-BR");
    };

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
            {/* Header: status + valor */}
            <div className="flex items-start justify-between px-5 pt-5 pb-2">
                <div className="flex items-center gap-2">
                    <span className="text-xs text-zinc-500 font-mono">
                        #{ticket.id}
                    </span>
                    <span
                        className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${statusStyles[ticket.status || "Aberto"] || statusStyles["Aberto"]}`}
                    >
                        {ticket.status || "Aberto"}
                    </span>
                </div>
                <span className="text-lg font-bold text-zinc-100">
                    {formattedValue}
                </span>
            </div>

            {/* Descrição + cliente */}
            <div className="px-5 pb-4">
                <p className="text-sm font-semibold text-zinc-100 line-clamp-2">
                    {ticket.descricao_pedido || "Sem descrição"}
                </p>
                {ticket.cliente_nome && (
                    <p className="flex items-center gap-1.5 text-xs text-zinc-500 mt-1">
                        <User className="w-3 h-3" />
                        {ticket.cliente_nome}
                    </p>
                )}
            </div>

            {/* Footer: datas */}
            <div className="flex items-center justify-between px-5 py-3 border-t border-zinc-800">
                <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Calendar className="w-3 h-3" />
                    Criado: {formattedDate(ticket.data_criacao)}
                </span>
                {ticket.data_validade && (
                    <span className="text-xs text-zinc-500">
                        Validade: {formattedDate(ticket.data_validade)}
                    </span>
                )}
            </div>
        </div>
    );
}
