import { Container } from "@/components/ui/Container";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Text } from "@/components/ui/Text";
import { PillarCard } from "./PillarCard";
import { TeamMemberCard } from "./TeamMemberCard";
import { pillars } from "./pillars-data";
import { teamMembers } from "./team-data";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16">
      <Container>
        <div className="max-w-2xl">
          <SectionLabel slug="sobre" />

          <Text as="h2" size="3xl" weight="bold" color="primary">
            Pessoas que constroem tecnologia com propósito.
          </Text>

          <Text size="base" color="muted" className="mt-4">
            A Kyoris Tech nasceu para transformar ideias em produtos
            digitais que geram valor, combinando estratégia, design e
            engenharia em sites, sistemas e aplicativos modernos e
            escaláveis. Estamos sediados em Diadema, no ABC Paulista, e
            atendemos empresas de São Paulo, Santo André, São Bernardo do
            Campo, São Caetano do Sul e de todo o Brasil — sempre como
            parceiros de longo prazo na evolução de cada produto.
          </Text>
        </div>

        <div className="mt-10 flex justify-center">
          <MediaPlaceholder
            label="K"
            accent="primary"
            message="Foto da equipe"
            className="aspect-[16/9] max-w-3xl"
          />
        </div>

        <div className="my-12 border-t border-[var(--surface-border-color)]" />

        <div>
          <Text as="h3" size="xl" weight="bold">
            Nossa equipe
          </Text>

          <div className="mt-8 grid gap-10 sm:grid-cols-3">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        <div className="my-12 border-t border-[var(--surface-border-color)]" />

        <div className="grid gap-8 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <PillarCard key={pillar.id} pillar={pillar} />
          ))}
        </div>
      </Container>
    </section>
  );
}
