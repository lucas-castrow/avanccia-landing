import {
  Compass,
  Camera,
  LineChart,
  Workflow,
  Bot,
  GraduationCap,
  type LucideIcon,
} from 'lucide-react'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'

type Service = {
  icon: LucideIcon
  title: string
  benefit: string
  /** Classes de grid para o layout bento (tamanhos variados) */
  span: string
}

// Serviços cobrindo toda a gama de IA (não só agentes): estratégia, visão,
// previsão, automação, agentes/copilotos e capacitação sob medida.
const SERVICES: Service[] = [
  {
    icon: Compass,
    title: 'Diagnóstico & estratégia de IA',
    benefit:
      'Mapeamos onde a IA gera mais retorno no seu negócio e desenhamos um plano claro de adoção.',
    span: 'lg:col-span-2',
  },
  {
    icon: Camera,
    title: 'Visão computacional',
    benefit:
      'Inspeção de qualidade, contagem e monitoramento a partir de imagem e vídeo, em tempo real.',
    span: 'lg:col-span-1',
  },
  {
    icon: LineChart,
    title: 'Previsão & análise de dados',
    benefit:
      'Antecipe demanda, falhas e cancelamentos usando os dados que a sua empresa já tem.',
    span: 'lg:col-span-1',
  },
  {
    icon: Workflow,
    title: 'Automação de processos',
    benefit:
      'Conectamos suas ferramentas e eliminamos o trabalho manual repetitivo entre elas.',
    span: 'lg:col-span-2',
  },
  {
    icon: Bot,
    title: 'Agentes & copilotos',
    benefit:
      'Assistentes que atendem, executam tarefas e respondem com base no conhecimento da empresa.',
    span: 'lg:col-span-1',
  },
  {
    icon: GraduationCap,
    title: 'Treinamento & projetos sob demanda',
    benefit:
      'Capacitamos sua equipe e desenvolvemos soluções de IA sob medida para os seus desafios.',
    span: 'lg:col-span-2',
  },
]

/** Serviços em grid estilo bento (blocos de tamanhos variados). */
export default function Services() {
  return (
    <section id="servicos" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Serviços"
          title="Do primeiro diagnóstico à IA rodando em produção."
          subtitle="Cuidamos de cada etapa: estratégia, implementação e operação. Você não precisa virar especialista em tecnologia para ter IA trabalhando no seu negócio."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.title}
              delay={(i % 3) * 0.06}
              className={service.span}
            >
              <article className="card group flex h-full flex-col hover:border-white/20 hover:bg-white/[0.04]">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 text-ink transition-colors group-hover:border-white/25">
                  <service.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-xl font-medium">
                  {service.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted">
                  {service.benefit}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
