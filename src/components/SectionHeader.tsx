import Reveal from './Reveal'

type SectionHeaderProps = {
  eyebrow: string
  title: string
  /** Subtítulo opcional (parágrafo de apoio) */
  subtitle?: string
  /** Alinhamento do bloco */
  align?: 'left' | 'center'
}

/** Cabeçalho padrão de seção: eyebrow em mono + título em Space Grotesk. */
export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
}: SectionHeaderProps) {
  const isCenter = align === 'center'
  return (
    <Reveal
      className={`max-w-2xl ${isCenter ? 'mx-auto text-center' : ''}`}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-muted">{subtitle}</p>
      )}
    </Reveal>
  )
}
