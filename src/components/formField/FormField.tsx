import React from "react";

interface Option {
  value: string;
  label: string;
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  as?: "input";
};

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  as: "textarea";
};

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  as: "select";
  options: Option[];
  placeholder?: string;
};

type FormFieldProps = (InputProps | TextareaProps | SelectProps) & {
  label?: string;
};

const baseStyle =
  "bg-[#F7F5FF] px-6 py-2 rounded-xl border border-[#8A2BE2] placeholder:text-[#9E9E9E] text-sm focus:outline-none focus:ring-2 focus:ring-[#8A2BE2]";

const FormField: React.FC<FormFieldProps> = ({
  label,
  as = "input",
  ...props
}) => {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label
          htmlFor={(props as any).id}
          className="text-sm font-semibold text-gray-700 mb-1"
        >
          {label}
        </label>
      )}

      {as === "textarea" && (
        <textarea {...(props as TextareaProps)} className={`${baseStyle} ${props.className || ""}`} />
      )}

      {as === "select" && (
        <select {...(props as SelectProps)} className={`${baseStyle} ${props.className || ""}`}>
          <option value="" disabled>
            {(props as SelectProps).placeholder || "Selecione..."}
          </option>
          {(props as SelectProps).options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      )}

      {as === "input" && (
        <input {...(props as InputProps)} className={`${baseStyle} ${props.className || ""}`} />
      )}
    </div>
  );
};

export default FormField;
