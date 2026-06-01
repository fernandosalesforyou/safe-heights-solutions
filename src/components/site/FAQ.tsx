import { Section, SectionTitle } from "./Section";

const faqs = [
  {
    q: "Vocês atendem apenas Porto Alegre?",
    a: "Não. Atendemos toda a Região Metropolitana e demais cidades do Rio Grande do Sul.",
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

export function FAQ() {
  return (
    <Section tone="white">
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
            <summary className="cursor-pointer list-none flex items-start justify-between gap-4 font-semibold text-primary">
              <span>{f.q}</span>
              <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
