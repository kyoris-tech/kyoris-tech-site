import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Text } from "@/components/ui/Text";

export function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen scroll-mt-24 items-center px-6 pt-32 pb-16 sm:px-10 lg:px-16"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <SectionLabel slug="inicio" />

          <Text
            as="h1"
            size="4xl"
            weight="bold"
            color="primary"
            className="max-w-lg leading-tight sm:text-5xl lg:text-6xl"
          >
            Sistemas bem construídos{" "}
            <span className="whitespace-nowrap">mudam empresas.</span>
          </Text>

          <Text size="base" color="muted" className="max-w-md">
            Desenvolvemos sites, sistemas, aplicativos e produtos digitais
            sob medida para empresas de Diadema, São Paulo e do Grande ABC —
            e atendemos negócios em todo o Brasil.
          </Text>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button as="a" href="#projects" variant="primary">
              Explorar Projetos
            </Button>
            <Button as="a" href="#contact" variant="accent">
              Entre em Contato
            </Button>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src="/images/hero-team.svg"
            alt="Equipe Kyoris Tech desenvolvendo software"
            width={759}
            height={774}
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}
