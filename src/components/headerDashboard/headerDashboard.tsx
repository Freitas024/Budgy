"use client";


import Logo from "@/components/logoAdmin/LogoAdmin";
import Button from "@/components/button/button";
import { LogOut } from "lucide-react";
import { useNavigate } from "@/hooks/useNavigate";

export default function HeaderDashboard() {

  const { goTo } = useNavigate();
  return (
    <main className="flex flex-row items-center h-[80px] py-2 px-12 justify-around w-full shadow-md">
      <Logo />
      <Button
        icon={<LogOut size={12}/>}
        textButton="Sair"
        className="text-(var[--foreground]) text-md px-6 h-[42px] gap-[6px] font-normal text-sm rounded-xl flex justify-center items-center cursor-pointer hover:bg-[#dddddd]"
        onClick={() => { 
          console.log("Botão Sair clicado!"); 
          goTo("/");
        }}
      />
    </main>
  );
}
