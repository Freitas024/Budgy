"use client";

import Input from "@/components/formField/FormField";
import InputSelect from "@/components/inputSelect/InputSelect";
import TextArea from "@/components/textArea/TextArea";
import Button from "@/components/button/button";

import { Download } from 'lucide-react';

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
        <Input
          textLabel="Nome *"
          type="text"
          placeholder="Seu nome completo ..."
        />

        <Input textLabel="email *" type="text" placeholder="Seu@email.com" />
        <Input
          textLabel="Telefone *"
          type="text"
          placeholder="(84) 99999-9999"
        />

        <InputSelect
          textLabel="Tipo de Serviço/Produto"
          textId="tipo-servico"
          textName="tipo-servico"
          optionTextValue=""
          textOption="Selecione o tipo de serviço"
          textOption1="Desenvolvimento web"
          textOption2="Design Gráfico"
          textOption3="Consultoria"
          textOption4="Marketing Digital"
          textOption5="Outros"
        />
        <TextArea
          textLabel="Descrição detalhada *"
          textArea="Descreva em detalhes o produto/serviço que você deseja...."
          placeholder="Descrição do produto/serviço"
          name="descricao"
          id="descricao"
        />
        <Input
          textLabel="Anexar Arquivo (opcional)"
          type="file"
          placeholder="Adicione um arquivo como exemplo"
          icon={<Download size={24}/>}
        />
        <Button textButton="Enviar formulario" className="bg-[#7C3AED] text-[#FFFFFF] text-md px-6 py-2 font-semibold rounded-xl flex justify-center items-center hover:shadow-lg cursor-pointer"/>
      </form>
    </main>
  );
}
