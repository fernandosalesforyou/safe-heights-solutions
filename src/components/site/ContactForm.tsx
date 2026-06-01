import { Section, SectionTitle } from "./Section";
import { CtaButton } from "./CtaButton";

export function ContactForm() {
  return (
    <Section id="contato" tone="gray">
      <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-card p-10 sm:p-14 text-center shadow-xl">
        <SectionTitle
          eyebrow="Orçamento em Porto Alegre"
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