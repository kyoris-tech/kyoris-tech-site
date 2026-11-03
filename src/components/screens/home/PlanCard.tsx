import type { CSSProperties } from "react";
import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import type { PlanItem } from "./plans-data";

interface PlanCardProps {
  plan: PlanItem;
  className?: string;
  style?: CSSProperties;
}

export function PlanCard({ plan, className, style }: PlanCardProps) {
  const highlight = Boolean(plan.highlight);
  const [currency, amount] = plan.price.split(" ");

  return (
    <article
      style={style}
      className={cn(
        "flex h-full flex-col rounded-3xl p-6 sm:p-8",
        highlight
          ? "border border-transparent bg-primary text-neutral-50 shadow-2xl shadow-primary/30"
          : "border border-[var(--surface-border-color)] bg-[var(--surface-color)] text-[var(--text-color-default)] shadow-lg shadow-neutral-900/5",
        className,
      )}
    >
      <h3 className="text-xl font-bold">{plan.name}</h3>
      <p
        className={cn(
          "mt-1 text-sm",
          highlight ? "text-neutral-50/80" : "text-[var(--text-color-muted)]",
        )}
      >
        {plan.tagline}
      </p>

      <div className={cn("mt-4 h-6", !plan.badge && "hidden lg:block")}>
        {plan.badge && (
          <span className="inline-flex rounded-full bg-accent px-3 py-1 text-xs font-bold tracking-wide text-neutral-900">
            {plan.badge}
          </span>
        )}
      </div>

      <div className="mt-5">
        {plan.pricePrefix && (
          <span
            className={cn(
              "block text-xs font-medium uppercase tracking-wide",
              highlight ? "text-neutral-50/75" : "text-[var(--text-color-muted)]",
            )}
          >
            {plan.pricePrefix}
          </span>
        )}
        <div className="flex items-end gap-1.5">
          <span className="mb-1.5 text-sm font-bold">{currency}</span>
          <span className="text-4xl font-bold tracking-tight">{amount}</span>
          {plan.period && (
            <span
              className={cn(
                "mb-1.5 text-sm",
                highlight ? "text-neutral-50/75" : "text-[var(--text-color-muted)]",
              )}
            >
              {plan.period}
            </span>
          )}
        </div>
      </div>

      <p
        className={cn(
          "mt-4 text-sm",
          highlight ? "text-neutral-50/90" : "text-[var(--text-color-muted)]",
        )}
      >
        {plan.description}
      </p>

      <span
        className={cn(
          "my-6 block h-px w-full",
          highlight ? "bg-neutral-50/25" : "bg-[var(--surface-border-color)]",
        )}
      />

      {plan.featuresLabel && (
        <p className="mb-4 text-sm font-bold">{plan.featuresLabel}</p>
      )}

      <ul className="flex flex-1 flex-col gap-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <CheckIcon
              className={cn(
                "mt-0.5 h-4 w-4 shrink-0",
                highlight ? "text-accent" : "text-secondary",
              )}
            />
            <span
              className={
                highlight ? "text-neutral-50/90" : "text-[var(--text-color-default)]"
              }
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button
        href={getWhatsAppUrl(
          `Olá! Vim pelo site da Kyoris Tech e tenho interesse no plano ${plan.name}.`,
        )}
        target="_blank"
        rel="noopener noreferrer"
        variant={highlight ? "accent" : "outline"}
        className="mt-8 w-full"
      >
        {plan.cta}
      </Button>
    </article>
  );
}
