"use client";

import React from "react";

interface DonutChartItem {
    label: string;
    value: number;
    color: string;
}

interface DonutChartCardProps {
    title: string;
    data: DonutChartItem[];
}

export default function DonutChartCard({ title, data }: DonutChartCardProps) {
    const total = data.reduce((sum, item) => sum + item.value, 0);

    // Build SVG donut segments
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    let cumulativeOffset = 0;

    const segments = data.map((item) => {
        const percentage = item.value / total;
        const dashLength = percentage * circumference;
        const dashOffset = -cumulativeOffset;
        cumulativeOffset += dashLength;

        return {
            ...item,
            percentage,
            dashLength,
            dashOffset,
        };
    });

    return (
        <div
            className="
        flex flex-col gap-4 p-5 rounded-xl
        bg-zinc-900 border border-zinc-800
      "
        >
            <h3 className="text-sm font-semibold text-zinc-100">{title}</h3>

            <div className="flex items-center gap-8">
                {/* Donut chart */}
                <div className="flex-shrink-0">
                    <svg width="90" height="90" viewBox="0 0 100 100">
                        {segments.map((seg, i) => (
                            <circle
                                key={i}
                                cx="50"
                                cy="50"
                                r={radius}
                                fill="none"
                                stroke={seg.color}
                                strokeWidth="12"
                                strokeDasharray={`${seg.dashLength} ${circumference - seg.dashLength}`}
                                strokeDashoffset={seg.dashOffset}
                                strokeLinecap="round"
                                className="transition-all duration-500"
                                style={{
                                    transform: "rotate(-90deg)",
                                    transformOrigin: "50% 50%",
                                }}
                            />
                        ))}
                    </svg>
                </div>

                {/* Legend */}
                <div className="flex flex-col gap-3 flex-1">
                    {data.map((item, i) => (
                        <div key={i} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span
                                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                                    style={{ backgroundColor: item.color }}
                                />
                                <span className="text-sm text-zinc-300">{item.label}</span>
                            </div>
                            <span className="text-sm font-semibold text-zinc-100">
                                {item.value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
