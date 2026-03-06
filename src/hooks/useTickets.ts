"use client";

import { useState, useEffect, useCallback } from "react";
import { TicketDB, fetchTickets, createTicket, CreateTicketData } from "@/src/lib/tickets";

export function useTickets() {
    const [tickets, setTickets] = useState<TicketDB[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isAdding, setIsAdding] = useState(false);
    const [error, setError] = useState("");

    const loadTickets = useCallback(() => {
        setIsLoading(true);
        fetchTickets()
            .then(setTickets)
            .catch((err) => setError(err.message))
            .finally(() => setIsLoading(false));
    }, []);

    useEffect(() => {
        loadTickets();
    }, [loadTickets]);

    const addTicket = async (data: CreateTicketData) => {
        setIsAdding(true);
        try {
            await createTicket(data);
            loadTickets();
        } finally {
            setIsAdding(false);
        }
    };

    return { tickets, isLoading, isAdding, error, addTicket };
}
