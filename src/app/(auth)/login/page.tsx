"use client";

import { useNavigate } from "@/hooks/useNavigate";
import { useAuth } from "@/hooks/useAuth";
import Input from "@/components/input/page";

export default function Login() {
  const { goTo } = useNavigate();
  const { mockLogin } = useAuth();

  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <h2 className="font-bold text-[var(--foreground)] text-4xl pb-12">Admin</h2>
      <form className="h-120 w-120 border flex flex-col justify-center gap-12 ">
        <label>CPF</label>
        <Input type="text" placeholder="000.000.000-00" name="cpf" id="cpf" required/>
        <label>Senha</label>
        <Input type="password" placeholder="**********" name="password" id="password" required/>
        <button onClick={() => {
          goTo("/dashboard")
          mockLogin()
        }}>Entrar</button>
      </form>
    </main>
  );
}
