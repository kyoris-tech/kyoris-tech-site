import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface CardProps {
  className?: string;
  children: ReactNode;
}

export function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-[var(--surface-border-color)] bg-[var(--surface-color)] p-6 shadow-lg shadow-neutral-900/5",
        className,
      )}
    >
      {children}
    </div>
  );
}
