import { ArrowRight } from 'lucide-react'

type CtaButtonProps = {
  /** Texto do botão (padrão: CTA único de conversão) */
  label?: string
  className?: string
  /** Oculta a seta (usada em contextos mais compactos) */
  hideIcon?: boolean
}

/**
 * CTA primário único da página. Sempre leva à seção de contato (#contato),
 * onde fica o formulário de agendamento do diagnóstico gratuito.
 */
export default function CtaButton({
  label = 'Agende um diagnóstico gratuito',
  className = '',
  hideIcon = false,
}: CtaButtonProps) {
  return (
    <a href="#contato" className={`btn-primary ${className}`}>
      {label}
      {!hideIcon && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
    </a>
  )
}
