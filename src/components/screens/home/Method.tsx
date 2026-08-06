"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/cn";
import { MethodConnector } from "./MethodConnector";
import { MethodStepCard } from "./MethodStepCard";
import { methodSteps } from "./method-data";

const FLAG_STAGGER_MS = 100;
const FLAG_START_BUFFER_MS = 200;

export function Method() {
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(() =>
    methodSteps.map(() => false),
  );
  const [flagsVisible, setFlagsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const index = Number(
            (entry.target as HTMLElement).dataset.stepIndex,
          );

          setVisibleCards((current) => {
            if (current[index]) return current;
            const next = [...current];
            next[index] = true;
            return next;
          });

          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.4, rootMargin: "0px 0px -10% 0px" },
    );

    cardRefs.current.forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visibleCards.every(Boolean)) return;

    const timer = setTimeout(
      () => setFlagsVisible(true),
      FLAG_START_BUFFER_MS,
    );

    return () => clearTimeout(timer);
  }, [visibleCards]);

  return (
    <section id="method" className="scroll-mt-24 py-16">
      <Container>
        <div className="max-w-2xl">
          <SectionLabel slug="metodo" />

          <Text as="h2" size="3xl" weight="bold" color="primary">
            Uma parceria, não apenas uma entrega.
          </Text>

          <Text size="base" color="muted" className="mt-4">
            Da descoberta ao lançamento, cada etapa é estruturada para
            garantir qualidade, transparência e evolução contínua do
            produto.
          </Text>
        </div>

        <div className="mt-10 grid gap-16 lg:grid-cols-2 lg:items-start">
          <div className="flex justify-center">
            <Image
              src="/images/scrum-board.svg"
              alt="Equipe organizando tarefas em um quadro scrum"
              width={713}
              height={721}
              className="w-full max-w-md"
            />
          </div>

          <div className="flex flex-col gap-8">
            {methodSteps.map((step, index) => {
              const nextStep = methodSteps[index + 1];
              const isVisible = visibleCards[index];

              return (
                <div key={step.id} className={cn(index % 2 === 1 && "sm:ml-16")}>
                  <div
                    ref={(node) => {
                      cardRefs.current[index] = node;
                    }}
                    data-step-index={index}
                  >
                    <MethodStepCard
                      step={step}
                      cardVisible={isVisible}
                      flagVisible={flagsVisible}
                      cardDelayMs={0}
                      flagDelayMs={index * FLAG_STAGGER_MS}
                    />
                  </div>

                  {nextStep && (
                    <MethodConnector
                      direction={(index + 1) % 2 === 1 ? "right" : "left"}
                      visible={isVisible}
                      delayMs={0}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
