import { arrChoiceCard } from "@/hooks/functions";

export default function ChoiceCard() {
  return (
    <main className="grid grid-cols-3 gap-8">
      {arrChoiceCard.map((card, index) => {
        const Icon = card.icon;
        return (
          <div key={index} className="flex flex-col justify-center items-center shadow-xl w-60 h-60 rounded-xl">
            <div className="w-14 h-14 flex justify-center items-center bg-[#7C3AED] rounded-full">
              <Icon size={30} color="#FFFFFF" />
            </div>
            <h2 className="font-bold text-[var(--foreground)] py-4">{card.title}</h2>
            <p className="text-center text-[14px]">{card.subtitle}</p>
          </div>
        );
      })}
    </main>
  );
}
