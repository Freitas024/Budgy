import React from "react";

export default function FormField({
  textLabel,
  type,
  placeholder,
  className,
  icon,
}: {
  textLabel: string;
  type: string;
  placeholder: string;
  className?: string;
  icon?: React.ReactNode;
}) {
  const inputId = React.useId();

  if (type === "file") {
    return (
      <div className="w-full">
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {textLabel}
        </label>
        <label
          htmlFor={inputId}
          className={
            className || 
            "mt-1 flex justify-center items-center w-full px-6 py-10 border-2 border-gray-300 border-dashed rounded-md cursor-pointer hover:border-purple-500"
          }
        >
          <div className="space-y-1 text-center">
            <div className="flex justify-center text-gray-400">{icon}</div>
            <p className="text-sm text-gray-500">{placeholder}</p>
          </div>
          <input id={inputId} name={inputId} type="file" className="hidden" />
        </label>
      </div>
    );
  }

  return (
    <div className="w-full">
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {textLabel}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-400">{icon}</span>
          </div>
        )}
        <input
          id={inputId}
          type={type}
          placeholder={placeholder}
          className={
            className || 
            `w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
              icon ? "pl-10" : "" 
            }`
          }
        />
      </div>
    </div>
  );
}