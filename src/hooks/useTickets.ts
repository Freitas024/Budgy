"use client";

import { useState, useEffect } from "react";
import { Ticket } from "@/src/types";
import { fetchTickets } from "@/src/lib/tickets";

export function useTickets() {
    const [tickets, setTickets] = useState<Ticket[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchTickets()
            .then(setTickets)
            .catch((err) => setError(err.message))
            .finally(() => setIsLoading(false));
    }, []);

    return { tickets, isLoading, error };
}
