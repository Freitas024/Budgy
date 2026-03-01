"use client";

import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Store,
  Phone,
  Briefcase,
  Clock,
} from "lucide-react";
import { useRegister } from "@/src/hooks/useRegister";

export default function RegisterPage() {
  const {
    formData,
    handleChange,
    showPassword, toggleShowPassword,
    showConfirmPassword, toggleShowConfirmPassword,
    isLoading,
    error,
    handleSubmit,
  } = useRegister();

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-4 py-10">
      <div className="w-full max-w-md flex flex-col items-center gap-10">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-purple-500">Budgy</h1>
          <p className="mt-2 text-sm text-zinc-400">Crie sua conta</p>
        </div>

        {/* Error message */}
        {error && (
          <div className="w-full px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-sm text-red-400">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">

          {/* Nome da loja */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-zinc-100">
              Nome da loja
            </label>
            <Input
              type="text"
              placeholder="Nome do seu negócio"
              icon={<Store />}
              maxLength={100}
              required
              value={formData.nome}
              onChange={(e) => handleChange("nome", e.target.value)}
            />
          </div>

          {/* E-mail */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-zinc-100">
              E-mail corporativo
            </label>
            <Input
              type="email"
              placeholder="seu@empresa.com.br"
              icon={<Mail />}
              required
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
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
                required
                value={formData.password}
                onChange={(e) => handleChange("password", e.target.value)}
              />
              <button
                type="button"
                onClick={toggleShowPassword}
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

          {/* Confirmar Senha */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-zinc-100">
              Confirmar senha
            </label>
            <div className="relative">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••••"
                icon={<Lock />}
                required
                value={formData.confirmPassword}
                onChange={(e) => handleChange("confirmPassword", e.target.value)}
              />
              <button
                type="button"
                onClick={toggleShowConfirmPassword}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer"
              >
                {showConfirmPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Telefone / WhatsApp */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-zinc-100">
              Telefone / WhatsApp
            </label>
            <Input
              type="tel"
              placeholder="(00) 00000-0000"
              icon={<Phone />}
              maxLength={20}
              required
              value={formData.telefoneWhatsapp}
              onChange={(e) => handleChange("telefoneWhatsapp", e.target.value)}
            />
          </div>

          {/* Ramo de atividade */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-zinc-100">
              Ramo de atividade
            </label>
            <Input
              type="text"
              placeholder="Ex: Desenvolvimento de software"
              icon={<Briefcase />}
              required
              value={formData.ramoAtividade}
              onChange={(e) => handleChange("ramoAtividade", e.target.value)}
            />
          </div>

          {/* Horário de funcionamento */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-zinc-100">
              Horário de funcionamento
            </label>
            <Input
              type="text"
              placeholder="Ex: Seg a Sex: 08h às 18h"
              icon={<Clock />}
              required
              value={formData.horarioFuncionamento}
              onChange={(e) => handleChange("horarioFuncionamento", e.target.value)}
            />
          </div>

          {/* Botão */}
          <Button type="submit" isLoading={isLoading}>
            Criar conta
          </Button>
        </form>

        {/* Link de login */}
        <p className="text-sm text-zinc-500">
          Já tem conta?{" "}
          <a
            href="/"
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            Entrar
          </a>
        </p>
      </div>
    </main>
  );
}
