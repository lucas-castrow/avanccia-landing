import SectionHeader from './SectionHeader'
import Reveal from './Reveal'

// Quatro passos numerados em linha do tempo
const STEPS = [
  {
    n: '01',
    title: 'Diagnóstico',
    text: 'Entendemos seu negócio e identificamos onde a IA gera mais resultado.',
  },
  {
    n: '02',
    title: 'Roadmap',
    text: 'Priorizamos as oportunidades e definimos um plano claro com metas.',
  },
  {
    n: '03',
    title: 'Implementação',
    text: 'Construímos e colocamos as soluções para rodar em produção.',
  },
  {
    n: '04',
    title: 'Acompanhamento',
    text: 'Medimos resultados, ajustamos e evoluímos junto com a sua operação.',
  },
]

/** Como funciona: 4 passos numerados em linha do tempo. */
export default function HowItWorks() {
  return (
    <section id="como-funciona" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Como funciona"
          title="Um caminho simples, do diagnóstico à operação."
        />

        <ol className="relative mt-16 grid gap-y-12 md:grid-cols-4 md:gap-x-6">
          {/* Linha do tempo horizontal (desktop) */}
          <div
            className="absolute left-0 right-0 top-5 hidden h-px bg-white/[0.08] md:block"
            aria-hidden="true"
          />

          {STEPS.map((step, i) => (
            <Reveal as="li" key={step.n} delay={i * 0.1} className="relative">
              {/* Marcador numerado */}
              <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-base font-mono text-sm text-ink">
                {step.n}
              </div>
              <h3 className="mt-5 font-display text-lg font-medium">
                {step.title}
              </h3>
              <p className="mt-2 max-w-xs leading-relaxed text-muted">
                {step.text}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
