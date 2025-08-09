"use client";

import { Upload } from "lucide-react";
import FormField from "@/components/formField/FormField";

export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <h2 className="w-180 text-[var(--foreground)] text-center font-bold text-4xl">
        Solicite seu orçamento personalizado
      </h2>
      <h4 className="w-120 py-2 text-center font-light text-[var(--foreground)]">
        Preencha os dados abaixo e nossa equipe entrará em contato com uma
        proposta sob medida.
      </h4>
      <form className="w-120 flex flex-col gap-4 p-4 shadow-xl rounded-xl">
        <h3 className="text-[#7C3AED] font-medium">
          Informações para orçamento
        </h3>
        <FormField
          as="input"
          type="text"
          name="name"
          id="name"
          label="nome"
          placeholder="Seu nome completo"
          required
        />
        <FormField
          as="input"
          type="text"
          name="email"
          id="email"
          label="E-mail"
          placeholder="Seu@email.com"
          required
        />
        <FormField
          as="input"
          type="tel"
          name="phone"
          id="phone"
          label="Telefone"
          placeholder="(00) 0.0000-0000"
          required
        />
        <FormField
          as="select"
          name="select"
          id="select"
          label="Selecione um serviço *"
          placeholder="Selecione um serviço *"
          options={[
            { value: "serviços", label: "Selecione um serviço" },
            { value: "design", label: "Designer Gráfico" },
            { value: "dev", label: "Desenvolvimento web" },
            { value: "marketing", label: "Marketing Digital" },
            { value: "ux", label: "UX Research" },
            { value: "ui", label: "ui designer" },
          ]}
          required
        />
        <FormField
          as="textarea"
          name="descricao"
          id="descricao"
          label="Descrição detalhada *"
          placeholder="Descreva com detalhes o que você precisa, incluindo prazos, objetivos e qualquer informação relevante... "
          className="h-30"
          required
        />
        <FormField
          as="input"
          type="File"
          name="file"
          id="arquivo"
          label="Anexar arquivo (opcional)"
          className="hidden"
        />
        <label
          htmlFor="arquivo"
          className="h-30 border border-dashed rounded-xl flex flex-col justify-center items-center border-[#9D9D9D] hover:border-[#7C3AED] hover:text-[#7c3aed] cursor-pointer text-[#5d5d5d] text-sm"
        >
          <Upload />
          Clique aqui para anexar um arquivo
        </label>
        <button
          className="bg-[#7C3AED] text-[#FFFFFF] text-md px-6 py-1 font-semibold rounded-xl flex justify-center items-center hover:shadow-lg cursor-pointer"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </main>
  );
}
