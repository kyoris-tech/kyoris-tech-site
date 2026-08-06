import type { ElementType, ReactNode } from "react";

export type TextSize =
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl";

export type TextColor =
  | "default"
  | "muted"
  | "inverse"
  | "primary"
  | "secondary"
  | "accent";

export type TextWeight = "regular" | "medium" | "semibold" | "bold";

export interface TextProps {
  as?: ElementType;
  size?: TextSize;
  color?: TextColor;
  weight?: TextWeight;
  className?: string;
  children: ReactNode;
}
