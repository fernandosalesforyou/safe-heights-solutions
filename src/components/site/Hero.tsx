import heroBg from "@/assets/hero-bg.jpg";
import { CtaButton } from "./CtaButton";

export function Hero() {
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
          <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-accent">
            Atendimento em Todo o RS
          </h2>
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
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold">✓</span>
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

          <p className="mt-6 text-sm text-primary-foreground/70">
            Sede em Porto Alegre • Atendimento em toda Região Metropolitana e RS • Projetos personalizados
          </p>
        </div>
      </div>
    </section>
  );
}
