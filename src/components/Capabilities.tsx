import type { CSSProperties } from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import Reveal from './Reveal'

/**
 * Seção Capacidades: mostra, em bento, o que a IA resolve na operação.
 * Cada card traz um visual próprio (detecção em vídeo, previsão, pipeline de
 * agentes) cujos elementos internos entram em sequência (stagger) ao aparecer
 * na viewport. Respeita prefers-reduced-motion.
 *
 * Acento próprio desta seção: gradiente #7B61FF → #22C7E0.
 */

// Acento local da seção (roxo → ciano)
const ACCENT_GRADIENT = 'linear-gradient(135deg, #7B61FF, #22C7E0)'
const CYAN = '#22C7E0'
const PURPLE = '#7B61FF'
const RED = '#F4595B'

// ---- Variants de animação (stagger dos elementos internos) ----
const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.16, delayChildren: 0.1 } },
}

const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
}

const slideIn: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
}

// ============================================================
// Card 1 — Visão computacional: frame com caixas de detecção
// ============================================================

type DetectionBox = {
  label: string
  variant: 'ok' | 'defect'
  style: CSSProperties
}

const BOXES: DetectionBox[] = [
  { label: 'item ✓', variant: 'ok', style: { left: '3%', top: '18%', width: '28%', height: '46%' } },
  { label: 'defeito', variant: 'defect', style: { left: '36%', top: '26%', width: '26%', height: '54%' } },
  { label: 'item ✓', variant: 'ok', style: { left: '66%', top: '10%', width: '31%', height: '66%' } },
]

function VisionFrame({ reduce }: { reduce: boolean }) {
  return (
    <motion.div
      className="relative aspect-[2/1] w-full overflow-hidden rounded-xl border border-white/10 bg-[#08080b]"
      variants={staggerContainer}
      initial={reduce ? false : 'hidden'}
      whileInView={reduce ? undefined : 'show'}
      viewport={{ once: true, margin: '-60px' }}
      aria-hidden="true"
    >
      {/* Formas abstratas da "cena" (nada de fotos reais) */}
      <div className="absolute left-[42%] top-[40%] h-20 w-20 rounded-full bg-white/[0.06] blur-[2px]" />
      <div className="absolute left-[8%] top-[30%] h-16 w-16 rounded-lg bg-white/[0.04]" />
      <div className="absolute right-[8%] top-[22%] h-24 w-16 rounded-lg bg-white/[0.04]" />

      {/* Caixas de detecção (bounding boxes) */}
      {BOXES.map((box) => {
        const color = box.variant === 'ok' ? CYAN : RED
        return (
          <motion.div
            key={box.label + box.style.left}
            variants={popIn}
            className="absolute rounded-md border-2"
            style={{ ...box.style, borderColor: color }}
          >
            {/* Rótulo colado na borda superior */}
            <span
              className="absolute -top-[9px] left-0 rounded px-1.5 py-[1px] font-mono text-[10px] font-bold leading-tight"
              style={{
                backgroundColor: color,
                color: box.variant === 'ok' ? '#04141a' : '#ffffff',
              }}
            >
              {box.label}
            </span>
          </motion.div>
        )
      })}

      {/* Contador no canto */}
      <motion.div
        variants={popIn}
        className="absolute bottom-3 right-3 font-mono text-[11px] text-white/70"
      >
        248 itens · 1 defeito
      </motion.div>
    </motion.div>
  )
}

// ============================================================
// Card 2 — Previsão: mini gráfico de linha com trecho previsto
// ============================================================

function PredictionChart({ reduce }: { reduce: boolean }) {
  // Trecho histórico (sólido) e trecho previsto (tracejado, no acento)
  const historical = 'M8 74 L48 66 L88 70 L128 54 L168 60 L200 46'
  const predicted = 'M200 46 L248 24'

  return (
    <div className="relative mt-2 w-full" aria-hidden="true">
      <svg viewBox="0 0 260 92" className="h-24 w-full" fill="none">
        <defs>
          <linearGradient id="capLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={PURPLE} />
            <stop offset="100%" stopColor={CYAN} />
          </linearGradient>
        </defs>

        {/* Linha de base sutil */}
        <line x1="8" y1="84" x2="252" y2="84" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

        {/* Histórico (desenha primeiro) */}
        <motion.path
          d={historical}
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={reduce ? false : { pathLength: 0 }}
          whileInView={reduce ? undefined : { pathLength: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
        />

        {/* Previsto (tracejado, no acento, desenha depois) */}
        <motion.path
          d={predicted}
          stroke="url(#capLine)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="5 5"
          initial={reduce ? false : { pathLength: 0 }}
          whileInView={reduce ? undefined : { pathLength: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.9 }}
        />

        {/* Ponto destacado no fim */}
        <motion.circle
          cx="248"
          cy="24"
          r="4"
          fill={CYAN}
          initial={reduce ? false : { opacity: 0, scale: 0 }}
          whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.3, delay: 1.35 }}
        />
      </svg>

      {/* Rótulo "previsto" sobre o ponto */}
      <motion.div
        className="absolute right-[2%] top-0 flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-ink/90"
        initial={reduce ? false : { opacity: 0, y: 6 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.3, delay: 1.45 }}
      >
        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: PURPLE }} />
        previsto ↑
      </motion.div>
    </div>
  )
}

// ============================================================
// Card 3 — Agentes coordenados: pipeline de chips em sequência
// ============================================================

const PIPELINE = ['Pesquisa', 'Redige', 'Revisa', 'Envia ✓']

function AgentPipeline({ reduce }: { reduce: boolean }) {
  return (
    <motion.div
      className="mt-2 flex flex-wrap items-center gap-2"
      variants={staggerContainer}
      initial={reduce ? false : 'hidden'}
      whileInView={reduce ? undefined : 'show'}
      viewport={{ once: true, margin: '-60px' }}
      aria-hidden="true"
    >
      {PIPELINE.map((step, i) => {
        const isLast = i === PIPELINE.length - 1
        return (
          <span key={step} className="flex items-center gap-2">
            <motion.span
              variants={slideIn}
              className="rounded-full border px-3 py-1.5 text-sm"
              style={
                isLast
                  ? { backgroundImage: ACCENT_GRADIENT, color: '#04141a', borderColor: 'transparent', fontWeight: 500 }
                  : { borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(245,245,247,0.9)' }
              }
            >
              {step}
            </motion.span>
            {!isLast && (
              <motion.span variants={slideIn} className="text-muted">
                →
              </motion.span>
            )}
          </span>
        )
      })}
    </motion.div>
  )
}

// ============================================================
// Bloco de texto reutilizado por todos os cards
// ============================================================

function CardCopy({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string
  title: string
  text: string
}) {
  return (
    <div>
      <p className="eyebrow">{eyebrow}</p>
      <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">
        {title}
      </h3>
      <p className="mt-2 leading-relaxed text-muted">{text}</p>
    </div>
  )
}

// ============================================================
// Seção
// ============================================================

export default function Capabilities() {
  const reduce = useReducedMotion() ?? false

  return (
    <section id="capacidades" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Cabeçalho centralizado */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">O que a IA resolve</p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Se dá pra resolver com IA, a gente resolve.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Do atendimento à linha de produção. Se existe um problema, existe uma
            solução com IA.
          </p>
        </Reveal>

        {/* Bento: 1 card largo em cima + 2 embaixo */}
        <div className="mt-14 grid gap-5">
          {/* Card 1 (largo) */}
          <Reveal>
            <article className="card hover:border-white/20">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <CardCopy
                  eyebrow="Visão computacional"
                  title="Enxerga e entende imagem e vídeo"
                  text="Inspeção de qualidade, contagem de estoque e segurança do trabalho em tempo real, direto da câmera. A IA vê o que a equipe não consegue vigiar o tempo todo."
                />
                <VisionFrame reduce={reduce} />
              </div>
            </article>
          </Reveal>

          {/* Cards 2 e 3 */}
          <div className="grid gap-5 md:grid-cols-2">
            <Reveal delay={0.06}>
              <article className="card flex h-full flex-col hover:border-white/20">
                <CardCopy
                  eyebrow="Previsão"
                  title="Antecipa o que ainda não aconteceu"
                  text="Prevê queda de vendas, ruptura de estoque e clientes prestes a cancelar, antes que virem prejuízo."
                />
                <div className="mt-auto pt-6">
                  <PredictionChart reduce={reduce} />
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.12}>
              <article className="card flex h-full flex-col hover:border-white/20">
                <CardCopy
                  eyebrow="Agentes coordenados"
                  title="Um time de IA no processo inteiro"
                  text="Vários agentes se coordenam para executar tarefas de ponta a ponta, sozinhos, do início ao envio."
                />
                <div className="mt-auto pt-6">
                  <AgentPipeline reduce={reduce} />
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
