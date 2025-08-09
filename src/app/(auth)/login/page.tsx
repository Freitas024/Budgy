"use client";

import { useNavigate } from "@/hooks/useNavigate";
import Logo from "@/components/logoMarca/LogoMarca";

export default function Login() {
  const { goTo } = useNavigate();

  return (
    <main className="h-screen flex flex-col justify-start items-center mt-24">
      <Logo />
      <form className="h-120 w-120 flex flex-col justify-center gap-6 shadow-xl px-6 rounded-xl">
        <label className="font-semibold text-[var(--foreground)]">CPF</label>
        <input
          className="bg-[#F7F5FF] px-2 py-2 rounded-xl placeholder:text-[#9E9E9E] border border-[#8A2BE2]"
          type="text"
          placeholder="000.000.000-00"
          name="cpf"
          id="cpf"
          required
        />
        <label className="font-semibold text-[var(--foreground)]">Senha</label>
        <input
          className="bg-[#F7F5FF] px-2 py-2 rounded-xl placeholder:text-[#9E9E9E] border border-[#8A2BE2]"
          type="password"
          placeholder="**********"
          name="password"
          id="password"
          required
        />
        <button
          className="bg-[#7C3AED] text-[#FFFFFF] text-md px-6 py-2 mt-18 font-semibold rounded-xl flex justify-center items-center hover:shadow-lg cursor-pointer"
          onClick={() => {
            goTo("/dashboard");
          }}
        >
          Entrar
        </button>
      </form>
    </main>
  );
}
