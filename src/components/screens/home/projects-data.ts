export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  highlights?: string[];
  tech: string[];
  url: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  featured?: boolean;
}

export const projects: ProjectItem[] = [
  {
    id: "orm-intelligence",
    title: "Orm Intelligence",
    category: "Plataforma SaaS · Recrutamento",
    description:
      "Plataforma de recrutamento orientado a dados: reúne currículos, analisa candidatos com inteligência artificial e acompanha cada processo seletivo do início ao fim, sem planilhas paralelas.",
    highlights: [
      "Triagem de currículos com IA",
      "Importação em lote de PDF e Word",
      "Vagas publicadas com link público",
      "Planos por assinatura com franquia de currículos",
    ],
    tech: ["Next.js", "IA"],
    url: "https://useorm.com",
    image: "/images/orm.png",
    imageWidth: 1440,
    imageHeight: 755,
    featured: true,
  },
  {
    id: "agencia-letmor",
    title: "Agência LetMor",
    category: "Site institucional · Branding e design",
    description:
      "Site de agência de branding e marketing, com portfólio filtrável por categoria, serviços, planos de gestão de mídias sociais e identidade visual própria.",
    highlights: [
      "Portfólio filtrável (identidade visual, design, social media)",
      "Página de serviços e planos mensais",
      "Contato direto via WhatsApp",
    ],
    tech: ["Next.js"],
    url: "https://agencialetmor.com",
    image: "/images/letmor.png",
    imageWidth: 1440,
    imageHeight: 800,
  },
  {
    id: "dtm-logistica",
    title: "DTM Logística",
    category: "Site institucional · Comércio exterior",
    description:
      "Site para transportadora de comércio exterior em Santos/SP, que apresenta o método de trabalho e as áreas de atuação e converte visitas em pedidos de cotação.",
    highlights: [
      "Fluxo claro: diagnóstico, planejamento, execução e otimização",
      "Áreas de atuação: contêineres, cross docking, armazéns e mais",
      "Solicitação de cotação e WhatsApp",
    ],
    tech: ["Next.js"],
    url: "https://dtmlog.com.br",
    image: "/images/dtmlog.png",
    imageWidth: 1440,
    imageHeight: 800,
  },
  {
    id: "mei-digital",
    title: "MEI Digital",
    category: "Site + sistema · Contabilidade",
    description:
      "Portal de contabilidade para microempreendedores, com serviços de abertura, regularização e baixa de MEI, consulta integrada, blog e aplicativo.",
    highlights: [
      "Abertura, alteração e encerramento de CNPJ MEI",
      "Declaração anual (DASN) e parcelamento de débitos",
      "Blog com conteúdo para MEIs",
    ],
    tech: ["Next.js"],
    url: "https://meiportaldoempreendedor.com.br/",
    image: "/images/mei.png",
    imageWidth: 1877,
    imageHeight: 867,
  },
  {
    id: "dev-portfolio",
    title: "Dev Portfólio",
    category: "Portfólio pessoal",
    description:
      "Site de portfólio para desenvolvedor, apresentando perfil, projetos e contato em uma página rápida e objetiva.",
    tech: ["Next.js"],
    url: "https://paulo-devspace.vercel.app/",
    image: "/images/portfolio.png",
    imageWidth: 1877,
    imageHeight: 860,
  },
];
