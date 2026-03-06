"use client";

import { useState } from "react";
import { SearchInput } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { ClientCard } from "@/src/components/ui/cards";
import { NewClientModal } from "@/src/components/ui/modal";
import { useClientes } from "@/src/hooks/useClientes";
import { Plus } from "lucide-react";

export default function ClientePage() {
    const { clientes, isLoading, error, addCliente } = useClientes();
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-zinc-100">Clientes</h2>
                    <h3 className="text-sm text-zinc-500 mt-1">
                        Gerencie sua base de clientes
                    </h3>
                </div>
                <Button
                    fullWidth={false}
                    className="flex items-center gap-2"
                    onClick={() => setShowModal(true)}
                >
                    <Plus className="w-4 h-4" />
                    Adicionar Cliente
                </Button>
            </div>

            {/* Search */}
            <SearchInput
                placeholder="Buscar cliente por nome, telefone..."
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
                    Carregando clientes...
                </p>
            )}

            {/* Empty state */}
            {!isLoading && !error && clientes.length === 0 && (
                <p className="text-sm text-zinc-500 text-center py-10">
                    Nenhum cliente encontrado.
                </p>
            )}

            {/* Client cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {clientes.map((cliente) => (
                    <ClientCard
                        key={cliente.id}
                        cliente={cliente}
                        onViewDetails={() => { }}
                    />
                ))}
            </div>

            {/* Modal */}
            <NewClientModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                onSave={addCliente}
            />
        </div>
    );
}
