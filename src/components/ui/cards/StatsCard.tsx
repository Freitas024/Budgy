"use client";

import React, { ReactNode } from "react";

interface StatsCardProps {
    icon: ReactNode;
    value: string;
    label: string;
    badge?: string;
    badgeColor?: "green" | "purple" | "blue" | "red";
    iconBgColor?: string;
}

const badgeColors = {
    green: "bg-green-500/15 text-green-400",
    purple: "bg-purple-500/15 text-purple-400",
    blue: "bg-blue-500/15 text-blue-400",
    red: "bg-red-500/15 text-red-400",
};

export default function StatsCard({
    icon,
    value,
    label,
    badge,
    badgeColor = "green",
    iconBgColor = "bg-purple-600",
}: StatsCardProps) {
    return (
        <div
            className="
        flex flex-col gap-4 p-5 rounded-xl
        bg-zinc-900 border border-zinc-800
        transition-all duration-200
        hover:border-zinc-700
      "
        >
            {/* Top row: icon + badge */}
            <div className="flex items-start justify-between">
                <div
                    className={`
            flex items-center justify-center w-10 h-10 rounded-lg
            ${iconBgColor}
            [&>svg]:w-5 [&>svg]:h-5 text-white
          `}
                >
                    {icon}
                </div>
                {badge && (
                    <span
                        className={`
              text-xs font-medium px-2.5 py-1 rounded-full
              ${badgeColors[badgeColor]}
            `}
                    >
                        {badge}
                    </span>
                )}
            </div>

            {/* Value + label */}
            <div>
                <p className="text-2xl font-bold text-zinc-100">{value}</p>
                <p className="text-sm text-zinc-500 mt-0.5">{label}</p>
            </div>
        </div>
    );
}
