"use client";

import { ArrowLeft } from "lucide-react";
import { useNavigate } from "@/hooks/useNavigate";

export default function HeaderLogin() {
  const { goTo } = useNavigate();

  return (
    <main className="w-full h-6 px-100 py-12 flex justify-start items-start">
      <button
        onClick={() => {
          goTo("/");
        }}
        className="bg-purple-500/00 text-purple-600 h-8 w-24 mx-12 font-light text-sm px-4 rounded-xl flex items-center gap-2 hover:bg-purple-500/30 cursor-pointer transition"
      >
        <ArrowLeft size={12} color="#7C3AED" />
        voltar
      </button>
    </main>
  );
}
