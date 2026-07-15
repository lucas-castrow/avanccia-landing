import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

type RevealProps = {
  children: ReactNode
  /** Atraso em segundos para escalonar itens numa mesma seção */
  delay?: number
  className?: string
  /** Elemento HTML renderizado (padrão: div) */
  as?: 'div' | 'section' | 'li' | 'article'
}

/**
 * Envolve conteúdo com um scroll-reveal sutil (fade + slide para cima).
 * Dispara uma única vez quando entra na viewport e respeita
 * prefers-reduced-motion (nesse caso, aparece sem animação).
 */
export default function Reveal({
  children,
  delay = 0,
  className,
  as = 'div',
}: RevealProps) {
  const reduceMotion = useReducedMotion()
  const MotionTag = motion[as]

  // Sem movimento: renderiza estático, apenas visível
  if (reduceMotion) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </MotionTag>
  )
}
