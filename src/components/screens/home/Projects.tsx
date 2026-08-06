import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Text } from "@/components/ui/Text";
import { ProjectCard } from "./ProjectCard";
import { projects } from "./projects-data";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-16">
      <Container>
        <div className="max-w-2xl">
          <SectionLabel slug="projetos" />

          <Text as="h2" size="3xl" weight="bold" color="primary">
            Produtos que saíram do papel.
          </Text>

          <Text size="base" color="muted" className="mt-4">
            Cada projeto representa um desafio diferente. Desenvolvemos
            soluções digitais focadas em performance, experiência e
            escalabilidade, sempre alinhadas aos objetivos do negócio.
          </Text>
        </div>

        <div className="mt-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isLast={index === projects.length - 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
