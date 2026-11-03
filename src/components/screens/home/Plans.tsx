"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/cn";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { PlanCard } from "./PlanCard";
import { planCategories } from "./plans-data";

const CARD_STAGGER_MS = 120;
const CUSTOM_PROJECT_MESSAGE =
  "Olá! Vim pelo site da Kyoris Tech e gostaria de um orçamento para um projeto sob medida.";

export function Plans() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [activeId, setActiveId] = useState(planCategories[0].id);

  const activeCategory =
    planCategories.find((category) => category.id === activeId) ??
    planCategories[0];

  useEffect(() => {
    const node = gridRef.current;
    if (inView || !node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setInView(true);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -20% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [inView, activeId]);

  return (
    <section id="plans" className="scroll-mt-24 py-16">
      <Container>
        <div className="max-w-2xl">
          <SectionLabel slug="planos" />

          <Text as="h2" size="3xl" weight="bold" color="primary">
            Planos para cada fase da sua empresa.
          </Text>

          <Text size="base" color="muted" className="mt-4">
            Do sistema interno que organiza a operação ao portal que conecta
            sua equipe. Escolha um ponto de partida e ajustamos o escopo à
            realidade do seu negócio.
          </Text>
        </div>

        <div
          role="tablist"
          aria-label="Categorias de planos"
          className="mt-10 flex flex-wrap gap-2"
        >
          {planCategories.map((category) => {
            const isActive = category.id === activeId;

            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                id={`plans-tab-${category.id}`}
                aria-selected={isActive}
                aria-controls="plans-panel"
                onClick={() => setActiveId(category.id)}
                className={cn(
                  "shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300",
                  isActive
                    ? "bg-primary text-neutral-50"
                    : "border border-[var(--surface-border-color)] text-[var(--text-color-muted)] hover:text-[var(--text-color-default)]",
                )}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <div
          id="plans-panel"
          role="tabpanel"
          aria-labelledby={`plans-tab-${activeCategory.id}`}
        >
          <Text size="sm" color="muted" className="mt-4 max-w-2xl">
            {activeCategory.description}
          </Text>

          <div
            ref={gridRef}
            key={activeCategory.id}
            className={cn(
              "mt-12 grid gap-6 lg:grid-cols-3 lg:gap-8",
              !inView && "opacity-0",
            )}
          >
            {activeCategory.plans.map((plan, index) => (
              <PlanCard
                key={plan.name}
                plan={plan}
                className={cn(inView && "plan-card-enter")}
                style={{ animationDelay: `${index * CARD_STAGGER_MS}ms` }}
              />
            ))}
          </div>

          <Text size="xs" color="muted" className="mt-6">
            * Os valores são pontos de partida e podem diminuir ou aumentar
            conforme o escopo, as integrações e o prazo de cada pedido.
          </Text>
        </div>

        <div className="mt-12 flex flex-col gap-6 rounded-3xl border border-dashed border-[var(--surface-border-color)] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="max-w-2xl">
            <Text as="h3" size="lg" weight="semibold">
              Precisa de algo fora dos planos?
            </Text>
            <Text size="sm" color="muted" className="mt-2">
              Para integrações, migrações ou projetos sob medida, fazemos um
              diagnóstico gratuito e enviamos uma proposta com escopo, prazo e
              investimento.
            </Text>
          </div>

          <a
            href={getWhatsAppUrl(CUSTOM_PROJECT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            Solicitar proposta sob medida →
          </a>
        </div>
      </Container>
    </section>
  );
}
