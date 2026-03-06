"use client";

import React, { useState } from "react";
import { X, User, Phone, Mail, FileText } from "lucide-react";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { formatPhone } from "@/src/lib/formatPhone";
import { CreateClienteData } from "@/src/lib/clientes";

interface NewClientModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (data: CreateClienteData) => Promise<void>;
}

export default function NewClientModal({
    isOpen,
    onClose,
    onSave,
}: NewClientModalProps) {
    const [nome, setNome] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [email, setEmail] = useState("");
    const [observacoes, setObservacoes] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    if (!isOpen) return null;

    const resetForm = () => {
        setNome("");
        setWhatsapp("");
        setEmail("");
        setObservacoes("");
        setError("");
    };

    const handleClose = () => {
        resetForm();
        onClose();
    };

    const handleWhatsappChange = (value: string) => {
        setWhatsapp(formatPhone(value));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!nome.trim()) {
            setError("O nome é obrigatório.");
            return;
        }

        if (!whatsapp.trim()) {
            setError("O WhatsApp é obrigatório.");
            return;
        }

        const phoneDigits = whatsapp.replace(/\D/g, "");
        if (phoneDigits.length < 10) {
            setError("O telefone deve ter no mínimo 10 dígitos (DDD + número).");
            return;
        }

        setIsLoading(true);
        try {
            await onSave({
                nome: nome.trim(),
                whatsapp: whatsapp.trim(),
                email: email.trim() || undefined,
                observacoes: observacoes.trim() || undefined,
            });
            handleClose();
        } catch (err) {
            setError(
                err instanceof Error ? err.message : "Erro ao cadastrar cliente."
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
                            Novo Cliente
                        </h3>
                        <p className="text-sm text-zinc-500 mt-0.5">
                            Preencha os dados do cliente
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
                            Nome <span className="text-red-400">*</span>
                        </label>
                        <Input
                            icon={<User />}
                            placeholder="Nome do cliente"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            autoFocus
                        />
                    </div>

                    {/* WhatsApp */}
                    <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-1.5">
                            WhatsApp <span className="text-red-400">*</span>
                        </label>
                        <Input
                            icon={<Phone />}
                            placeholder="(00) 00000-0000"
                            value={whatsapp}
                            onChange={(e) => handleWhatsappChange(e.target.value)}
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-1.5">
                            Email
                        </label>
                        <Input
                            icon={<Mail />}
                            placeholder="email@exemplo.com"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    {/* Observações */}
                    <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-1.5">
                            Observações
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
                                placeholder="Informações adicionais sobre o cliente..."
                                value={observacoes}
                                onChange={(e) => setObservacoes(e.target.value)}
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
                            Salvar Cliente
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
