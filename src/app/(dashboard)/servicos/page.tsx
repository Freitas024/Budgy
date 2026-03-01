"use client";

import { SearchInput } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { ServiceCard } from "@/src/components/ui/cards";
import { mockServices } from "@/src/config";
import { Plus } from "lucide-react";

export default function ServicosPage() {
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
                <Button fullWidth={false} className="flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    Novo
                </Button>
            </div>

            {/* Search */}
            <SearchInput
                placeholder="Buscar serviços..."
                className="mb-6"
            />

            {/* Service cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {mockServices.map((service) => (
                    <ServiceCard
                        key={service.title}
                        {...service}
                        onViewDetails={() => { }}
                    />
                ))}
            </div>
        </div>
    );
}
