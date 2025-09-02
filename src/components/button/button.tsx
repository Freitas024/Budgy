interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  textButton: string;
  className?: string;
}

export default function Button({
    textButton,
    className = "bg-[#7C3AED] text-[#FFFFFF] text-md px-6 py-2 mt-18 font-semibold rounded-xl flex justify-center items-center hover:shadow-lg cursor-pointer",
}: ButtonProps) {
  return <button className={className}>{textButton}</button>;
}
