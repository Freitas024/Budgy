import { arrCard } from "@/hooks/functions";

export default function Card() {
  return (
    <main className="grid grid-cols-3 gap-4">
      {arrCard.map((card, index) => {
        const Icon = card.icon;
        return (
          <div key={index} className="p-4 border rounded">
            <Icon size={32} color="#7C3AED" />
            <h2 className="font-bold">{card.title}</h2>
            <p>{card.subtitle}</p>
          </div>
        );
      })}
    </main>
  );
}
