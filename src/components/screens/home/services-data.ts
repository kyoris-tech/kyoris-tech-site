import type { ComponentType } from "react";
import {
  CloudIcon,
  CodeIcon,
  DesignIcon,
  MobileIcon,
  StrategyIcon,
  SupportIcon,
  type IconProps,
} from "@/components/ui/icons";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: ComponentType<IconProps>;
}

export const services: ServiceItem[] = [
  {
    id: "web-development",
    title: "Desenvolvimento Web",
    description:
      "Sites, sistemas e plataformas modernas com foco em desempenho, segurança e escalabilidade.",
    icon: CodeIcon,
  },
  {
    id: "mobile-apps",
    title: "Aplicativos Mobile",
    description:
      "Aplicativos iOS e Android desenvolvidos para oferecer experiências rápidas, intuitivas e confiáveis.",
    icon: MobileIcon,
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Interfaces elegantes e experiências centradas no usuário, alinhando estética e usabilidade.",
    icon: DesignIcon,
  },
  {
    id: "product-consulting",
    title: "Consultoria em Produto",
    description:
      "Planejamento, descoberta, arquitetura e definição de estratégias para transformar ideias em produtos consistentes.",
    icon: StrategyIcon,
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud & Infraestrutura",
    description:
      "Implantação, automação e monitoramento de ambientes preparados para crescer junto com seu negócio.",
    icon: CloudIcon,
  },
  {
    id: "support-evolution",
    title: "Suporte & Evolução",
    description:
      "Acompanhamento contínuo, melhorias e novas funcionalidades para manter seu produto sempre evoluindo.",
    icon: SupportIcon,
  },
];
