import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Footer } from "@/components/composite/Footer";
import { Navbar } from "@/components/composite/Navbar";
import { WhatsAppButton } from "@/components/composite/WhatsAppButton";
import { ThemeProvider, themeInitScript } from "@/providers/theme";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const SITE_TITLE =
  "Kyoris Tech | Desenvolvimento de Sites, Sistemas e Aplicativos em Diadema e São Paulo";
const SITE_DESCRIPTION =
  "A Kyoris Tech desenvolve sites, sistemas, aplicativos e produtos digitais sob medida para empresas de Diadema, São Paulo, Santo André, São Bernardo do Campo, São Caetano do Sul e de todo o Brasil. Estratégia, design e engenharia para transformar ideias em soluções escaláveis.";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "desenvolvimento de sites",
    "desenvolvimento de sistemas",
    "desenvolvimento de aplicativos",
    "desenvolvimento de produtos digitais",
    "software house Diadema",
    "fábrica de software ABC Paulista",
    "criação de sites São Paulo",
    "desenvolvimento de sistemas Santo André",
    "desenvolvimento de aplicativos São Bernardo do Campo",
    "software house São Caetano do Sul",
    "desenvolvimento de software Brasil",
    "fazer site em Diadema",
    "fazer site em São Paulo",
    "fazer aplicativos em Diadema",
    "design em São Paulo",
    "design em São Bernardo",
    "design em Brasil",
    "fazer aplicativos em São Paulo"
  ],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "pt_BR",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Kyoris Tech",
  description: SITE_DESCRIPTION,
  telephone: "+5511911755526",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Avenida Sete de Setembro, 120, Centro",
    addressLocality: "Diadema",
    addressRegion: "SP",
    postalCode: "09912-010",
    addressCountry: "BR",
  },
  areaServed: [
    "Diadema",
    "São Paulo",
    "Santo André",
    "São Bernardo do Campo",
    "São Caetano do Sul",
    "Brasil",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
