import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Header } from "@/components/site/Header";
import { Section, SectionTitle } from "@/components/site/Section";
import { CtaButton } from "@/components/site/CtaButton";
import { ProjectVideos, InspectionVideos } from "@/components/site/VideoBlock";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { ContactDialogProvider } from "@/components/site/ContactDialog";
import heroBg from "@/assets/hero-bg.jpg";
import install1 from "@/assets/install-1.jpg";
import install2 from "@/assets/install-2.jpg";
import install3 from "@/assets/install-3.jpg";
import install4 from "@/assets/install-4.jpg";

export const Route = createFileRoute("/linha-de-vida-porto-alegre")({
  head: () => ({
    meta: [
      { title: "Linha de Vida em Porto Alegre | Projeto, Instalação e Inspeção | Engenhar+" },
      {
        name: "description",
        content:
          "Projeto, instalação e inspeção de linha de vida em Porto Alegre e Região Metropolitana. Soluções NR-35 com ART e atendimento especializado.",
      },
      { property: "og:title", content: "Linha de Vida em Porto Alegre | Projeto, Instalação e Inspeção | Engenhar+" },
      {
        property: "og:description",
        content:
          "Projeto, instalação e inspeção de linha de vida em Porto Alegre e Região Metropolitana. Soluções NR-35 com ART, segurança e conformidade técnica.",
      },
      { property: "og:url", content: "/linha-de-vida-porto-alegre" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/linha-de-vida-porto-alegre" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Engenhar+ Soluções",
          description:
            "Projeto, instalação e inspeção de linha de vida em Porto Alegre e Região Metropolitana.",
          areaServed: [
            "Porto Alegre",
            "Canoas",
            "Gravataí",
            "Cachoeirinha",
            "Esteio",
            "Sapucaia do Sul",
            "São Leopoldo",
            "Novo Hamburgo",
            "Região Metropolitana de Porto Alegre",
            "Rio Grande do Sul",
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Porto Alegre",
            addressRegion: "RS",
            addressCountry: "BR",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Vocês atendem apenas Porto Alegre?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Não. Atendemos toda a Região Metropolitana e demais cidades do Rio Grande do Sul.",
              },
            },
            {
              "@type": "Question",
              name: "Vocês realizam visita técnica?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sim. Realizamos visitas técnicas para análise da estrutura e definição da melhor solução.",
              },
            },
            {
              "@type": "Question",
              name: "Vocês fazem projeto, instalação e inspeção?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sim. Oferecemos uma solução completa para sistemas de proteção contra quedas.",
              },
            },
            {
              "@type": "Question",
              name: "Os projetos atendem à NR-35?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Sim. Todos os projetos seguem os requisitos técnicos aplicáveis para trabalho em altura.",
              },
            },
            {
              "@type": "Question",
              name: "Vocês vendem equipamentos?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Não. Atuamos exclusivamente com projetos, inspeção e instalação.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: PoaPage,
});

function PoaPage() {
  return (
    <ContactDialogProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <PoaHero />
          <PoaRegionalCoverage />
          <PoaTypes />
          <PoaServices />
          <PoaProjectInstallInspect />
          <PoaHowWeWork />
          <PoaProjectPhase />
          <PoaInstallation />
          <PoaProjectVideos />
          <PoaInspections />
          <PoaInspectionVideos />
          <PoaSpecial />
          <PoaNR35 />
          <PoaFAQ />
          <PoaContactForm />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </ContactDialogProvider>
  );
}

/* 1. HERO */
function PoaHero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-28"
    >
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/95 via-primary/85 to-primary/70" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="inline-block rounded-full border border-primary-foreground/30 bg-primary-foreground/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary-foreground/90">
            Engenhar+ Soluções • Porto Alegre / RS
          </p>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground">
            Linha de Vida em Porto Alegre
          </h1>
          <p className="mt-3 text-xl sm:text-2xl font-semibold text-accent">
            Atendimento em Todo o RS
          </p>
          <p className="mt-5 text-lg text-primary-foreground/85 max-w-2xl">
            Soluções completas em linha de vida na capital e região metropolitana. Solicite orçamento.
          </p>

          <ul className="mt-8 space-y-3">
            {[
              "Projeto com ART",
              "Instalação especializada NR-35",
              "Inspeção e documentação técnica",
              "Atendimento em Porto Alegre e Região Metropolitana",
            ].map((b) => (
              <li key={b} className="flex items-start gap-3 text-primary-foreground/95">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold">
                  ✓
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <CtaButton size="lg" />
          </div>

          <p className="mt-6 text-sm text-primary-foreground/80 max-w-2xl">
            Atuamos exclusivamente com projetos, inspeção e instalação. Não comercializamos peças, EPIs ou equipamentos avulsos.
          </p>
        </div>
      </div>
    </section>
  );
}

/* 2. ATENDIMENTO POA E REGIÃO METROPOLITANA */
function PoaRegionalCoverage() {
  const cards = [
    {
      title: "Atendimento Local",
      text: "Equipe preparada para atendimento técnico em Porto Alegre e região.",
    },
    {
      title: "Engenharia Especializada",
      text: "Projetos desenvolvidos conforme NR-35 e demais normas aplicáveis.",
    },
    {
      title: "Solução Completa",
      text: "Projeto, instalação, inspeção e documentação técnica.",
    },
  ];
  return (
    <Section tone="white">
      <SectionTitle
        eyebrow="Porto Alegre e Região Metropolitana"
        title="Atendimento Especializado em Porto Alegre e Região Metropolitana"
      />
      <div className="mx-auto mt-8 max-w-4xl text-center space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
        <p>
          A Engenhar+ Soluções atende empresas de <strong>Porto Alegre</strong>, <strong>Canoas</strong>,{" "}
          <strong>Gravataí</strong>, <strong>Cachoeirinha</strong>, <strong>Esteio</strong>,{" "}
          <strong>Sapucaia do Sul</strong>, <strong>São Leopoldo</strong>, <strong>Novo Hamburgo</strong> e demais cidades do Rio Grande do Sul.
        </p>
        <p>
          Desenvolvemos projetos, inspeções e instalações de linha de vida em Porto Alegre para indústrias, centros logísticos, condomínios, empresas de manutenção e construção civil.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {cards.map((c, i) => (
          <article
            key={c.title}
            className="group relative rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
              0{i + 1}
            </div>
            <h3 className="text-lg font-semibold text-primary">{c.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.text}</p>
            <div className="mt-4 h-1 w-10 rounded bg-accent group-hover:w-20 transition-all" />
          </article>
        ))}
      </div>
    </Section>
  );
}

/* 3. TIPOS DE LINHA DE VIDA */
function PoaTypes() {
  const items = [
    {
      title: "Linha de Vida Flexível Horizontal",
      text: "Sistema com cabo de aço aplicado em telhados e estruturas horizontais. Permite mobilidade contínua com segurança durante deslocamentos em altura — ideal para manutenções e inspeções frequentes em Porto Alegre e região.",
    },
    {
      title: "Linha de Vida Horizontal (Overhead)",
      text: "Instalada acima da cabeça, em cabo de aço ou trilho rígido. Indicada para operações industriais como carga, descarga e manutenção, com uso de trava-quedas retrátil.",
    },
    {
      title: "Linha de Vida Vertical",
      text: "Cabo de aço vertical e trava-quedas deslizante, aplicado em escadas tipo marinheiro. Garante segurança no acesso vertical e deslocamento contínuo.",
    },
    {
      title: "Pontos de Ancoragem",
      text: "Dispositivos fixados na estrutura com alta resistência, projetados para suportar cargas em caso de queda. Essenciais para garantir segurança em diversas aplicações.",
    },
  ];
  return (
    <Section id="projeto" tone="gray">
      <SectionTitle
        eyebrow="Tipos de Linha de Vida"
        title="Tipos de Linha de Vida em Porto Alegre"
      />
      <p className="mx-auto mt-8 max-w-3xl text-center text-base sm:text-lg text-muted-foreground leading-relaxed">
        Somos especialistas em linha de vida para empresas de Porto Alegre e Região Metropolitana, oferecendo soluções personalizadas para diferentes estruturas e operações em altura.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <article
            key={it.title}
            className="group relative rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
              0{i + 1}
            </div>
            <h3 className="text-lg font-semibold text-primary">{it.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.text}</p>
            <div className="mt-4 h-1 w-10 rounded bg-accent group-hover:w-20 transition-all" />
          </article>
        ))}
      </div>
      <div className="mt-12 text-center">
        <CtaButton size="lg" />
      </div>
    </Section>
  );
}

/* 4. SOLUÇÃO COMPLETA (Services) */
function PoaServices() {
  const services = [
    "Projeto técnico 2D e 3D",
    "Instalação completa dos sistemas",
    "Inspeções iniciais e periódicas",
    "Relatórios técnicos e documentação",
    "Avaliação de risco no local",
    "Consultoria especializada",
    "Manual de montagem",
    "Plano de manutenção",
    "Análise do melhor sistema",
    "Memorial de cálculo",
    "Memorial descritivo",
  ];
  return (
    <Section tone="white">
      <SectionTitle
        eyebrow="Serviços"
        title="Solução completa do projeto à execução"
        subtitle="Oferecemos um conjunto completo de serviços técnicos para garantir segurança, conformidade e eficiência."
      />
      <p className="mx-auto mt-6 max-w-3xl text-center text-base sm:text-lg text-muted-foreground leading-relaxed">
        Atendemos empresas de diversos segmentos em Porto Alegre e região, garantindo segurança operacional e conformidade normativa.
      </p>
      <ul className="mt-12 mx-auto grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
        {services.map((s) => (
          <li
            key={s}
            className="flex items-start gap-4 rounded-xl bg-card p-6 shadow-md border border-border hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground text-base font-bold">
              ✓
            </span>
            <span className="text-base sm:text-lg font-semibold text-foreground leading-snug">{s}</span>
          </li>
        ))}
      </ul>
      <div className="mt-12 text-center">
        <CtaButton size="lg" />
      </div>
    </Section>
  );
}

/* 5. PROJETO, INSTALAÇÃO E INSPEÇÃO */
function PoaProjectInstallInspect() {
  const cards = [
    {
      title: "Projeto Personalizado",
      text: "Soluções desenvolvidas conforme a estrutura e necessidade operacional de cada empresa em Porto Alegre.",
    },
    {
      title: "Instalação Especializada",
      text: "Execução realizada por equipe capacitada e habilitada, atuando em toda a Região Metropolitana.",
    },
    {
      title: "Inspeção Técnica",
      text: "Avaliação periódica para garantir segurança e conformidade dos sistemas de linha de vida.",
    },
  ];
  return (
    <Section tone="gray">
      <SectionTitle
        eyebrow="Projeto • Instalação • Inspeção"
        title="Projeto, Instalação e Inspeção de Linha de Vida em Porto Alegre"
        subtitle="Solução completa de proteção contra quedas para empresas da capital gaúcha e Região Metropolitana."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {cards.map((c, i) => (
          <article
            key={c.title}
            className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-md hover:shadow-xl transition-shadow"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground text-lg font-bold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-5 text-xl font-semibold text-primary leading-snug">{c.title}</h3>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">{c.text}</p>
          </article>
        ))}
      </div>
      <div className="mt-12 text-center">
        <CtaButton size="lg" />
      </div>
    </Section>
  );
}

/* 6. COMO A ENGENHAR+ TRABALHA */
function PoaHowWeWork() {
  const pillars = [
    { title: "Excelência garantida", text: "Serviços com alto padrão técnico e certificações." },
    { title: "Soluções que transformam", text: "Projetos personalizados e eficazes." },
    { title: "Atendimento que conecta", text: "Relacionamento próximo, transparente e confiável." },
  ];
  return (
    <Section tone="white">
      <SectionTitle
        eyebrow="Como a Engenhar+ trabalha"
        title="Como desenvolvemos cada projeto"
        subtitle="Cada projeto é único. Analisamos o ambiente em detalhes, ouvimos todas as partes envolvidas e desenvolvemos soluções técnicas alinhadas à realidade do cliente."
      />
      <p className="mx-auto mt-6 max-w-3xl text-center text-base sm:text-lg text-muted-foreground leading-relaxed">
        Nosso processo começa com uma visita técnica em Porto Alegre ou região para entender a realidade da empresa e desenvolver a melhor solução para trabalho em altura.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {pillars.map((p, i) => (
          <div
            key={p.title}
            className="rounded-xl bg-primary p-8 text-primary-foreground shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="text-5xl font-bold text-accent">0{i + 1}</div>
            <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-primary-foreground/80">{p.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* 7. FASE DE PROJETO */
function PoaProjectPhase() {
  const steps = [
    { title: "Análise de risco detalhada", text: "Avaliamos o local, identificamos riscos e definimos as melhores soluções técnicas." },
    { title: "Croqui inicial do sistema", text: "Esboço com o posicionamento dos pontos e linhas para validação prévia." },
    { title: "Aprovação do cliente", text: "Alinhamento técnico e comercial antes de avançar para o executivo." },
    { title: "Projeto executivo", text: "Detalhamento completo com memorial, ART e desenhos 2D/3D." },
    { title: "Entrega do databook técnico", text: "Documentação completa para uso, inspeção e manutenção do sistema." },
  ];
  return (
    <Section tone="gray">
      <SectionTitle
        eyebrow="Fase de projeto"
        title="Etapas do projeto de linha de vida em Porto Alegre"
        subtitle="Antes da execução, estruturamos todo o projeto para garantir precisão, segurança e eficiência."
      />
      <p className="mx-auto mt-6 max-w-3xl text-center text-base sm:text-lg text-muted-foreground leading-relaxed">
        Cada projeto é elaborado considerando as características específicas da estrutura e os riscos envolvidos na atividade.
      </p>
      <ol className="relative mt-14 mx-auto max-w-3xl">
        <span aria-hidden className="absolute left-5 top-2 bottom-2 w-px bg-accent/40 sm:left-1/2 sm:-translate-x-1/2" />
        {steps.map((s, i) => (
          <li key={s.title} className="relative pl-16 pb-10 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-10 last:pb-0">
            <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold shadow-md sm:left-1/2 sm:-translate-x-1/2">
              {i + 1}
            </span>
            <div className={`${i % 2 === 0 ? "sm:col-start-1 sm:text-right sm:pr-12" : "sm:col-start-2 sm:pl-12"}`}>
              <h3 className="text-lg font-semibold text-primary">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/* 8. IMPLEMENTAÇÃO E INSTALAÇÃO */
function PoaInstallation() {
  const slides = [install1, install2, install3, install4];
  const responsibilities = [
    { title: "Expertise técnica", text: "Equipe qualificada e preparada para projetos complexos." },
    { title: "Agilidade na instalação", text: "Execução organizada, sem atrasos." },
    { title: "Redução de impactos", text: "Minimizamos interferências na sua operação." },
  ];
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <Section tone="white">
      <SectionTitle
        eyebrow="Implementação / Instalação"
        title="Instalação de Linha de Vida em Porto Alegre e RS"
        subtitle="Realizamos a instalação com alto padrão técnico, garantindo segurança, rapidez e mínimo impacto na operação do cliente."
      />
      <p className="mx-auto mt-6 max-w-3xl text-center text-base sm:text-lg text-muted-foreground leading-relaxed">
        Nossa equipe atua em Porto Alegre e em todo o Rio Grande do Sul executando instalações seguras, eficientes e em conformidade com as exigências técnicas.
      </p>
      <div className="mt-12 grid gap-10 lg:grid-cols-2 items-center">
        <div className="relative overflow-hidden rounded-2xl shadow-xl border border-border bg-card">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${i * 100}%)` }}
          >
            {slides.map((s, idx) => (
              <img key={idx} src={s} alt={`Instalação de linha de vida em Porto Alegre ${idx + 1}`} className="w-full shrink-0 aspect-[4/3] object-cover" />
            ))}
          </div>
          <button
            aria-label="Anterior"
            onClick={() => setI((v) => (v - 1 + slides.length) % slides.length)}
            className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-primary/80 text-primary-foreground hover:bg-primary"
          >
            ‹
          </button>
          <button
            aria-label="Próximo"
            onClick={() => setI((v) => (v + 1) % slides.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-primary/80 text-primary-foreground hover:bg-primary"
          >
            ›
          </button>
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Slide ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-2 rounded-full transition-all ${i === idx ? "w-6 bg-accent" : "w-2 bg-primary-foreground/60"}`}
              />
            ))}
          </div>
        </div>
        <ul className="space-y-5">
          {responsibilities.map((r) => (
            <li key={r.title} className="rounded-xl border-l-4 border-accent bg-secondary p-5">
              <h3 className="font-semibold text-primary">{r.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{r.text}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-12 text-center">
        <CtaButton size="lg" />
      </div>
    </Section>
  );
}

/* 9. PROJETOS REALIZADOS */
function YT({ id, title }: { id: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-md">
      <div className="aspect-video">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="p-4">
        <p className="font-semibold text-primary">{title}</p>
      </div>
    </div>
  );
}

function PoaProjectVideos() {
  return (
    <Section tone="gray">
      <SectionTitle
        eyebrow="Projetos Realizados"
        title="Projetos de Linha de Vida Executados pela Engenhar+"
        subtitle="Conheça alguns projetos desenvolvidos por nossa equipe em diferentes segmentos e aplicações em Porto Alegre e região."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <YT id="FM_8UOq_nvE" title="Projeto Overhead" />
        <YT id="0Wn0sRStvms" title="Projeto em Telhado" />
      </div>
    </Section>
  );
}

/* 10. INSPEÇÕES TÉCNICAS ESPECIALIZADAS */
function PoaInspections() {
  const cards = [
    {
      title: "Inspeções técnicas especializadas",
      text: "Reconhecemos a importância crucial desses sistemas na proteção de trabalhadores em altura. Nossa equipe qualificada utiliza práticas de inspeção rigorosas em empresas de Porto Alegre e Região Metropolitana.",
    },
    {
      title: "Atendimento às normas vigentes",
      text: "Seguimos rigorosamente as normas e regulamentos em vigor, assegurando que os sistemas de proteção contra quedas (linhas de vida) estejam em total conformidade com as exigências da NR-35.",
    },
    {
      title: "Compromisso com a segurança",
      text: "Executamos inspeções técnicas detalhadas para garantir a segurança e a conformidade em linhas de vida e pontos de ancoragem em Porto Alegre, Canoas, Gravataí, São Leopoldo, Novo Hamburgo e demais cidades do RS.",
    },
  ];
  return (
    <Section tone="white">
      <SectionTitle
        eyebrow="Inspeção de Linha de Vida em Porto Alegre"
        title="Inspeções Técnicas Especializadas"
        subtitle="Garantimos que os sistemas estejam seguros, funcionando corretamente e em conformidade com as normas vigentes."
      />
      <p className="mx-auto mt-6 max-w-3xl text-center text-base sm:text-lg text-muted-foreground leading-relaxed">
        Realizamos inspeções periódicas em sistemas de linha de vida e pontos de ancoragem para empresas de Porto Alegre e Região Metropolitana.
      </p>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {cards.map((c, i) => (
          <article
            key={c.title}
            className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-md hover:shadow-xl transition-shadow"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground text-lg font-bold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-5 text-xl font-semibold text-primary leading-snug">{c.title}</h3>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">{c.text}</p>
          </article>
        ))}
      </div>
      <div className="mt-12 text-center">
        <CtaButton size="lg" />
      </div>
    </Section>
  );
}

/* 11. CASOS DE INSPEÇÕES */
function PoaInspectionVideos() {
  return (
    <Section tone="gray">
      <SectionTitle
        eyebrow="Casos de Inspeção"
        title="Casos de Inspeções Realizadas"
        subtitle="As inspeções permitem identificar falhas, desgastes e não conformidades antes que elas se tornem riscos para a operação."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <YT id="S0WAqhzKOAY" title="Inspeção em Coberturas" />
        <YT id="0ZdujswYjzA" title="Inspeção em Escadas" />
      </div>
      <p className="mt-8 text-center text-muted-foreground">
        Após a inspeção, entregamos toda a documentação técnica exigida para empresas de Porto Alegre e Região Metropolitana, garantindo conformidade total.
      </p>
    </Section>
  );
}

/* 12. SOLUÇÕES ESPECIAIS */
function PoaSpecial() {
  const diff = ["Projetos personalizados", "Foco em custo-benefício", "Soluções técnicas completas"];
  const segments = [
    "Indústria",
    "Construção Civil",
    "Agronegócio",
    "Centros logísticos",
    "Condomínios",
    "Empresas com NR-35",
  ];
  return (
    <Section tone="primary">
      <SectionTitle
        eyebrow="Soluções especiais"
        title="Projetos para diferentes segmentos em Porto Alegre"
        subtitle="Desenvolvemos soluções adaptadas para diferentes setores, sempre considerando custo, eficiência e segurança."
        light
      />
      <p className="mx-auto mt-6 max-w-3xl text-center text-base sm:text-lg text-primary-foreground/85 leading-relaxed">
        Atendemos empresas de diversos segmentos da capital gaúcha e região metropolitana, oferecendo soluções personalizadas para cada necessidade.
      </p>
      <div className="mt-12 grid gap-8 lg:grid-cols-5 lg:items-start">
        <div className="lg:col-span-2 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-8">
          <h3 className="text-lg font-semibold text-accent">Diferenciais</h3>
          <ul className="mt-4 space-y-3">
            {diff.map((d) => (
              <li key={d} className="flex items-start gap-3 text-primary-foreground/90">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h3 className="text-lg font-semibold text-accent">Segmentos atendidos em Porto Alegre e RS</h3>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {segments.map((s) => (
              <div
                key={s}
                className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-3 text-sm font-medium text-primary-foreground"
              >
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* 13. NR-35 */
function PoaNR35() {
  return (
    <Section tone="white">
      <SectionTitle
        eyebrow="NR-35"
        title="Sua Empresa Está Adequada à NR-35?"
        subtitle="Toda atividade acima de 2 metros exige sistema de proteção contra quedas."
      />
      <p className="mx-auto mt-6 max-w-3xl text-center text-base sm:text-lg text-muted-foreground leading-relaxed">
        Empresas de Porto Alegre e Região Metropolitana que realizam atividades em altura precisam garantir conformidade com as exigências da NR-35 para evitar riscos, multas e interdições.
      </p>
      <div className="mt-12 mx-auto max-w-4xl rounded-2xl border-l-4 border-accent bg-secondary p-10 shadow-md">
        <h3 className="text-2xl font-semibold text-primary">Principais exigências</h3>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            "Sistema adequado ao risco",
            "Projeto por profissional habilitado",
            "Resistência certificada",
            "Inspeções periódicas obrigatórias",
          ].map((e) => (
            <li key={e} className="flex gap-3 text-base text-foreground">
              <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold">
                ✓
              </span>
              {e}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-base text-muted-foreground">
          A falta de adequação pode gerar multas, interdições e riscos graves à sua operação em Porto Alegre e demais cidades do RS.
        </p>
        <div className="mt-8 text-center">
          <CtaButton size="lg" />
        </div>
      </div>
    </Section>
  );
}

/* 14. FAQ */
function PoaFAQ() {
  const faqs = [
    {
      q: "Vocês atendem apenas Porto Alegre?",
      a: "Não. Atendemos toda a Região Metropolitana e demais cidades do Rio Grande do Sul, incluindo Canoas, Gravataí, Cachoeirinha, Esteio, Sapucaia do Sul, São Leopoldo e Novo Hamburgo.",
    },
    {
      q: "Vocês realizam visita técnica?",
      a: "Sim. Realizamos visitas técnicas para análise da estrutura e definição da melhor solução.",
    },
    {
      q: "Vocês fazem projeto, instalação e inspeção?",
      a: "Sim. Oferecemos uma solução completa para sistemas de proteção contra quedas.",
    },
    {
      q: "Os projetos atendem à NR-35?",
      a: "Sim. Todos os projetos seguem os requisitos técnicos aplicáveis para trabalho em altura.",
    },
    {
      q: "Vocês vendem equipamentos?",
      a: "Não. Atuamos exclusivamente com projetos, inspeção e instalação.",
    },
  ];
  return (
    <Section tone="gray">
      <SectionTitle
        eyebrow="FAQ"
        title="Perguntas Frequentes sobre Linha de Vida em Porto Alegre"
      />
      <div className="mx-auto mt-12 max-w-3xl space-y-4">
        {faqs.map((f) => (
          <details
            key={f.q}
            className="group rounded-xl border border-border bg-card p-6 shadow-sm open:shadow-md transition-shadow"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base sm:text-lg font-semibold text-primary">
              <span>{f.q}</span>
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground text-sm font-bold transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

/* 15. FORMULÁRIO */
function PoaContactForm() {
  return (
    <Section id="contato" tone="white">
      <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-card p-10 sm:p-14 text-center shadow-xl">
        <SectionTitle
          eyebrow="Formulário"
          title="Solicite um Orçamento para Linha de Vida em Porto Alegre"
          subtitle="Nossa equipe está pronta para atender sua empresa e desenvolver a melhor solução para trabalho em altura."
        />
        <div className="mt-10">
          <CtaButton size="lg">Quero solicitar um orçamento</CtaButton>
        </div>
      </div>
    </Section>
  );
}
