export default function CardAdmin({
  className = "w-80 rounded-lg shadow p-4 flex items-center justify-between bg-white",
  icon,
  title,
  number,
  numberColor,
  bgColor,
}: {
  className?: string;
  title: string;
  number: string;
  icon?: React.ReactNode;
  numberColor?: string;
  bgColor?: string;
}) {
  return (
    <main className="w-100 h-30 rounded-lg shadow p-4 flex items-center justify-between bg-white">
      <section>
        <p className="text-sm text-gray-600">{title}</p>
        <span className={`text-2xl font-bold ${numberColor}`}>{number}</span>
      </section>
      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${bgColor}`}>
        <span className="flex justify-center items-center text-white w-5 h-5">
          {icon}
        </span>
      </div>
    </main>
  );
}
