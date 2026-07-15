import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import CtaButton from './CtaButton'
import { LogoHorizontal } from './Logos'

// Links de navegação (âncoras para as seções)
const NAV_LINKS = [
  { label: 'Capacidades', href: '#capacidades' },
  { label: 'Aplicações', href: '#aplicacoes' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'FAQ', href: '#faq' },
]

/**
 * Navbar fixa translúcida com blur. No mobile vira menu hambúrguer.
 * A cor do logo é controlada por CSS (currentColor) → branco no fundo escuro.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false)

  // Trava o scroll do body enquanto o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-white/[0.08] bg-base/70 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
          {/* Logo à esquerda — currentColor herda o texto branco */}
          <a
            href="#top"
            className="flex items-center text-ink"
            aria-label="Avanccia, ir para o início"
          >
            <LogoHorizontal className="h-7 w-auto" />
          </a>

          {/* Links centrais/direita — visíveis a partir de lg (5 itens) */}
          <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA à direita (desktop) */}
          <div className="hidden lg:block">
            <CtaButton label="Agende um diagnóstico" hideIcon className="px-5 py-2.5" />
          </div>

          {/* Botão hambúrguer (mobile) — área de toque ≥ 48px */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 text-ink lg:hidden"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-b border-white/[0.08] bg-base/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-[48px] items-center rounded-2xl px-3 text-base text-ink/90 transition-colors hover:bg-white/5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <CtaButton
                  className="w-full"
                  label="Agende um diagnóstico"
                />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
