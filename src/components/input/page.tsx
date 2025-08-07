"use client";

import { InputHTMLAttributes } from "react";

type InputProps = {
  label?: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  label,
  error,
  className,
  ...rest
}: InputProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="text-sm font-medium">{label}</label>}

      <input
        className={`bg-[#D9D9D9] px-3 py-1 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        {...rest}
      />

      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
}
