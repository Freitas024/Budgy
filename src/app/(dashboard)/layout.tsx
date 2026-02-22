"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Sidebar } from "@/src/components/layout/sidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-zinc-950">
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <div className="flex-1 flex flex-col min-h-screen">
                {/* Mobile header with toggle */}
                <header className="sticky top-0 z-30 flex items-center gap-3 px-4 py-3 bg-zinc-900/80 backdrop-blur border-b border-zinc-800 lg:hidden">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="text-zinc-400 hover:text-zinc-200 cursor-pointer"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                    <h2 className="text-lg font-bold text-purple-500">Budgy</h2>
                </header>

                {/* Page content */}
                <main className="flex-1 p-6">{children}</main>
            </div>
        </div>
    );
}
