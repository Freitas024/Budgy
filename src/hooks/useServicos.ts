"use client";

import { useState, useEffect, useCallback } from "react";
import { ServicoDB, fetchServicos, createServico, CreateServicoData } from "@/src/lib/servicos";

export function useServicos() {
    const [servicos, setServicos] = useState<ServicoDB[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isAdding, setIsAdding] = useState(false);
    const [error, setError] = useState("");

    const loadServicos = useCallback(() => {
        setIsLoading(true);
        fetchServicos()
            .then(setServicos)
            .catch((err) => setError(err.message))
            .finally(() => setIsLoading(false));
    }, []);

    useEffect(() => {
        loadServicos();
    }, [loadServicos]);

    const addServico = async (data: CreateServicoData) => {
        setIsAdding(true);
        try {
            await createServico(data);
            loadServicos();
        } finally {
            setIsAdding(false);
        }
    };

    return { servicos, isLoading, isAdding, error, addServico };
}
