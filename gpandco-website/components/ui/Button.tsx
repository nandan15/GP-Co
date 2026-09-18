import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-navy-900 text-white hover:bg-navy-800 hover:-translate-y-0.5 hover:shadow-card-hover active:translate-y-0",
    secondary:
      "bg-accent text-white hover:bg-accent-dark hover:-translate-y-0.5 hover:shadow-glow active:translate-y-0",
    outline:
      "border border-navy-200 text-navy-800 bg-transparent hover:bg-surface-secondary hover:border-navy-300",
    ghost:
      "text-navy-700 bg-transparent hover:bg-surface-secondary hover:text-navy-900",
    white:
      "bg-white text-navy-900 hover:bg-surface hover:-translate-y-0.5 hover:shadow-card-hover active:translate-y-0",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
