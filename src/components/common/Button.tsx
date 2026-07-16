import type { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline";
    fullWidth?: boolean;
}

export default function Button({
    children,
    variant = "primary",
    fullWidth = false,
    className = "",
    ...props
}: ButtonProps) {
    const base =
        "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed";

    const size =
        "px-6 py-3";

    const variants = {
        primary:
            "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-blue-300",

        secondary:
            "bg-slate-900 text-white hover:bg-slate-800",

        outline:
            "border border-blue-600 text-blue-600 hover:bg-blue-50",
    };

    return (
        <button
            className={`
        ${base}
        ${size}
        ${variants[variant]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
            {...props}
        >
            {children}
        </button>
    );
}