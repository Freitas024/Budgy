"use client";

import { SearchInput } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { ClientCard } from "@/src/components/ui/cards";
import { mockClients } from "@/src/config";
import { Plus } from "lucide-react";

export default function ClientePage() {
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
                <Button fullWidth={false} className="flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    Adicionar Cliente
                </Button>
            </div>

            {/* Search */}
            <SearchInput
                placeholder="Buscar cliente por nome, e-mail, telefone..."
                className="mb-6"
            />

            {/* Client cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {mockClients.map((client) => (
                    <ClientCard
                        key={client.companyName}
                        {...client}
                        onViewDetails={() => { }}
                    />
                ))}
            </div>
        </div>
    );
}
