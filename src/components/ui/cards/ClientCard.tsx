"use client";

import React from "react";
import { ClienteDB } from "@/src/types";
import { Phone, Mail, Ticket } from "lucide-react";

interface ClientCardProps {
    cliente: ClienteDB;
    onViewDetails?: () => void;
}

export default function ClientCard({
    cliente,
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
            {/* Header: nome + status ativo */}
            <div className="flex items-start justify-between px-5 pt-5 pb-4">
                <div>
                    <p className="text-sm font-semibold text-zinc-100">
                        {cliente.nome}
                    </p>
                    <p className="flex items-center gap-1.5 text-xs text-zinc-500 mt-1">
                        <Phone className="w-3 h-3" />
                        {cliente.whatsapp}
                    </p>
                    {cliente.email && (
                        <p className="flex items-center gap-1.5 text-xs text-zinc-500 mt-1">
                            <Mail className="w-3 h-3" />
                            {cliente.email}
                        </p>
                    )}
                </div>
                <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full ${cliente.ativo
                            ? "bg-green-500/15 text-green-400"
                            : "bg-red-500/15 text-red-400"
                        }`}
                >
                    {cliente.ativo ? "Ativo" : "Inativo"}
                </span>
            </div>

            {/* Observações */}
            {cliente.observacoes && (
                <div className="px-5 pb-4">
                    <p className="text-sm text-zinc-400">{cliente.observacoes}</p>
                </div>
            )}

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 px-5 py-4 border-t border-zinc-800">
                <div className="flex items-center gap-2">
                    <Ticket className="w-4 h-4 text-purple-400" />
                    <div>
                        <p className="text-xs text-zinc-500">Tickets</p>
                        <p className="text-sm font-semibold text-zinc-100">
                            {cliente.total_tickets}
                        </p>
                    </div>
                </div>
                <div>
                    <p className="text-xs text-zinc-500">Desde</p>
                    <p className="text-sm font-semibold text-zinc-100">
                        {new Date(cliente.data_cadastro).toLocaleDateString("pt-BR")}
                    </p>
                </div>
            </div>

            {/* Footer */}
            {onViewDetails && (
                <div className="flex items-center justify-end px-5 py-3 border-t border-zinc-800">
                    <button
                        onClick={onViewDetails}
                        className="text-xs text-purple-400 hover:text-purple-300 transition-colors cursor-pointer"
                    >
                        Ver detalhes
                    </button>
                </div>
            )}
        </div>
    );
}
