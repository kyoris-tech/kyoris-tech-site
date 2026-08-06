export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tech: string[];
  url: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
}

export const projects: ProjectItem[] = [
  {
    id: "orm-intelligence",
    title: "ORM Intelligence",
    description:
      "Sistema inteligente para análise de currículos com foco em performance e escala.",
    tech: ["Next.js"],
    url: "https://orm-mvp.vercel.app/login",
    image: "/images/orm.png",
    imageWidth: 1892,
    imageHeight: 862,
  },
  {
    id: "mei-digital",
    title: "MEI Digital",
    description:
      "Site de contabilidade com sistema de consulta integrado.",
    tech: ["Next.js"],
    url: "https://meiportaldoempreendedor.com.br/",
    image: "/images/mei.png",
    imageWidth: 1877,
    imageHeight: 867,
  },
  {
    id: "dev-portfolio",
    title: "Dev Portfólio",
    description: "Site de portfólio para desenvolvedor.",
    tech: ["Next.js"],
    url: "https://paulo-devspace.vercel.app/",
    image: "/images/portfolio.png",
    imageWidth: 1877,
    imageHeight: 860,
  },
];
