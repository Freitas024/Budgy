import Card from "../components/card/page";

export default function Home(){
  return(
    <div className="flex flex-col justify-center items-center py-12">
      <h1 className="text-[var(--foreground)] font-bold text-6xl w-200 text-center py-6">Orçamentos personalizados para <span className="text-[#7C3AED]">pequenas empresas</span></h1>
      <h3 className="text-[var(--foreground)] text-center w-140 pb-12 text-lg font-light">Receba propostas sob medida para os serviços ou produtos que sua empresa precisa, de forma simples e rápida.</h3>
      <button className="bg-[#7C3AED] text-[#FFFFFF] text-md px-6 py-1 font-semibold rounded-xl flex justify-center items-center hover:shadow-lg cursor-pointer">solicitar Orçamento</button>
      <h2 className="text-[var(--foreground)] font-bold text-2xl pt-30">Por que escolher a budgy?</h2>
      <h2>Como funciona?</h2>
      <Card />
      <h2>Pronto para começar?</h2>
      <h3>Solicite seu orçamento personalizado agora mesmo e veja como podemos ajudar sua empresa.</h3>
      <button className="bg-[#7C3AED] text-[#FFFFFF] px-3 font-semibold rounded-xl">solicitar Orçamento</button>
    </div>
  )
}