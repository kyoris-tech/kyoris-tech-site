export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  link: string;
  badge?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "paulo",
    name: "Paulo Henrique Paiva",
    role: "Founder & Software Engineer",
    bio: "Especialista em desenvolvimento de produtos digitais, arquitetura front-end, UX/UI e estratégia de tecnologia.",
    link: "https://www.linkedin.com/in/paulohenriquepaiva/"
  },
  {
    id: "anderson",
    name: "Anderson Araújo",
    role: "Comercial & Relacionamento",
    bio: "Responsável pelo relacionamento com clientes, identificação de oportunidades e desenvolvimento de novos negócios.",
    link: "https://www.linkedin.com/in/anderson-araujo-67085613a/"
  },
  {
    id: "letmor",
    name: "Agência LetMor",
    role: "Marketing Partner",
    bio: "Parceira estratégica responsável por branding, posicionamento e comunicação digital da Kyoris.",
    link: "https://www.linkedin.com/in/ag%C3%AAncia-letmor-984251346/",
    badge: "Parceiro Estratégico",
  },
];
