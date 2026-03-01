"use client";

import { useState } from "react";
import { Building2, Bell, Users2 } from "lucide-react";
import { SettingsSection } from "@/src/components/ui/cards";
import { Input, ToggleSwitch } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { mockSettings } from "@/src/config";

export default function ConfiguracoesPage() {
    const [company, setCompany] = useState(mockSettings.company);
    const [notifications, setNotifications] = useState(
        mockSettings.notifications
    );

    const handleToggle = (id: string, checked: boolean) => {
        setNotifications((prev) =>
            prev.map((n) => (n.id === id ? { ...n, enabled: checked } : n))
        );
    };

    const roleBadgeStyles: Record<string, string> = {
        Administrador:
            "bg-purple-500/15 text-purple-400 border border-purple-500/20",
        Colaborador:
            "bg-zinc-700/50 text-zinc-300 border border-zinc-600/30",
    };

    return (
        <div>
            {/* Page header */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-zinc-100">
                    Configurações
                </h1>
                <p className="text-sm text-zinc-500 mt-1">
                    Gerencie sua empresa
                </p>
            </div>

            <div className="flex flex-col gap-6">
                {/* ── Dados da empresa ── */}
                <SettingsSection icon={<Building2 />} title="Dados da empresa">
                    <div className="flex flex-col gap-4">
                        <div>
                            <label className="block text-xs text-zinc-500 mb-1.5">
                                Nome da empresa
                            </label>
                            <Input
                                value={company.name}
                                onChange={(e) =>
                                    setCompany({
                                        ...company,
                                        name: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div>
                            <label className="block text-xs text-zinc-500 mb-1.5">
                                E-mail de contato
                            </label>
                            <Input
                                type="email"
                                value={company.email}
                                onChange={(e) =>
                                    setCompany({
                                        ...company,
                                        email: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div>
                            <label className="block text-xs text-zinc-500 mb-1.5">
                                Telefone
                            </label>
                            <Input
                                type="tel"
                                value={company.phone}
                                onChange={(e) =>
                                    setCompany({
                                        ...company,
                                        phone: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div className="pt-2">
                            <Button variant="primary" fullWidth={false}>
                                Salvar alterações
                            </Button>
                        </div>
                    </div>
                </SettingsSection>

                {/* ── Notificações ── */}
                <SettingsSection icon={<Bell />} title="Notificações">
                    <div className="flex flex-col divide-y divide-zinc-800">
                        {notifications.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
                            >
                                <div>
                                    <p className="text-sm font-medium text-zinc-200">
                                        {item.label}
                                    </p>
                                    <p className="text-xs text-zinc-500 mt-0.5">
                                        {item.description}
                                    </p>
                                </div>
                                <ToggleSwitch
                                    checked={item.enabled}
                                    onChange={(checked) =>
                                        handleToggle(item.id, checked)
                                    }
                                />
                            </div>
                        ))}
                    </div>
                </SettingsSection>

                {/* ── Usuários do sistema ── */}
                <SettingsSection icon={<Users2 />} title="Usuários do sistema">
                    <div className="flex flex-col divide-y divide-zinc-800">
                        {mockSettings.users.map((user) => (
                            <div
                                key={user.id}
                                className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
                            >
                                <div>
                                    <p className="text-sm font-medium text-zinc-200">
                                        {user.name}
                                    </p>
                                    <p className="text-xs text-zinc-500 mt-0.5">
                                        {user.email}
                                    </p>
                                </div>
                                <span
                                    className={`
                    text-xs font-medium px-3 py-1 rounded-full
                    ${roleBadgeStyles[user.role]}
                  `}
                                >
                                    {user.role}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4">
                        <Button variant="secondary" fullWidth>
                            Convidar usuário
                        </Button>
                    </div>
                </SettingsSection>
            </div>
        </div>
    );
}
