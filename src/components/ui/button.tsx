import React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  fullWidth?: boolean;
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  disabled = false,
  fullWidth = false,
}: ButtonProps) => {
  const baseStyles =
    "relative inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 overflow-hidden";

  const variantStyles = {
    primary:
      "bg-primary text-white hover:bg-primary-600 active:bg-primary-700 hover:shadow-lg shadow-primary/20",
    secondary:
      "bg-secondary text-white hover:bg-secondary-600 active:bg-secondary-700 hover:shadow-lg shadow-secondary/20",
    outline:
      "bg-transparent border-2 border-current text-primary hover:bg-primary/5 active:bg-primary/10",
    text: "bg-transparent text-primary hover:bg-primary/5 active:bg-primary/10",
  };

  const sizeStyles = {
    sm: "text-sm py-1.5 px-4",
    md: "text-base py-2.5 px-6",
    lg: "text-lg py-3 px-8",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      type={type}
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        widthClass,
        disabled ? "cursor-not-allowed opacity-50" : "",
        className,
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="relative z-10">{children}</span>
      <span className="from-primary-400 to-secondary-400 absolute inset-0 h-full w-full rounded-full bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
    </button>
  );
};

export default Button;
