"use client";

import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface SidebarButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    icon?: ReactNode;
    isActive?: boolean;
}

const SidebarButton = ({
    children,
    icon,
    isActive = false,
    className = "",
    ...props
}: SidebarButtonProps) => {
    return (
        <button
            className={`
        flex items-center gap-3 w-full rounded-lg
        px-4 py-2.5 text-sm font-medium
        transition-all duration-200 cursor-pointer
        ${isActive
                    ? "bg-purple-600/20 text-purple-400"
                    : "text-zinc-400 hover:bg-zinc-800/60 hover:text-zinc-200"
                }
        ${className}
      `}
            {...props}
        >
            {icon && (
                <span className="flex-shrink-0 [&>svg]:w-5 [&>svg]:h-5">{icon}</span>
            )}
            {children}
        </button>
    );
};

export default SidebarButton;
