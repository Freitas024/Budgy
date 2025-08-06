export default function Footer() {
  return (
    <header className="w-full bg-[var(--foreground)] h-42 flex flex-col items-center  gap-3 px-50 justify-center">
      <div className="flex flex-col items-center gap-1">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[linear-gradient(to_right,_#7C3AED,_#8944FF)]">
          <span className="text-white font-semibold text-md">B</span>
        </div>
        <h2 className="text-xl font-bold text-[#7C3AED]">Budgy</h2>
      </div>
      <h3 className="text-[#D9D9D9] font-light text-sm">© 2025 Budgy. Todos os direitos reservados.</h3>
    </header>
  )
}