import type { IconProps } from "./icon.types";

export function CodeIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 6l6 6-6 6" />
      <path d="M8 6l-6 6 6 6" />
    </svg>
  );
}
