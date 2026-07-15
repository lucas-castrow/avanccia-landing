import SectionHeader from './SectionHeader'
import Reveal from './Reveal'
import { useCountUp } from '../hooks/useCountUp'

type Stat = {
  /** Valor numérico alvo do contador */
  value: number
  /** Prefixo antes do número (ex.: "−") */
  prefix?: string
  /** Sufixo depois do número (ex.: "h/mês", "%") */
  suffix: string
  label: string
}

// NÚMEROS ILUSTRATIVOS — placeholders para substituir por dados reais depois.
const STATS: Stat[] = [
  { value: 40, suffix: 'h/mês', label: 'economizadas em tarefas repetitivas' },
  { value: 30, prefix: '−', suffix: '%', label: 'em paradas não planejadas de máquina' },
  { value: 24, suffix: '/7', label: 'de operação sem pausas' },
  { value: 70, prefix: '−', suffix: '%', label: 'no tempo de resposta ao cliente' },
]

/** Card de estatística com contador animado ao entrar na viewport. */
function StatCard({ stat }: { stat: Stat }) {
  const [ref, value] = useCountUp(stat.value)
  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className="card text-center hover:border-white/20"
    >
      <p className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        <span className="text-accent-gradient">
          {stat.prefix}
          {value}
          {stat.suffix}
        </span>
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{stat.label}</p>
    </article>
  )
}

/** Resultados: números grandes com contador animado, marcados como ilustrativos. */
export default function Results() {
  return (
    <section className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Resultados"
          title="Impacto que dá para medir."
          subtitle="As capacidades e os exemplos acima viram número no dia a dia da operação."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.06}>
              <StatCard stat={stat} />
            </Reveal>
          ))}
        </div>

        {/* Aviso: números são ilustrativos e serão substituídos por dados reais */}
        {/* <Reveal className="mt-8">
          <p className="text-center font-mono text-xs uppercase tracking-wider text-muted/60">
            * Números ilustrativos (placeholder). Serão substituídos por resultados reais.
          </p>
        </Reveal> */}
      </div>
    </section>
  )
}
