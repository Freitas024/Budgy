"use client";

import { useState, useEffect, useCallback } from "react";
import { ClienteDB } from "@/src/types";
import { fetchClientes, createCliente, CreateClienteData } from "@/src/lib/clientes";

export function useClientes() {
    const [clientes, setClientes] = useState<ClienteDB[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isAdding, setIsAdding] = useState(false);
    const [error, setError] = useState("");

    const loadClientes = useCallback(() => {
        setIsLoading(true);
        fetchClientes()
            .then(setClientes)
            .catch((err) => setError(err.message))
            .finally(() => setIsLoading(false));
    }, []);

    useEffect(() => {
        loadClientes();
    }, [loadClientes]);

    const addCliente = async (data: CreateClienteData) => {
        setIsAdding(true);
        try {
            await createCliente(data);
            loadClientes();
        } finally {
            setIsAdding(false);
        }
    };

    return { clientes, isLoading, isAdding, error, addCliente };
}
