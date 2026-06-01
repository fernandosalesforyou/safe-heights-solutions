import { Section, SectionTitle } from "./Section";

const cards = [
  { title: "Atendimento Local", text: "Equipe preparada para atendimento técnico em Porto Alegre e região." },
  { title: "Engenharia Especializada", text: "Projetos desenvolvidos conforme NR-35 e demais normas aplicáveis." },
  { title: "Solução Completa", text: "Projeto, instalação, inspeção e documentação técnica." },
];

export function RegionalCoverage() {
  return (
    <Section tone="gray">
      <SectionTitle
        eyebrow="Linha de Vida em Porto Alegre e Região Metropolitana"
        title="Atendimento Especializado em Porto Alegre e Região Metropolitana"
      />
      <div className="mx-auto mt-8 max-w-3xl text-center space-y-4 text-base text-muted-foreground">
        <p>
          A Engenhar+ Soluções atende empresas de Porto Alegre, Canoas, Gravataí, Cachoeirinha, Esteio, Sapucaia do Sul, São Leopoldo, Novo Hamburgo e demais cidades do Rio Grande do Sul.
        </p>
        <p>
          Desenvolvemos projetos, inspeções e instalações de linha de vida para indústrias, centros logísticos, condomínios, empresas de manutenção e construção civil.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {cards.map((c, i) => (
          <article
            key={c.title}
            className="rounded-2xl border border-border bg-card p-8 shadow-md hover:shadow-xl transition-shadow"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground text-lg font-bold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-5 text-xl font-semibold text-primary">{c.title}</h3>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">{c.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

const piiCards = [
  { title: "Projeto Personalizado", text: "Soluções desenvolvidas conforme a estrutura e necessidade operacional." },
  { title: "Instalação Especializada", text: "Execução realizada por equipe capacitada e habilitada." },
  { title: "Inspeção Técnica", text: "Avaliação periódica para garantir segurança e conformidade." },
];

export function ProjectInstallInspect() {
  return (
    <Section tone="white">
      <SectionTitle
        eyebrow="Solução completa"
        title="Projeto, Instalação e Inspeção de Linha de Vida em Porto Alegre"
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {piiCards.map((c, i) => (
          <article
            key={c.title}
            className="rounded-2xl border border-border bg-card p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
              0{i + 1}
            </div>
            <h3 className="text-xl font-semibold text-primary">{c.title}</h3>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">{c.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
