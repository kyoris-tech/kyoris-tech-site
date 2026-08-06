import { cn } from "@/lib/cn";
import type { SocialLink } from "./contact-data";

const accentClassMap: Record<SocialLink["accent"], string> = {
  primary: "bg-primary text-neutral-50",
  secondary: "bg-secondary text-neutral-50",
  accent: "bg-accent text-neutral-900",
};

interface SocialLinkRowProps {
  link: SocialLink;
}

export function SocialLinkRow({ link }: SocialLinkRowProps) {
  const Icon = link.icon;

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between rounded-2xl border border-neutral-500/20 bg-neutral-900 px-5 py-4 transition-colors duration-300 hover:border-secondary/40"
    >
      <span className="flex items-center gap-3">
        <span
          className={cn(
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-full",
            accentClassMap[link.accent],
          )}
        >
          <Icon className="h-5 w-5" />
        </span>

        <span className="flex flex-col">
          <span className="text-sm font-semibold text-neutral-50">
            {link.label}
          </span>
          <span className="text-xs text-neutral-400">{link.meta}</span>
        </span>
      </span>

      <span className="flex items-center gap-1 text-sm font-medium text-neutral-400 transition-colors duration-300 group-hover:text-secondary">
        Abrir <span aria-hidden>→</span>
      </span>
    </a>
  );
}
