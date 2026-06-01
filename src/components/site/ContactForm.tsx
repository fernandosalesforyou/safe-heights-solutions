import { Section, SectionTitle } from "./Section";
import { CtaButton } from "./CtaButton";

export function ContactForm() {
  return (
    <Section id="contato" tone="gray">
      <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-card p-10 sm:p-14 text-center shadow-xl">
        <SectionTitle
          eyebrow="Orçamento em Porto Alegre"
          title="Fale com um especialista em linha de vida em Porto Alegre"
          subtitle="Receba um diagnóstico técnico para sua empresa em Porto Alegre ou Região Metropolitana — atendimento rápido e local."
        />
        <div className="mt-10">
          <CtaButton size="lg">Quero solicitar um orçamento</CtaButton>
        </div>
      </div>
    </Section>
  );
}