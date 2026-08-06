import { ImagePlaceholderIcon } from "@/components/ui/icons";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/cn";

type MediaPlaceholderAccent = "primary" | "secondary" | "accent";

interface MediaPlaceholderProps {
  label: string;
  message?: string;
  accent?: MediaPlaceholderAccent;
  className?: string;
}

const accentClassMap: Record<MediaPlaceholderAccent, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
};

export function MediaPlaceholder({
  label,
  message = "Espaço para imagem",
  accent = "primary",
  className,
}: MediaPlaceholderProps) {
  return (
    <div
      className={cn(
        "relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-3xl border border-[var(--surface-border-color)] bg-[var(--surface-color)] transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "absolute -top-6 -right-4 select-none text-[7rem] leading-none font-bold opacity-10",
          accentClassMap[accent],
        )}
      >
        {label}
      </span>

      <div className="flex flex-col items-center gap-2">
        <ImagePlaceholderIcon className="h-8 w-8 text-[var(--text-color-muted)]" />
        <Text size="sm" color="muted">
          {message}
        </Text>
      </div>
    </div>
  );
}
