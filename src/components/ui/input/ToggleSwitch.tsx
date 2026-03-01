"use client";

import React, { forwardRef, InputHTMLAttributes } from "react";

interface ToggleSwitchProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> {
    checked: boolean;
    onChange: (checked: boolean) => void;
}

const ToggleSwitch = forwardRef<HTMLInputElement, ToggleSwitchProps>(
    ({ checked, onChange, disabled, className = "", ...props }, ref) => {
        return (
            <label
                className={`
          relative inline-flex items-center cursor-pointer
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          ${className}
        `}
            >
                <input
                    ref={ref}
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => onChange(e.target.checked)}
                    disabled={disabled}
                    className="sr-only peer"
                    {...props}
                />
                <div
                    className={`
            w-11 h-6 rounded-full
            transition-colors duration-200
            ${checked
                            ? "bg-purple-600"
                            : "bg-zinc-700"
                        }
            peer-focus-visible:ring-2 peer-focus-visible:ring-purple-500/50
            after:content-[''] after:absolute after:top-0.5 after:start-[2px]
            after:bg-white after:rounded-full after:h-5 after:w-5
            after:transition-all after:duration-200
            ${checked ? "after:translate-x-full" : ""}
          `}
                />
            </label>
        );
    }
);

ToggleSwitch.displayName = "ToggleSwitch";

export default ToggleSwitch;
