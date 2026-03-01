"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "@/src/lib/auth";
import { formatPhone } from "@/src/lib/formatPhone";

interface RegisterFormData {
    nome: string;
    email: string;
    password: string;
    confirmPassword: string;
    telefoneWhatsapp: string;
    ramoAtividade: string;
    horarioFuncionamento: string;
}

const initialFormData: RegisterFormData = {
    nome: "",
    email: "",
    password: "",
    confirmPassword: "",
    telefoneWhatsapp: "",
    ramoAtividade: "",
    horarioFuncionamento: "",
};

export function useRegister() {
    const [formData, setFormData] = useState<RegisterFormData>(initialFormData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    // Visibilidade da senha
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const toggleShowPassword = () => setShowPassword((prev) => !prev);
    const toggleShowConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

    // Atualiza qualquer campo do formData
    const handleChange = (field: keyof RegisterFormData, value: string) => {
        const formatted = field === "telefoneWhatsapp" ? formatPhone(value) : value;
        setFormData((prev) => ({ ...prev, [field]: formatted }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (formData.password !== formData.confirmPassword) {
            setError("As senhas não coincidem.");
            return;
        }

        if (formData.password.length < 6) {
            setError("A senha deve ter no mínimo 6 caracteres.");
            return;
        }

        setIsLoading(true);

        try {
            await registerUser({
                nome: formData.nome,
                email: formData.email,
                password: formData.password,
                telefone_whatsapp: formData.telefoneWhatsapp,
                ramo_atividade: formData.ramoAtividade,
                horario_funcionamento: formData.horarioFuncionamento,
            });

            router.push("/");
        } catch (err) {
            setError(err instanceof Error ? err.message : "Erro de conexão. Tente novamente.");
        } finally {
            setIsLoading(false);
        }
    };

    return {
        formData,
        handleChange,

        // Password visibility
        showPassword, toggleShowPassword,
        showConfirmPassword, toggleShowConfirmPassword,

        // Submit
        isLoading,
        error,
        handleSubmit,
    };
}
