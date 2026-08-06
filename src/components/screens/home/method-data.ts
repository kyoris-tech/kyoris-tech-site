export interface MethodStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export const methodSteps: MethodStep[] = [
  {
    id: "discovery",
    number: "01",
    title: "Descoberta",
    description:
      "Entendemos o contexto, os desafios e os objetivos para definir o caminho mais eficiente.",
  },
  {
    id: "strategy",
    number: "02",
    title: "Estratégia",
    description:
      "Planejamos arquitetura, funcionalidades, cronograma e prioridades antes da primeira linha de código.",
  },
  {
    id: "build",
    number: "03",
    title: "Construção",
    description:
      "Design e engenharia trabalham juntos para desenvolver uma solução consistente, moderna e escalável.",
  },
  {
    id: "evolution",
    number: "04",
    title: "Evolução",
    description:
      "Após o lançamento, continuamos acompanhando o produto com melhorias, suporte e novas funcionalidades.",
  },
];
