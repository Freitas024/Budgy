"use client";

import CardAdmin from "@/components/cardAdmin/cardAdmin";
import { FileText } from "lucide-react";
import { Calendar } from "lucide-react";
export default function Dashboard() {

    return(
        <main className="flex flex-col justify-center items-center p-3 bg-[#eeeeee]">
            <div className="w-[80%] flex flex-row justify-around items-center">
                <CardAdmin title="Total de Orçamentos" number="5" icon={<FileText />} bgColor="bg-[#7345fe]"/>
                <CardAdmin title="Pendentes" number="2" icon={<Calendar />} bgColor="bg-[#c40e0e]" numberColor="text-[#c40e0e]  "/>
                <CardAdmin title="Concluidos" number="3" icon={<Calendar />} bgColor="bg-[#0ec41d]" numberColor="text-[#0ec41d]"/>
            </div>
        </main>
    )
}