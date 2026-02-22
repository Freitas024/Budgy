"use client";

import React, { forwardRef, InputHTMLAttributes } from "react";
import { Search } from "lucide-react";

interface SearchInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    onSearch?: (value: string) => void;
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
    ({ className = "", placeholder = "Pesquisar...", onSearch, onChange, ...props }, ref) => {
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange?.(e);
            onSearch?.(e.target.value);
        };

        return (
            <div
                className={`
          flex items-center gap-3 w-full rounded-lg
          bg-zinc-800/60 border border-zinc-700/50
          px-4 py-2.5
          transition-all duration-200
          focus-within:border-purple-500 focus-within:ring-1 focus-within:ring-purple-500/30
          ${className}
        `}
            >
                <Search className="w-4 h-4 text-zinc-400 flex-shrink-0" />
                <input
                    ref={ref}
                    type="search"
                    placeholder={placeholder}
                    onChange={handleChange}
                    className="
            w-full bg-transparent text-sm text-zinc-200
            placeholder:text-zinc-500
            outline-none border-none
          "
                    {...props}
                />
            </div>
        );
    }
);

SearchInput.displayName = "SearchInput";

export default SearchInput;
