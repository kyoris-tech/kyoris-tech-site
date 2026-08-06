import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/cn";
import type { MethodStep } from "./method-data";

interface MethodStepCardProps {
  step: MethodStep;
  cardVisible: boolean;
  flagVisible: boolean;
  cardDelayMs: number;
  flagDelayMs: number;
}

export function MethodStepCard({
  step,
  cardVisible,
  flagVisible,
  cardDelayMs,
  flagDelayMs,
}: MethodStepCardProps) {
  return (
    <div
      className={cn(
        "relative w-full max-w-sm rounded-2xl border border-[var(--surface-border-color)] bg-[var(--surface-color)] p-6 shadow-lg shadow-neutral-900/5 transition-all duration-500 ease-out",
        cardVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
      )}
      style={{ transitionDelay: `${cardDelayMs}ms` }}
    >
      <span
        aria-hidden
        className={cn(
          "absolute -top-3 right-6 flex h-10 w-9 items-center justify-center bg-secondary text-sm font-bold text-neutral-50 transition-all duration-300 ease-out",
          flagVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0",
        )}
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 78%, 0 100%)",
          transitionDelay: `${flagDelayMs}ms`,
        }}
      >
        {step.number}
      </span>

      <Text as="h3" size="lg" weight="bold" color="primary">
        {step.title}
      </Text>

      <Text size="sm" color="muted" className="mt-2">
        {step.description}
      </Text>
    </div>
  );
}
