"use client";

import ChoiceCard from "@/components/choiceCard/page";
import OperatingCard from "@/components/operatingCard/page";
import { useNavigate } from "@/hooks/useNavigate";

export default function Home() {
  const { goTo } = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center py-12">
      <h1 className="text-[var(--foreground)] font-bold text-6xl w-200 text-center py-6">Orçamentos personalizados para <span className="text-[#7C3AED]">pequenas empresas</span></h1>
      <h3 className="text-[var(--foreground)] text-center w-140 pb-12 text-lg font-light">Receba propostas sob medida para os serviços ou produtos que sua empresa precisa, de forma simples e rápida.</h3>
      <button
        className="bg-[#7C3AED] text-[#FFFFFF] text-md px-6 py-1 font-semibold rounded-xl flex justify-center items-center hover:shadow-lg cursor-pointer"
        onClick={() => {
          goTo("/forms")
        }}>
        solicitar Orçamento
      </button>
      <h2 className="text-[var(--foreground)] font-bold text-2xl pt-30 pb-6 ">Por que escolher a budgy?</h2>
      <ChoiceCard />
      <h2 className="text-[var(--foreground)] font-bold text-2xl pt-30 pb-12 ">Como funciona?</h2>
      <OperatingCard />
      <h2 className="text-[var(--foreground)] font-bold text-2xl pt-30 pb-3 ">Pronto para começar?</h2>
      <h3 className="text-[var(--foreground)] font-light text-lg pb-12 w-xl text-center ">Solicite seu orçamento personalizado agora mesmo e veja como podemos ajudar sua empresa.</h3>
      <button
        className="bg-[#7C3AED] text-[#FFFFFF] text-md px-6 py-1 font-semibold rounded-xl flex justify-center items-center hover:shadow-lg cursor-pointer"
        onClick={() => {
          goTo("/forms")
        }}
      >
        solicitar Orçamento
      </button>
    </div>
  )
}