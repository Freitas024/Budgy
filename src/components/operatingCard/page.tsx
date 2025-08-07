import { arrOperatingCard } from "@/hooks/functions";

export default function OperatingCard() {
  return (
    <main className="grid grid-cols-3 gap-8">
      {arrOperatingCard.map((card, index) => {
        const Icon = card.icon;
        return (
          <div key={index} className="flex flex-col justify-start items-center w-60 h-60 rounded-xl">
            <div className="w-14 h-14 flex justify-center items-center bg-[#7C3AED] rounded-full">
                <h3 className="text-[#FFFFFF] font-bold text-xl">{card.number}</h3>
            </div>
            <Icon size={24} color="#7C3AED" style={{margin: "6px 0px"}}/>
            <h2 className="font-bold text-[var(--foreground)] text-center w-54">{card.title}</h2>
            <p className="text-center text-[14px]">{card.subtitle}</p>
          </div>
        );
      })}
    </main>
  );
}
