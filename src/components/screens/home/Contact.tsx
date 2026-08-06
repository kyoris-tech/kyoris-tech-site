import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { LocationIcon, WhatsAppIcon } from "@/components/ui/icons";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Text } from "@/components/ui/Text";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { SocialLinkRow } from "./SocialLinkRow";
import { socialLinks } from "./contact-data";

const CARD_WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da Kyoris Tech e gostaria de falar sobre um projeto.";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-neutral-950 py-16">
      <Container>
        <SectionLabel slug="contato" />

        <Text as="h2" size="4xl" weight="bold" className="!text-neutral-50">
          Vamos tirar sua ideia do papel{" "}
          <span className="text-primary">e transformar em algo real.</span>
        </Text>

        <Text size="base" className="mt-4 max-w-2xl !text-neutral-400">
          Se você é de Diadema, São Paulo, Santo André, São Bernardo do
          Campo, São Caetano do Sul ou de qualquer lugar do Brasil e
          procura um time para desenvolver sites, sistemas, aplicativos ou
          produtos digitais, estamos por aqui.
        </Text>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="flex h-full flex-col rounded-3xl border border-neutral-500/20 bg-neutral-900 p-8">
            <span className="inline-flex rounded-full bg-secondary/15 px-3 py-1 text-xs font-semibold text-secondary w-fit">
              Contato direto
            </span>

            <Text
              as="h3"
              size="xl"
              weight="bold"
              className="mt-4 !text-neutral-50"
            >
              Estamos abertos para novos projetos, parcerias e oportunidades
            </Text>

            <Text size="sm" className="mt-3 !text-neutral-400">
              Entre em contato pelas redes ou fale com a gente no WhatsApp.
              A ideia é simples: entender seu momento, enxergar o problema
              com clareza e pensar em uma solução digital que faça sentido
              para o seu negócio.
            </Text>

            <Button
              as="a"
              href={getWhatsAppUrl(CARD_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              className="mt-6"
            >
              <WhatsAppIcon className="h-5 w-5" />
              <span className="ml-2">Falar no WhatsApp</span>
            </Button>

            <div className="mt-auto flex items-start gap-2 pt-6">
              <LocationIcon className="mt-0.5 h-4 w-4 shrink-0 text-neutral-400" />
              <Text size="sm" className="!text-neutral-400">
                Avenida Sete de Setembro, 120 — Centro, Diadema - SP, CEP
                09912-010
              </Text>
            </div>
          </div>

          <div className="flex h-full flex-col rounded-3xl border border-neutral-500/20 bg-neutral-900 p-8">
            <Text as="h3" size="xl" weight="bold" className="!text-neutral-50">
              Redes e presença digital
            </Text>

            <Text size="sm" className="mt-3 !text-neutral-400">
              Você também pode acompanhar nosso trabalho, projetos e
              trajetória através das redes — e também do nosso parceiro
              estratégico, a LetMor.
            </Text>

            <div className="mt-6 flex flex-col gap-3">
              {socialLinks.map((link) => (
                <SocialLinkRow key={link.id} link={link} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
