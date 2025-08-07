"use client";

import { useRouter } from "next/navigation";

export function useNavigate(){
    const router = useRouter();

    function goTo(path: string){

        router.push(path);
    }

    return { goTo };
}