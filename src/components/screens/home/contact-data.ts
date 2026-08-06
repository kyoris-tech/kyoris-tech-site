import type { ComponentType } from "react";
import { InstagramIcon, LinkedInIcon, type IconProps } from "@/components/ui/icons";

export interface SocialLink {
  id: string;
  label: string;
  meta: string;
  href: string;
  accent: "primary" | "secondary" | "accent";
  icon: ComponentType<IconProps>;
}

export const socialLinks: SocialLink[] = [
  {
    id: "kyoris-instagram",
    label: "Instagram",
    meta: "Kyoris Tech",
    href: "https://www.instagram.com/kyoristech/",
    accent: "primary",
    icon: InstagramIcon,
  },
  {
    id: "kyoris-linkedin",
    label: "LinkedIn",
    meta: "Kyoris Tech",
    href: "https://www.linkedin.com/company/kyoris-tech",
    accent: "secondary",
    icon: LinkedInIcon,
  },
  {
    id: "letmor-instagram",
    label: "Instagram",
    meta: "LetMor · Parceiro estratégico",
    href: "https://www.instagram.com/agencialetmor/",
    accent: "accent",
    icon: InstagramIcon,
  },
  {
    id: "letmor-linkedin",
    label: "LinkedIn",
    meta: "LetMor · Parceiro estratégico",
    href: "https://www.linkedin.com/in/ag%C3%AAncia-letmor-984251346/",
    accent: "primary",
    icon: LinkedInIcon,
  },
];
