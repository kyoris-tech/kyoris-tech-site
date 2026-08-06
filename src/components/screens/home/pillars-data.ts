import {
  DesignIcon,
  GearIcon,
  PartnershipIcon,
  type IconProps,
} from "@/components/ui/icons";
import type { ComponentType } from "react";

export interface Pillar {
  id: string;
  title: string;
  description: string;
  icon: ComponentType<IconProps>;
}

export const pillars: Pillar[] = [
  {
    id: "engineering",
    title: "Engenharia",
    description:
      "Construímos soluções sólidas, seguras e preparadas para crescer.",
    icon: GearIcon,
  },
  {
    id: "design",
    title: "Design",
    description:
      "Projetamos experiências simples, intuitivas e alinhadas aos objetivos do negócio.",
    icon: DesignIcon,
  },
  {
    id: "partnership",
    title: "Parceria",
    description:
      "Trabalhamos próximos aos nossos clientes durante toda a evolução do produto.",
    icon: PartnershipIcon,
  },
];
