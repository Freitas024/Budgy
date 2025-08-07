"use client";

import Cookies from "js-cookie";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function useAuth() {
    const router = useRouter();

    useEffect(() => {
        const token = Cookies.get("auth_token");

        if (!token) {
            router.replace("/");
        }
    }, [router]);

    function mockLogin() {
        Cookies.set("auth_token", "meu_token_falso", { expires: 1 });
        console.log(Cookies.get("auth_token"));
    }

    function mockLogout() {
        Cookies.remove("auth_token");
        router.replace("/");
    }

    return { mockLogin, mockLogout };
}
