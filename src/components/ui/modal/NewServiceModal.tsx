"use client";

import React, { useState } from "react";
import { X, Package, DollarSign, Bot } from "lucide-react";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { CreateServicoData } from "@/src/lib/servicos";

interface NewServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (data: CreateServicoData) => Promise<void>;
}

export default function NewServiceModal({
    isOpen,
    onClose,
    onSave,
}: NewServiceModalProps) {
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const [instrucaoIa, setInstrucaoIa] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    if (!isOpen) return null;

    const resetForm = () => {
        setNome("");
        setPreco("");
        setInstrucaoIa("");
        setError("");
    };

    const handleClose = () => {
        resetForm();
        onClose();
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!nome.trim()) {
            setError("O nome do serviço é obrigatório.");
            return;
        }

        if (preco && isNaN(parseFloat(preco))) {
            setError("O preço deve ser um valor numérico válido.");
            return;
        }

        setIsLoading(true);
        try {
            await onSave({
                nome: nome.trim(),
                preco: preco.trim() || undefined,
                instrucao_ia: instrucaoIa.trim() || undefined,
            });
            handleClose();
        } catch (err) {
            setError(
                err instanceof Error ? err.message : "Erro ao cadastrar serviço."
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
                    relative w-full max-w-lg
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
                            Novo Serviço
                        </h3>
                        <p className="text-sm text-zinc-500 mt-0.5">
                            Cadastre um novo serviço
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

                    {/* Nome */}
                    <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-1.5">
                            Nome do Serviço <span className="text-red-400">*</span>
                        </label>
                        <Input
                            icon={<Package />}
                            placeholder="Ex: Manutenção de site"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            autoFocus
                        />
                    </div>

                    {/* Preço */}
                    <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-1.5">
                            Preço (R$)
                        </label>
                        <Input
                            icon={<DollarSign />}
                            placeholder="0.00"
                            type="number"
                            step="0.01"
                            min="0"
                            value={preco}
                            onChange={(e) => setPreco(e.target.value)}
                        />
                    </div>

                    {/* Instrução IA */}
                    <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-1.5">
                            Instrução IA
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
                                <Bot className="w-5 h-5" />
                            </span>
                            <textarea
                                placeholder="Instruções para a IA sobre este serviço..."
                                value={instrucaoIa}
                                onChange={(e) => setInstrucaoIa(e.target.value)}
                                rows={3}
                                className="
                                    w-full bg-transparent text-sm text-zinc-200
                                    placeholder:text-zinc-500
                                    outline-none border-none resize-none
                                "
                            />
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
                            Salvar Serviço
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
