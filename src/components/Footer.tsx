import { Mail } from 'lucide-react'
import { LogoStacked } from './Logos'

// Links do rodapé (âncoras internas)
const FOOTER_LINKS = [
  { label: 'Capacidades', href: '#capacidades' },
  { label: 'Aplicações', href: '#aplicacoes' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'FAQ', href: '#faq' },
]

/** Footer: logo empilhada, contato, direitos e links. */
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.08] px-5 py-16 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3 md:gap-8">
        {/* Marca */}
        <div>
          <LogoStacked className="h-24 w-auto text-ink" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Consultoria de IA para empresas que querem transformar tecnologia em
            resultado de negócio.
          </p>
        </div>

        {/* Navegação */}
        <nav className="md:justify-self-center">
          <p className="eyebrow">Navegação</p>
          <ul className="mt-4 space-y-3">
            {FOOTER_LINKS.map((link) => (
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
        </nav>

        {/* Contato */}
        <div className="md:justify-self-end">
          <p className="eyebrow">Contato</p>
          <a
            href="mailto:contato@avanccia.com.br"
            className="mt-4 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            contato@avanccia.com.br
          </a>
          <div className="mt-6">
            <a href="#contato" className="btn-secondary text-sm">
              Agende um diagnóstico
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/[0.08] pt-8 text-center text-xs text-muted sm:flex-row sm:text-left">
        <p>© {year} Avanccia. Todos os direitos reservados.</p>
        <p className="font-mono">Feito com IA, para negócios de verdade.</p>
      </div>
    </footer>
  )
}
