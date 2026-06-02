import type { ReactNode } from "react";

interface CardProps {
  variant?: "default" | "elevated" | "accent" | "green";
  className?: string;
  children: ReactNode;
}

export function Card({
  variant = "default",
  className = "",
  children,
}: CardProps) {
  const variantClass =
    variant === "elevated"
      ? "card-elevated"
      : variant === "accent"
        ? "card-accent"
        : variant === "green"
          ? "card-green"
          : "";

  return (
    <article className={`card ${variantClass} ${className}`.trim()}>
      {children}
    </article>
  );
}
