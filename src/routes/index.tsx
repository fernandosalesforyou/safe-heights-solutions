import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { RegionalCoverage, ProjectInstallInspect } from "@/components/site/RegionalCoverage";
import { Types } from "@/components/site/Types";
import { Services } from "@/components/site/Services";
import { HowWeWork } from "@/components/site/HowWeWork";
import { ProjectPhase } from "@/components/site/ProjectPhase";
import { Installation } from "@/components/site/Installation";
import { Special } from "@/components/site/Special";
import { ProjectVideos, InspectionVideos } from "@/components/site/VideoBlock";
import { Inspections, Anchors, NR35 } from "@/components/site/Inspections";
import { FAQ } from "@/components/site/FAQ";
import { ContactForm } from "@/components/site/ContactForm";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { ContactDialogProvider } from "@/components/site/ContactDialog";


const SITE_URL = "https://portoalegre.engenharmais.com.br";
const TITLE = "Linha de Vida em Porto Alegre | Projeto, Instalação e Inspeção NR-35 | Engenhar+";
const DESCRIPTION =
  "Linha de vida em Porto Alegre: projeto, instalação e inspeção com ART e conformidade NR-35. Atendimento em Porto Alegre, Canoas, Gravataí e toda a Região Metropolitana do RS.";

const faqs = [
  {
    q: "A Engenhar+ atende projetos de linha de vida em toda Porto Alegre?",
    a: "Sim. Atendemos toda Porto Alegre e Região Metropolitana — Canoas, Gravataí, Cachoeirinha, Esteio, Sapucaia do Sul, Viamão, Alvorada e demais cidades do RS.",
  },
  {
    q: "Quanto custa instalar uma linha de vida em Porto Alegre?",
    a: "O investimento varia conforme tipo de estrutura, comprimento da linha, número de usuários simultâneos e pontos de ancoragem. Fazemos visita técnica em Porto Alegre e enviamos orçamento personalizado.",
  },
  {
    q: "A linha de vida instalada em Porto Alegre precisa de ART?",
    a: "Sim. Todo projeto e instalação de linha de vida em Porto Alegre deve ter ART (Anotação de Responsabilidade Técnica) emitida por engenheiro habilitado, conforme NR-35 e exigência do CREA-RS.",
  },
  {
    q: "Com que frequência devo inspecionar a linha de vida em Porto Alegre?",
    a: "A NR-35 exige inspeção periódica anual, além de inspeção visual diária antes do uso. A Engenhar+ realiza inspeções técnicas com emissão de laudo em Porto Alegre e Região Metropolitana.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "linha de vida porto alegre, linha de vida em porto alegre, instalação linha de vida porto alegre, inspeção linha de vida porto alegre, NR-35 porto alegre, ponto de ancoragem porto alegre, linha de vida RS, linha de vida região metropolitana",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: SITE_URL + "/" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "Engenhar+ Soluções" },
      { name: "geo.region", content: "BR-RS" },
      { name: "geo.placename", content: "Porto Alegre" },
      { name: "geo.position", content: "-30.0346;-51.2177" },
      { name: "ICBM", content: "-30.0346, -51.2177" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Engenhar+ Soluções — Linha de Vida em Porto Alegre",
          description: DESCRIPTION,
          url: SITE_URL,
          telephone: "+55-51-98903-6374",
          areaServed: [
            { "@type": "City", name: "Porto Alegre" },
            { "@type": "City", name: "Canoas" },
            { "@type": "City", name: "Gravataí" },
            { "@type": "City", name: "Cachoeirinha" },
            { "@type": "City", name: "Esteio" },
            { "@type": "City", name: "Sapucaia do Sul" },
            { "@type": "City", name: "Viamão" },
            { "@type": "City", name: "Alvorada" },
            { "@type": "AdministrativeArea", name: "Região Metropolitana de Porto Alegre" },
            { "@type": "State", name: "Rio Grande do Sul" },
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Porto Alegre",
            addressRegion: "RS",
            addressCountry: "BR",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: -30.0346,
            longitude: -51.2177,
          },
          serviceType: [
            "Projeto de linha de vida",
            "Instalação de linha de vida",
            "Inspeção de linha de vida",
            "Pontos de ancoragem",
            "Conformidade NR-35",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ContactDialogProvider>
      <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <RegionalCoverage />
        <Types />
        <Services />
        <ProjectInstallInspect />
        <HowWeWork />
        <ProjectPhase />
        <Installation />
        <ProjectVideos />
        <Inspections />
        <InspectionVideos />
        <Special />
        <Anchors />
        <NR35 />
        <FAQ />
        <ContactForm />

      </main>
      <Footer />
      <FloatingWhatsApp />
      </div>
    </ContactDialogProvider>
  );
}
