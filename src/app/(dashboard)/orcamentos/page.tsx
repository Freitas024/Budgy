"use client";

import { useState } from "react";
import { SearchInput } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { BudgetCard } from "@/src/components/ui/cards";
import { NewBudgetModal } from "@/src/components/ui/modal";
import { useTickets } from "@/src/hooks/useTickets";
import { Plus } from "lucide-react";

export default function OrcamentosPage() {
    const { tickets, isLoading, error, addTicket } = useTickets();
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-zinc-100">Orçamentos</h2>
                    <h3 className="text-sm text-zinc-500 mt-1">
                        Gerencie suas propostas comerciais
                    </h3>
                </div>
                <Button
                    fullWidth={false}
                    className="flex items-center gap-2"
                    onClick={() => setShowModal(true)}
                >
                    <Plus className="w-4 h-4" />
                    Novo Orçamento
                </Button>
            </div>

            {/* Search */}
            <SearchInput
                placeholder="Buscar orçamentos..."
                className="mb-6"
            />

            {/* Error */}
            {error && (
                <div className="px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-sm text-red-400 mb-6">
                    {error}
                </div>
            )}

            {/* Loading */}
            {isLoading && (
                <p className="text-sm text-zinc-500 text-center py-10">
                    Carregando orçamentos...
                </p>
            )}

            {/* Empty state */}
            {!isLoading && !error && tickets.length === 0 && (
                <p className="text-sm text-zinc-500 text-center py-10">
                    Nenhum orçamento encontrado.
                </p>
            )}

            {/* Budget cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {tickets.map((ticket) => (
                    <BudgetCard
                        key={ticket.id}
                        ticket={ticket}
                        onViewDetails={() => { }}
                    />
                ))}
            </div>

            {/* Modal */}
            <NewBudgetModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                onSave={addTicket}
            />
        </div>
    );
}
