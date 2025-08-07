import Link from "next/link";


export default function Header() {
  return (
    <header className="w-full bg-[var(--background)] h-24 flex items-center px-50 justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[linear-gradient(to_right,_#7C3AED,_#8944FF)]">
          <span className="text-white font-semibold text-xl">B</span>
        </div>
        <h2 className="text-2xl font-bold text-[#7C3AED]">Budgy</h2>
      </div>
      <button  href="/login" className="flex justify-center items-center w-24 h-6 text-[var(--foreground)] font-normal text-sm outline rounded-sm cursor-pointer hover:shadow-black">Admin</button>
    </header>
  )
}
