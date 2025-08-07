"use client";

import { useAuth } from "@/hooks/useAuth";

export default function Login(){
  useAuth();
  
  return(
    <main className="h-screen flex flex-col justify-center items-center">
        <form>
            <label>CPF</label>
            <input placeholder="000.000.000-00" id="CPF" name="CPF" type="text"/>
            <label>Senha</label>
            <input placeholder="**********" id="senha" name="senha" type="password"/>
            <button>Entrar</button>
        </form>
    </main>
  )
}