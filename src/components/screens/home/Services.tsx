import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { WhatsAppIcon } from "@/components/ui/icons";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Text } from "@/components/ui/Text";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { services } from "./services-data";
import { ServiceCard } from "./ServiceCard";

const STICKY_TOP_PX = 128;
const CARD_OFFSET_STEP_PX = 20;
const CTA_MESSAGE =
  "Olá! Gostaria de saber mais sobre os serviços da Kyoris Tech.";

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-16">
      <Container>
        <div>
          <SectionLabel slug="servicos" />

          <Text as="h2" size="3xl" weight="bold" color="primary">
            Tecnologia aplicada ao seu negócio.
          </Text>

          <Text size="base" color="muted" className="mt-4 max-w-2xl">
            Criamos sites, sistemas, aplicativos e produtos digitais que
            ajudam empresas de Diadema, Santo André, São Bernardo do Campo,
            São Caetano do Sul, São Paulo e de todo o Brasil a operar
            melhor, crescer com segurança e acelerar resultados.
          </Text>
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-2">
          <div>
            <div className="flex justify-center lg:sticky lg:top-32">
              <Image
                src="/images/services-image.svg"
                alt="Equipe organizando sistemas e plataformas digitais"
                width={682}
                height={617}
                className="w-full max-w-md"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 pb-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="sticky w-full"
                style={{
                  top: `${STICKY_TOP_PX + index * CARD_OFFSET_STEP_PX}px`,
                  zIndex: index + 1,
                }}
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32 flex justify-start lg:justify-end">
          <Button
            as="a"
            href={getWhatsAppUrl(CTA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            variant="whatsapp"
          >
            <WhatsAppIcon className="h-5 w-5" />
            <span className="ml-2">Conte-nos o que precisa</span>
          </Button>
        </div>
      </Container>
    </section>
  );
}
