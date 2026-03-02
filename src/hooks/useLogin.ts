"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/src/lib/auth";

interface LoginFormData {
    email: string;
    password: string;
}

const initialFormData: LoginFormData = {
    email: "",
    password: "",
};

export function useLogin() {
    const [formData, setFormData] = useState<LoginFormData>(initialFormData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    // Visibilidade da senha
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => setShowPassword((prev) => !prev);

    // Atualiza qualquer campo do formData
    const handleChange = (field: keyof LoginFormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!formData.email || !formData.password) {
            setError("Preencha e-mail e senha.");
            return;
        }

        setIsLoading(true);

        try {
            await loginUser({
                email: formData.email,
                password: formData.password,
            });

            router.push("/inicio");
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

        // Submit
        isLoading,
        error,
        handleSubmit,
    };
}
