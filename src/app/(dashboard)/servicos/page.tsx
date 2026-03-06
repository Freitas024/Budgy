"use client";

import { useState } from "react";
import { SearchInput } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { ServiceCard } from "@/src/components/ui/cards";
import { NewServiceModal } from "@/src/components/ui/modal";
import { useServicos } from "@/src/hooks/useServicos";
import { Plus } from "lucide-react";

export default function ServicosPage() {
    const { servicos, isLoading, error, addServico } = useServicos();
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-zinc-100">Serviços</h2>
                    <h3 className="text-sm text-zinc-500 mt-1">
                        Projetos e serviços ativos
                    </h3>
                </div>
                <Button
                    fullWidth={false}
                    className="flex items-center gap-2"
                    onClick={() => setShowModal(true)}
                >
                    <Plus className="w-4 h-4" />
                    Novo Serviço
                </Button>
            </div>

            {/* Search */}
            <SearchInput
                placeholder="Buscar serviços..."
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
                    Carregando serviços...
                </p>
            )}

            {/* Empty state */}
            {!isLoading && !error && servicos.length === 0 && (
                <p className="text-sm text-zinc-500 text-center py-10">
                    Nenhum serviço encontrado.
                </p>
            )}

            {/* Service cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {servicos.map((servico) => (
                    <ServiceCard
                        key={servico.id}
                        servico={servico}
                        onViewDetails={() => { }}
                    />
                ))}
            </div>

            {/* Modal */}
            <NewServiceModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                onSave={addServico}
            />
        </div>
    );
}
