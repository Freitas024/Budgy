"use client";

import React, { ReactNode } from "react";

interface SettingsSectionProps {
    icon: ReactNode;
    title: string;
    children: ReactNode;
}

export default function SettingsSection({
    icon,
    title,
    children,
}: SettingsSectionProps) {
    return (
        <section
            className="
        rounded-xl bg-zinc-900 border border-zinc-800
        p-6
      "
        >
            {/* Header */}
            <div className="flex items-center gap-2 mb-6">
                <span className="text-purple-400 [&>svg]:w-5 [&>svg]:h-5">
                    {icon}
                </span>
                <h2 className="text-base font-semibold text-zinc-100">
                    {title}
                </h2>
            </div>

            {/* Content */}
            <div>{children}</div>
        </section>
    );
}
