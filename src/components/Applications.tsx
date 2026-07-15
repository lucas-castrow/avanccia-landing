import type { CSSProperties } from 'react'
import {
  Camera,
  Wrench,
  Workflow,
  PhoneCall,
  FileSearch,
  type LucideIcon,
} from 'lucide-react'
import Reveal from './Reveal'

const ACCENT_GRADIENT = 'linear-gradient(135deg, #7B61FF, #22C7E0)'

const accentTextStyle: CSSProperties = {
  backgroundImage: ACCENT_GRADIENT,
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
}

type Application = {
  icon: LucideIcon
  title: string
  context: string
  action: string
  result: string
}

const APPLICATIONS: Application[] = [
  {
    icon: Camera,
    title: 'Inspeção de qualidade por câmera',
    context: 'Defeitos passam batido na linha de produção.',
    action: 'A câmera analisa cada peça e aponta o defeito na hora.',
    result: 'Menos retrabalho e devolução.',
  },
  {
    icon: Wrench,
    title: 'Manutenção preditiva',
    context: 'A máquina para de repente e trava a produção inteira.',
    action: 'Identifica o padrão que antecede uma falha, antes dela acontecer.',
    result: 'Manutenção agendada, não emergência.',
  },
  {
    icon: Workflow,
    title: 'Processo de ponta a ponta',
    context: 'Um processo passa por várias mãos e sistemas e trava no caminho.',
    action: 'Vários agentes cuidam de cada etapa e passam adiante sozinhos, do pedido à nota fiscal.',
    result: 'O fluxo anda sem gargalo humano.',
  },
  {
    icon: PhoneCall,
    title: 'Agente SDR 24/7',
    context: 'Leads chegam a qualquer hora e demoram a ser atendidos.',
    action: 'Qualifica cada lead, responde dúvidas e agenda reuniões.',
    result: 'Nenhuma oportunidade esfria.',
  },
  {
    icon: FileSearch,
    title: 'Copiloto de documentos',
    context: 'Informação espalhada em contratos, manuais e PDFs.',
    action: 'Responde perguntas com base nos documentos da empresa, citando a fonte.',
    result: 'Respostas em segundos, sem caçar arquivo.',
  },
]

function ApplicationCard({ app }: { app: Application }) {
  return (
    <article className="card h-full hover:border-white/20">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 text-ink">
        <app.icon className="h-5 w-5" aria-hidden="true" />
      </div>

      <h3 className="mt-5 font-display text-lg font-medium">{app.title}</h3>

      <dl className="mt-4 space-y-3 text-sm">
        <div>
          <dt className="font-mono text-xs uppercase tracking-wider text-muted/70">
            Contexto
          </dt>
          <dd className="mt-1 text-muted">{app.context}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs uppercase tracking-wider text-muted/70">
            O que a IA faz
          </dt>
          <dd className="mt-1 text-ink/90">{app.action}</dd>
        </div>
        <div>
          <dt className="font-mono text-xs uppercase tracking-wider text-muted/70">
            Resultado
          </dt>
          <dd className="mt-1 font-medium" style={accentTextStyle}>
            {app.result}
          </dd>
        </div>
      </dl>
    </article>
  )
}

export default function Applications() {
  return (
    <section id="aplicacoes" className="px-5 pb-24 sm:px-8 sm:pb-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Aplicações</p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            O que a IA faz na prática.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Exemplos do que a IA resolve, adaptados à realidade do seu negócio.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {APPLICATIONS.map((app, i) => (
            <Reveal key={app.title} delay={(i % 3) * 0.06}>
              <ApplicationCard app={app} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
