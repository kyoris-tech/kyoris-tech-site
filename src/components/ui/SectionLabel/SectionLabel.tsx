import { cn } from "@/lib/cn";

interface SectionLabelProps {
  slug: string;
  className?: string;
}

export function SectionLabel({ slug, className }: SectionLabelProps) {
  return (
    <p className={cn("mb-2 text-sm font-semibold text-secondary", className)}>
      /{slug}
    </p>
  );
}
