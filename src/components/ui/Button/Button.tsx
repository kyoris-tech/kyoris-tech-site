import { cn } from "@/lib/cn";
import type { ButtonProps, ButtonSize, ButtonVariant } from "./button.types";

const variantClassMap: Record<ButtonVariant, string> = {
  primary: "bg-primary text-neutral-50 hover:opacity-90",
  secondary: "bg-secondary text-neutral-50 hover:opacity-90",
  accent: "bg-accent text-neutral-900 hover:opacity-90",
  outline:
    "border border-neutral-200 text-neutral-900 hover:bg-neutral-50 dark:border-neutral-500 dark:text-neutral-50 dark:hover:bg-neutral-900",
  whatsapp: "bg-[#25D366] text-white hover:bg-[#1FBE5C]",
};

const sizeClassMap: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  as: Component = "a",
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <Component
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium transition-colors duration-300",
        variantClassMap[variant],
        sizeClassMap[size],
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}
