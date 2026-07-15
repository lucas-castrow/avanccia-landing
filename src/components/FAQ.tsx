import { useState } from 'react'
import { Plus } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'

const FAQS = [
  {
    q: 'Quanto custa?',
    a: 'Depende do escopo. Começamos sempre pelo diagnóstico gratuito para entender o seu caso e, a partir dele, apresentamos uma proposta clara, com valores e retorno esperado. Sem surpresa e sem compromisso.',
  },
  {
    q: 'Meus dados ficam seguros?',
    a: 'Sim. Tratamos seus dados com confidencialidade, usamos provedores reconhecidos e configuramos as soluções para que informações sensíveis fiquem protegidas e sob seu controle, em conformidade com a LGPD.',
  },
  {
    q: 'Minha empresa é pequena demais para IA?',
    a: 'Não. Empresas menores costumam ter o ganho mais rápido, porque poucas automações já liberam muito tempo da equipe. Começamos pequeno, provamos o valor e crescemos a partir daí.',
  },
  {
    q: 'Quanto tempo leva para implementar?',
    a: 'As primeiras automações costumam entrar em operação em poucas semanas. No diagnóstico priorizamos o que dá resultado mais rápido, para você ver impacto cedo enquanto evoluímos o restante.',
  },
]

/** Item individual do accordion. */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  const reduceMotion = useReducedMotion()

  return (
    <div className="border-b border-white/[0.08]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex min-h-[64px] w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-lg font-medium">{q}</span>
        <Plus
          className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${
            open ? 'rotate-45 text-ink' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-8 leading-relaxed text-muted">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/** FAQ: accordion com as objeções mais comuns. */
export default function FAQ() {
  return (
    <section id="faq" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          eyebrow="Perguntas frequentes"
          title="O que costumam perguntar antes de começar."
          align="center"
        />

        <Reveal className="mt-12">
          {FAQS.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
