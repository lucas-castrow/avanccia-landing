import Reveal from './Reveal'
import WhatsAppIcon from './WhatsAppIcon'
import { buildWhatsAppLink } from '../lib/whatsapp'

const WHATSAPP_MESSAGE = 'Olá! Quero agendar um diagnóstico gratuito com a Avanccia.'

/**
 * CTA final: convite direto para o WhatsApp, sem formulário. O WhatsApp já é
 * um jeito mais rápido e prático de começar a conversa do que preencher
 * nome/empresa/e-mail e esperar retorno.
 */
export default function FinalCTA() {
  return (
    <section id="contato" className="px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="mx-auto max-w-5xl">
        {/* Cartão com o acento em gradiente */}
        <div className="relative overflow-hidden rounded-2xl bg-accent p-8 sm:p-14">
          {/* Textura sutil sobre o gradiente */}
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_55%)]"
            aria-hidden="true"
          />

          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* Texto */}
            <div className="text-white">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/80">
                Diagnóstico gratuito
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Descubra onde a IA gera mais resultado na sua empresa.
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-white/85">
                Manda uma mensagem no WhatsApp e conversamos em minutos.
                Mapeamos as oportunidades mais rápidas para o seu negócio, sem
                custo e sem compromisso.
              </p>
            </div>

            {/* Convite ao WhatsApp */}
            <div className="flex flex-col items-center rounded-2xl bg-base/90 p-8 text-center backdrop-blur-sm sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white">
                <WhatsAppIcon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-display text-xl font-medium">
                Fale com a gente agora
              </h3>
              <p className="mt-2 max-w-xs leading-relaxed text-muted">
                Sem formulário, sem espera. Resposta direto no seu WhatsApp.
              </p>

              <a
                href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-6 py-3 font-medium text-white transition-transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
