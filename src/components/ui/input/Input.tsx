"use client";

import React, { forwardRef, InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: ReactNode;
    error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ icon, error, className = "", ...props }, ref) => {
        return (
            <div className="w-full">
                <div
                    className={`
            flex items-center gap-3 w-full rounded-lg
            bg-zinc-800/60 border border-zinc-700/50
            px-4 py-3
            transition-all duration-200
            focus-within:border-purple-500 focus-within:ring-1 focus-within:ring-purple-500/30
            ${error ? "border-red-500/60 focus-within:border-red-500 focus-within:ring-red-500/30" : ""}
            ${className}
          `}
                >
                    {icon && (
                        <span className="text-zinc-400 flex-shrink-0 [&>svg]:w-5 [&>svg]:h-5">
                            {icon}
                        </span>
                    )}
                    <input
                        ref={ref}
                        className="
              w-full bg-transparent text-sm text-zinc-200
              placeholder:text-zinc-500
              outline-none border-none
            "
                        {...props}
                    />
                </div>
                {error && (
                    <p className="mt-1.5 text-xs text-red-400">{error}</p>
                )}
            </div>
        );
    }
);

Input.displayName = "Input";

export default Input;
