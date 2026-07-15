import { motion, useReducedMotion } from 'framer-motion'
import CtaButton from './CtaButton'
import { LogoIcon } from './Logos'

// Selos curtos de destaque exibidos abaixo do CTA
const BADGES = ['24/7 operando', 'sob medida pro seu negócio', 'semanas, não meses']

/**
 * Hero: primeira dobra, centralizada. Símbolo grande translúcido ao fundo +
 * mesh de gradiente em movimento lento e sutil (via transform/opacity,
 * respeitando reduced-motion).
 */
export default function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pb-24 pt-36 text-center sm:px-8 sm:pt-44"
    >
      {/* ---- Fundo decorativo ---- */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        {/* Mesh de gradiente com o acento (desfoque forte, deriva lenta) */}
        <div
          className={`absolute -left-32 -top-40 h-[38rem] w-[38rem] rounded-full bg-accent opacity-[0.16] blur-[120px] ${
            reduceMotion ? '' : 'animate-mesh-drift'
          }`}
        />
        <div
          className={`absolute -right-40 top-10 h-[34rem] w-[34rem] rounded-full bg-accent opacity-[0.10] blur-[130px] ${
            reduceMotion ? '' : 'animate-mesh-drift'
          }`}
          style={{ animationDelay: '-9s' }}
        />

        {/* Símbolo grande translúcido da marca */}
        <LogoIcon className="absolute -right-10 top-16 h-[26rem] w-[26rem] text-white/[0.03] sm:h-[34rem] sm:w-[34rem]" />

        {/* Grade sutil sobreposta para textura tech */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>

      {/* ---- Conteúdo ---- */}
      <div className="mx-auto max-w-3xl">
        <motion.p
          className="eyebrow"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Consultoria de Inteligência Artificial
        </motion.p>

        <motion.h1
          className="mx-auto mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          Coloque a IA para{' '}
          <span className="text-accent-gradient">trabalhar</span> pela sua empresa.
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
        >
          Do diagnóstico à automação rodando em produção. A gente cuida da parte
          técnica e você colhe o resultado.
        </motion.p>

        <motion.div
          className="mt-10 flex justify-center"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
        >
          <CtaButton />
        </motion.div>

        {/* Selos de destaque */}
        <motion.ul
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
        >
          {BADGES.map((badge) => (
            <li
              key={badge}
              className="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 text-sm text-muted"
            >
              {badge}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
