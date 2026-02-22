"use client";

import React, { ReactNode } from "react";
import { Clock } from "lucide-react";

interface ActivityItem {
    icon: ReactNode;
    description: string;
    time: string;
}

interface ActivityCardProps {
    title: string;
    items: ActivityItem[];
    onViewAll?: () => void;
}

export default function ActivityCard({
    title,
    items,
    onViewAll,
}: ActivityCardProps) {
    return (
        <div
            className="
        flex flex-col p-5 rounded-xl
        bg-zinc-900 border border-zinc-800
      "
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-zinc-100">{title}</h3>
                {onViewAll && (
                    <button
                        onClick={onViewAll}
                        className="text-xs text-purple-400 hover:text-purple-300 transition-colors cursor-pointer"
                    >
                        Ver tudo
                    </button>
                )}
            </div>

            {/* Activity list */}
            <div className="flex flex-col gap-1">
                {items.map((item, i) => (
                    <div
                        key={i}
                        className="
              flex items-start gap-3 px-2 py-3 rounded-lg
              hover:bg-zinc-800/40 transition-colors
            "
                    >
                        <span className="text-zinc-500 flex-shrink-0 mt-0.5 [&>svg]:w-5 [&>svg]:h-5">
                            {item.icon}
                        </span>
                        <div className="flex flex-col gap-0.5">
                            <p className="text-sm text-zinc-200">{item.description}</p>
                            <span className="flex items-center gap-1 text-xs text-zinc-500">
                                <Clock className="w-3 h-3" />
                                {item.time}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
