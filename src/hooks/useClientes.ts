"use client";

import { useState, useEffect } from "react";
import { ClienteDB } from "@/src/types";
import { fetchClientes } from "@/src/lib/clientes";

export function useClientes() {
    const [clientes, setClientes] = useState<ClienteDB[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchClientes()
            .then(setClientes)
            .catch((err) => setError(err.message))
            .finally(() => setIsLoading(false));
    }, []);

    return { clientes, isLoading, error };
}
