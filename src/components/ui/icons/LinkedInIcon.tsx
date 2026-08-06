import type { IconProps } from "./icon.types";

export function LinkedInIcon({ className }: IconProps) {
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
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7.5 10.5v6" />
      <circle cx="7.5" cy="7.3" r="0.6" fill="currentColor" stroke="none" />
      <path d="M11.5 16.5v-3.5a2 2 0 0 1 4 0v3.5" />
      <path d="M11.5 10.5v6" />
    </svg>
  );
}
