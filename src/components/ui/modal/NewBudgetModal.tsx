"use client";

import React, { useState, useEffect } from "react";
import { X, FileText, DollarSign, Calendar, User, Tag } from "lucide-react";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { CreateTicketData } from "@/src/lib/tickets";
import { ClienteDB } from "@/src/types";
import { fetchClientes } from "@/src/lib/clientes";

interface NewBudgetModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (data: CreateTicketData) => Promise<void>;
}

export default function NewBudgetModal({
    isOpen,
    onClose,
    onSave,
}: NewBudgetModalProps) {
    const [descricao, setDescricao] = useState("");
    const [clienteId, setClienteId] = useState("");
    const [valorEstimado, setValorEstimado] = useState("");
    const [dataValidade, setDataValidade] = useState("");
    const [status, setStatus] = useState("Aberto");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [clientes, setClientes] = useState<ClienteDB[]>([]);

    useEffect(() => {
        if (isOpen) {
            fetchClientes()
                .then(setClientes)
                .catch(() => { });
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const resetForm = () => {
        setDescricao("");
        setClienteId("");
        setValorEstimado("");
        setDataValidade("");
        setStatus("Aberto");
        setError("");
    };

    const handleClose = () => {
        resetForm();
        onClose();
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!descricao.trim()) {
            setError("A descrição do orçamento é obrigatória.");
            return;
        }

        if (valorEstimado && isNaN(parseFloat(valorEstimado))) {
            setError("O valor deve ser um número válido.");
            return;
        }

        setIsLoading(true);
        try {
            await onSave({
                descricao_pedido: descricao.trim(),
                cliente_id: clienteId || undefined,
                valor_estimado: valorEstimado.trim() || undefined,
                data_validade: dataValidade || undefined,
                status,
            });
            handleClose();
        } catch (err) {
            setError(
                err instanceof Error ? err.message : "Erro ao cadastrar orçamento."
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={handleClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Modal */}
            <div
                className="
                    relative w-full max-w-lg max-h-[90vh] overflow-y-auto
                    bg-zinc-900 border border-zinc-800
                    rounded-2xl shadow-2xl shadow-black/40
                    animate-[modalIn_0.2s_ease-out]
                "
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-800">
                    <div>
                        <h3 className="text-lg font-semibold text-zinc-100">
                            Novo Orçamento
                        </h3>
                        <p className="text-sm text-zinc-500 mt-0.5">
                            Cadastre uma nova proposta comercial
                        </p>
                    </div>
                    <button
                        onClick={handleClose}
                        className="p-2 rounded-lg text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800 transition-colors cursor-pointer"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
                    {/* Error */}
                    {error && (
                        <div className="px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-sm text-red-400">
                            {error}
                        </div>
                    )}

                    {/* Descrição */}
                    <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-1.5">
                            Descrição <span className="text-red-400">*</span>
                        </label>
                        <div
                            className="
                                flex items-start gap-3 w-full rounded-lg
                                bg-zinc-800/60 border border-zinc-700/50
                                px-4 py-3
                                transition-all duration-200
                                focus-within:border-purple-500 focus-within:ring-1 focus-within:ring-purple-500/30
                            "
                        >
                            <span className="text-zinc-400 flex-shrink-0 mt-0.5">
                                <FileText className="w-5 h-5" />
                            </span>
                            <textarea
                                placeholder="Descreva o orçamento..."
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                                rows={3}
                                autoFocus
                                className="
                                    w-full bg-transparent text-sm text-zinc-200
                                    placeholder:text-zinc-500
                                    outline-none border-none resize-none
                                "
                            />
                        </div>
                    </div>

                    {/* Cliente */}
                    <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-1.5">
                            Cliente
                        </label>
                        <div
                            className="
                                flex items-center gap-3 w-full rounded-lg
                                bg-zinc-800/60 border border-zinc-700/50
                                px-4 py-3
                                transition-all duration-200
                                focus-within:border-purple-500 focus-within:ring-1 focus-within:ring-purple-500/30
                            "
                        >
                            <span className="text-zinc-400 flex-shrink-0">
                                <User className="w-5 h-5" />
                            </span>
                            <select
                                value={clienteId}
                                onChange={(e) => setClienteId(e.target.value)}
                                className="
                                    w-full bg-transparent text-sm text-zinc-200
                                    outline-none border-none cursor-pointer
                                    [&>option]:bg-zinc-800 [&>option]:text-zinc-200
                                "
                            >
                                <option value="">Selecionar cliente...</option>
                                {clientes.map((c) => (
                                    <option key={c.id} value={c.id}>
                                        {c.nome}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Valor + Data side by side */}
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="block text-sm font-medium text-zinc-400 mb-1.5">
                                Valor Estimado (R$)
                            </label>
                            <Input
                                icon={<DollarSign />}
                                placeholder="0.00"
                                type="number"
                                step="0.01"
                                min="0"
                                value={valorEstimado}
                                onChange={(e) => setValorEstimado(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-zinc-400 mb-1.5">
                                Data Validade
                            </label>
                            <Input
                                icon={<Calendar />}
                                type="date"
                                value={dataValidade}
                                onChange={(e) => setDataValidade(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Status */}
                    <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-1.5">
                            Status
                        </label>
                        <div
                            className="
                                flex items-center gap-3 w-full rounded-lg
                                bg-zinc-800/60 border border-zinc-700/50
                                px-4 py-3
                                transition-all duration-200
                                focus-within:border-purple-500 focus-within:ring-1 focus-within:ring-purple-500/30
                            "
                        >
                            <span className="text-zinc-400 flex-shrink-0">
                                <Tag className="w-5 h-5" />
                            </span>
                            <select
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                className="
                                    w-full bg-transparent text-sm text-zinc-200
                                    outline-none border-none cursor-pointer
                                    [&>option]:bg-zinc-800 [&>option]:text-zinc-200
                                "
                            >
                                <option value="Aberto">Aberto</option>
                                <option value="Em andamento">Em andamento</option>
                                <option value="Concluído">Concluído</option>
                                <option value="Cancelado">Cancelado</option>
                            </select>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center gap-3 pt-2">
                        <Button
                            type="button"
                            variant="secondary"
                            onClick={handleClose}
                            disabled={isLoading}
                        >
                            Cancelar
                        </Button>
                        <Button
                            type="submit"
                            isLoading={isLoading}
                        >
                            Salvar Orçamento
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
