"use client";

import React, { forwardRef, ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "ghost";
    fullWidth?: boolean;
    isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            children,
            variant = "primary",
            fullWidth = true,
            isLoading = false,
            disabled,
            className = "",
            ...props
        },
        ref
    ) => {
        const baseStyles =
            "relative rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";

        const variants = {
            primary:
                "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-500 hover:to-indigo-500 active:from-purple-700 active:to-indigo-700 shadow-lg shadow-purple-500/20",
            secondary:
                "bg-zinc-800 border border-zinc-700 text-zinc-200 hover:bg-zinc-700 hover:border-zinc-600",
            ghost:
                "bg-transparent text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50",
        };

        return (
            <button
                ref={ref}
                disabled={disabled || isLoading}
                className={`
          ${baseStyles}
          ${variants[variant]}
          ${fullWidth ? "w-full" : ""}
          ${className}
        `}
                {...props}
            >
                {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                        <svg
                            className="animate-spin h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
                        </svg>
                        Carregando...
                    </span>
                ) : (
                    children
                )}
            </button>
        );
    }
);

Button.displayName = "Button";

export default Button;
