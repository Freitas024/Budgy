"use client";

import React from "react";
import { ServicoDB } from "@/src/lib/servicos";
import { DollarSign, Bot } from "lucide-react";

interface ServiceCardProps {
    servico: ServicoDB;
    onViewDetails?: () => void;
}

export default function ServiceCard({
    servico,
    onViewDetails,
}: ServiceCardProps) {
    const formattedPrice = servico.preco
        ? `R$ ${servico.preco.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`
        : "Sem preço";

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
            {/* Header: nome + preço */}
            <div className="flex items-start justify-between px-5 pt-5 pb-4">
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-zinc-100 truncate">
                        {servico.nome}
                    </p>
                </div>
                <div className="flex items-center gap-1.5 ml-3 flex-shrink-0">
                    <DollarSign className="w-4 h-4 text-green-400" />
                    <span className="text-sm font-bold text-zinc-100">
                        {formattedPrice}
                    </span>
                </div>
            </div>

            {/* Instrução IA */}
            {servico.instrucao_ia && (
                <div className="px-5 pb-4">
                    <div className="flex items-start gap-2">
                        <Bot className="w-3.5 h-3.5 text-purple-400 mt-0.5 flex-shrink-0" />
                        <p className="text-xs text-zinc-400 line-clamp-2">
                            {servico.instrucao_ia}
                        </p>
                    </div>
                </div>
            )}

            {/* Footer */}
            <div className="flex items-center justify-between px-5 py-3 border-t border-zinc-800">
                <span className="text-xs text-zinc-500">
                    ID: {servico.id}
                </span>
                {onViewDetails && (
                    <button
                        onClick={(e) => { e.stopPropagation(); onViewDetails(); }}
                        className="text-xs text-purple-400 hover:text-purple-300 transition-colors cursor-pointer"
                    >
                        Ver detalhes
                    </button>
                )}
            </div>
        </div>
    );
}
