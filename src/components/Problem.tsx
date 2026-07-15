import { Clock, AlertTriangle, FileWarning } from 'lucide-react'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'

// Três dores curtas e reconhecíveis pelo público (empresas que ainda não usam IA)
const PAINS = [
  {
    icon: Clock,
    title: 'Tarefas repetitivas consomem o dia',
    text: 'Copiar dados, responder as mesmas perguntas, montar relatórios à mão. Horas que poderiam virar trabalho estratégico.',
  },
  {
    icon: AlertTriangle,
    title: 'Problemas que aparecem tarde demais',
    text: 'Falha de máquina, ruptura de estoque, cliente prestes a sair. Quando a empresa percebe, o prejuízo já aconteceu.',
  },
  {
    icon: FileWarning,
    title: 'Conhecimento espalhado e perdido',
    text: 'Informação em planilhas, PDFs e conversas. Ninguém encontra o que precisa na hora certa.',
  },
]

/** Seção Problema: espelha as dores antes de apresentar a solução. */
export default function Problem() {
  return (
    <section className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="O problema"
          title="Sua equipe perde horas no que a IA já faz sozinha."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {PAINS.map((pain, i) => (
            <Reveal key={pain.title} delay={i * 0.08}>
              <article className="card h-full hover:border-white/20">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 text-ink">
                  <pain.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-lg font-medium">
                  {pain.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted">{pain.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
