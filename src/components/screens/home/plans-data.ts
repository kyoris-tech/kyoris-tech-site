export interface PlanItem {
  name: string;
  tagline: string;
  pricePrefix?: string;
  price: string;
  period?: string;
  description: string;
  featuresLabel?: string;
  features: string[];
  cta: string;
  highlight?: boolean;
  badge?: string;
}

export interface PlanCategory {
  id: string;
  label: string;
  description: string;
  plans: PlanItem[];
}

export const planCategories: PlanCategory[] = [
  {
    id: "systems",
    label: "Sistemas & Software",
    description:
      "Sistemas internos, ERPs sob medida e plataformas que organizam a operação da sua empresa e eliminam planilhas e retrabalho.",
    plans: [
      {
        name: "Sistema Essencial",
        tagline: "Para digitalizar um processo",
        pricePrefix: "a partir de",
        price: "R$ 4.900",
        description:
          "Um sistema web interno para tirar um processo crítico das planilhas, com controle de acesso e relatórios desde o primeiro dia.",
        featuresLabel: "O projeto contempla:",
        features: [
          "Até 3 módulos (cadastros, fluxos e relatórios)",
          "Login com perfis e permissões",
          "Painel com indicadores principais",
          "Exportação para Excel e PDF",
          "Treinamento da equipe",
          "60 dias de suporte pós-entrega",
        ],
        cta: "Solicitar diagnóstico",
      },
      {
        name: "Sistema de Gestão",
        tagline: "Para empresas em crescimento",
        pricePrefix: "a partir de",
        price: "R$ 9.900",
        description:
          "Gestão completa da operação em uma única plataforma, conectada às ferramentas que sua empresa já usa.",
        featuresLabel: "Tudo do Essencial +",
        features: [
          "Até 8 módulos integrados",
          "Integrações via API (ERP, CRM, pagamentos)",
          "Dashboards gerenciais em tempo real",
          "Auditoria e histórico de alterações",
          "Notificações por e-mail e WhatsApp",
          "Infraestrutura em nuvem configurada",
          "90 dias de suporte pós-entrega",
        ],
        cta: "Solicitar diagnóstico",
        highlight: true,
        badge: "MAIS ESCOLHIDO",
      },
      {
        name: "Plataforma Enterprise",
        tagline: "Para operações complexas",
        pricePrefix: "a partir de",
        price: "R$ 19.900",
        description:
          "Software robusto para múltiplas unidades, alto volume de dados e times distribuídos, com arquitetura pronta para escalar.",
        featuresLabel: "Tudo do Gestão +",
        features: [
          "Módulos sob medida, sem limite",
          "Multiempresa e multiunidade",
          "Aplicativo mobile para equipes de campo",
          "Automação de processos e workflows",
          "Conformidade com LGPD e logs de segurança",
          "6 meses de suporte com SLA",
        ],
        cta: "Falar com especialista",
      },
    ],
  },
  {
    id: "portals",
    label: "Portais institucionais",
    description:
      "Portais corporativos, intranets e áreas restritas para comunicar com colaboradores, clientes e parceiros em um só lugar.",
    plans: [
      {
        name: "Portal Essencial",
        tagline: "Para presença corporativa sólida",
        pricePrefix: "a partir de",
        price: "R$ 2.900",
        description:
          "Portal institucional com gestão de conteúdo própria, para sua equipe publicar notícias e atualizações sem depender de ninguém.",
        featuresLabel: "O projeto contempla:",
        features: [
          "Até 12 páginas personalizadas",
          "Painel administrativo (CMS)",
          "Notícias, comunicados e eventos",
          "SEO técnico e Google Analytics",
          "Adequação à LGPD",
          "60 dias de suporte pós-entrega",
        ],
        cta: "Solicitar orçamento",
      },
      {
        name: "Portal Corporativo",
        tagline: "Para empresas que se comunicam em escala",
        pricePrefix: "a partir de",
        price: "R$ 5.900",
        description:
          "Portal com área restrita para colaboradores ou clientes, documentos centralizados e comunicação interna organizada.",
        featuresLabel: "Tudo do Essencial +",
        features: [
          "Intranet ou área do cliente com login",
          "Biblioteca de documentos com permissões",
          "Comunicados segmentados por setor",
          "Formulários e solicitações internas",
          "Versão em até 2 idiomas",
          "90 dias de suporte pós-entrega",
        ],
        cta: "Solicitar orçamento",
        highlight: true,
        badge: "MAIS ESCOLHIDO",
      },
      {
        name: "Portal Integrado",
        tagline: "Para grupos e redes de empresas",
        pricePrefix: "a partir de",
        price: "R$ 9.900",
        description:
          "Portal, intranet e serviços digitais conectados aos sistemas da empresa, com login único e fluxos de aprovação.",
        featuresLabel: "Tudo do Corporativo +",
        features: [
          "Login único (SSO) com Google ou Microsoft",
          "Integração com ERP, CRM e RH",
          "Fluxos de aprovação e chamados",
          "Múltiplas unidades ou marcas",
          "Relatórios de acesso e engajamento",
          "6 meses de suporte com SLA",
        ],
        cta: "Falar com especialista",
      },
    ],
  },
  {
    id: "custom",
    label: "Personalizado",
    description:
      "Um time de tecnologia sob demanda para evoluir sistemas existentes, criar novas funcionalidades ou tocar projetos contínuos.",
    plans: [
      {
        name: "Banco de Horas",
        tagline: "Para demandas pontuais",
        price: "R$ 990",
        period: "/mês",
        description:
          "10 horas mensais de desenvolvimento para ajustes, melhorias e pequenas funcionalidades no seu sistema ou portal.",
        featuresLabel: "O plano contempla:",
        features: [
          "10 horas de desenvolvimento por mês",
          "Correções e melhorias contínuas",
          "Relatório mensal de horas e entregas",
          "Atendimento via WhatsApp e e-mail",
        ],
        cta: "Contratar horas",
      },
      {
        name: "Evolução Contínua",
        tagline: "Para produtos em evolução",
        price: "R$ 1.890",
        period: "/mês",
        description:
          "20 horas mensais com planejamento de sprints para manter seu software sempre atualizado e crescendo junto com o negócio.",
        featuresLabel: "Tudo do Banco de Horas +",
        features: [
          "20 horas de desenvolvimento por mês",
          "Planejamento quinzenal de sprints",
          "Monitoramento e atualizações de segurança",
          "Reunião mensal de acompanhamento",
          "Prioridade no atendimento",
        ],
        cta: "Contratar plano",
        highlight: true,
        badge: "MAIS ESCOLHIDO",
      },
      {
        name: "Squad Dedicado",
        tagline: "Para projetos estratégicos",
        price: "R$ 3.690",
        period: "/mês",
        description:
          "40 horas mensais de um time dedicado ao seu projeto, com gestão ágil, arquitetura e entregas semanais.",
        featuresLabel: "Tudo do Evolução +",
        features: [
          "40 horas de desenvolvimento por mês",
          "Gestão de projeto e arquitetura inclusas",
          "Entregas e demonstrações semanais",
          "Infraestrutura e DevOps",
          "SLA de atendimento",
        ],
        cta: "Falar com especialista",
      },
    ],
  },
  {
    id: "websites",
    label: "Sites",
    description:
      "Sites rápidos, otimizados para o Google e prontos para converter visitantes em clientes.",
    plans: [
      {
        name: "Landing Page",
        tagline: "Para campanhas e lançamentos",
        pricePrefix: "a partir de",
        price: "R$ 690",
        description:
          "Página única de alta conversão para divulgar um produto, serviço ou campanha.",
        featuresLabel: "O projeto contempla:",
        features: [
          "Página única com até 6 seções",
          "Layout responsivo personalizado",
          "Integração com WhatsApp e formulário",
          "SEO básico e Google Analytics",
          "30 dias de suporte pós-entrega",
        ],
        cta: "Solicitar orçamento",
      },
      {
        name: "Site Institucional",
        tagline: "Para apresentar sua empresa",
        pricePrefix: "a partir de",
        price: "R$ 900",
        description:
          "Site completo para apresentar sua empresa, serviços e diferenciais com credibilidade.",
        featuresLabel: "Tudo da Landing Page +",
        features: [
          "Até 6 páginas personalizadas",
          "SEO técnico e performance otimizada",
          "Integração com Google Meu Negócio",
          "Adequação à LGPD",
          "60 dias de suporte pós-entrega",
        ],
        cta: "Solicitar orçamento",
        highlight: true,
        badge: "MAIS ESCOLHIDO",
      },
      {
        name: "Site Gerenciável",
        tagline: "Para quem publica com frequência",
        pricePrefix: "a partir de",
        price: "R$ 1.690",
        description:
          "Site institucional com painel administrativo para sua equipe atualizar conteúdos e blog com autonomia.",
        featuresLabel: "Tudo do Institucional +",
        features: [
          "Até 10 páginas personalizadas",
          "Painel administrativo (CMS)",
          "Blog otimizado para SEO",
          "Treinamento da equipe",
          "90 dias de suporte pós-entrega",
        ],
        cta: "Solicitar orçamento",
      },
    ],
  },
];
