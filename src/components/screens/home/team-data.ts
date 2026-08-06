export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  badge?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "paulo",
    name: "Paulo Henrique",
    role: "Founder & Software Engineer",
    bio: "Especialista em desenvolvimento de produtos digitais, arquitetura front-end, UX/UI e estratégia de tecnologia.",
  },
  {
    id: "anderson",
    name: "Anderson",
    role: "Comercial & Relacionamento",
    bio: "Responsável pelo relacionamento com clientes, identificação de oportunidades e desenvolvimento de novos negócios.",
  },
  {
    id: "letmor",
    name: "LetMor",
    role: "Marketing Partner",
    bio: "Parceira estratégica responsável por branding, posicionamento e comunicação digital da Kyoris.",
    badge: "Parceiro Estratégico",
  },
];
