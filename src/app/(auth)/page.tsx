"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function AuthPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/inicio");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-4">
      <div className="w-full max-w-md flex flex-col items-center gap-10">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-purple-500">Budgy</h1>
          <p className="mt-2 text-sm text-zinc-400">Acesse sua conta</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">

          {/* E-mail */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-zinc-100">
              E-mail corporativo
            </label>
            <Input
              type="email"
              placeholder="seu@empresa.com.br"
              icon={<Mail />}
            />
          </div>

          {/* Senha */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-zinc-100">Senha</label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                icon={<Lock />}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Lembrar de mim + Esqueci a senha */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-zinc-600 bg-zinc-800 accent-purple-500"
              />
              <span className="text-sm text-zinc-400">Lembrar de mim</span>
            </label>
            <a
              href="/forgot-password"
              className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
            >
              Esqueci a senha
            </a>
          </div>

          {/* Botão */}
          <Button type="submit">Entrar</Button>
        </form>

        {/* Link de cadastro */}
        <p className="text-sm text-zinc-500">
          Ainda não tem conta?{" "}
          <a
            href="/register"
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            Criar conta da empresa
          </a>
        </p>
      </div>
    </main>
  );
}