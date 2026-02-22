"use client";

import { usePathname, useRouter } from "next/navigation";
import {
    Home,
    Users,
    FileText,
    Briefcase,
    Wallet,
    BarChart3,
    Settings,
    LogOut,
    X,
} from "lucide-react";
import { SidebarButton } from "@/src/components/ui/button";

const navItems = [
    { label: "Início", icon: <Home />, href: "/inicio" },
    { label: "Clientes", icon: <Users />, href: "/cliente" },
    { label: "Orçamentos", icon: <FileText />, href: "/orcamentos" },
    { label: "Serviços", icon: <Briefcase />, href: "/servicos" },
    { label: "Configurações", icon: <Settings />, href: "/configuracoes" },
];

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
    const pathname = usePathname();
    const router = useRouter();

    const handleNavigate = (href: string) => {
        router.push(href);
        onClose();
    };

    return (
        <>
            {/* Overlay mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
          fixed top-0 left-0 z-50 h-screen w-64
          flex flex-col
          bg-zinc-900/95 border-r border-zinc-800
          transition-transform duration-300 ease-in-out
          overflow-y-auto
          lg:translate-x-0 lg:sticky lg:top-0 lg:z-auto
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 pt-6 pb-4">
                    <div>
                        <h2 className="text-xl font-bold text-purple-500">Budgy</h2>
                        <h3 className="text-xs text-zinc-500">Gestão inteligente</h3>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-zinc-400 hover:text-zinc-200 lg:hidden cursor-pointer"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Nav */}
                <nav className="flex-1 flex flex-col gap-1 px-3 pt-4">
                    {navItems.map((item) => (
                        <SidebarButton
                            key={item.href}
                            icon={item.icon}
                            isActive={pathname === item.href}
                            onClick={() => handleNavigate(item.href)}
                        >
                            {item.label}
                        </SidebarButton>
                    ))}
                </nav>

                {/* Footer */}
                <div className="px-3 pb-6 border-t border-zinc-800 pt-4">
                    <SidebarButton
                        icon={<LogOut />}
                        onClick={() => handleNavigate("/")}
                    >
                        Sair
                    </SidebarButton>
                </div>
            </aside>
        </>
    );
}
