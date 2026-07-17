import { Check } from 'lucide-react'
import Reveal from './Reveal'
import WhatsAppIcon from './WhatsAppIcon'

// Número de WhatsApp da Avanccia. Troque pelo número real antes de publicar.
const WHATSAPP_NUMBER = '5511999999999'

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Olá! Quero entender se a IA pode ajudar na minha empresa.',
)}`

// Lista estática: o que acontece sem automação
const WITHOUT_AI = [
  'Time gasta horas em tarefa repetitiva',
  'Cliente espera resposta por horas ou dias',
  'Decisão tomada sem dado nenhum na mão',
  'Custo operacional sobe junto com a demanda',
]

// Lista estática: o que muda com a Avanccia
const WITH_AVANCCIA = [
  'IA cuida do repetitivo, time cuida do que importa',
  'Resposta em segundos, 24 horas por dia',
  'Decisão baseada em previsão, não em achismo',
  'Custo cresce bem mais devagar que a demanda',
]

/**
 * Seção "Enquanto você decide": comparação estática (sem checklist, sem
 * interação) entre operar sem IA e operar com a Avanccia, seguida de um
 * convite direto para o WhatsApp.
 */
export default function WhileYouDecide() {
  return (
    <section id="enquanto-voce-decide" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <p className="eyebrow">Enquanto você decide</p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Seu concorrente já pode estar resolvendo isso com IA
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted">
            Fique à frente dos concorrentes. Deixe a tecnologia trabalhar pelo
            seu lucro e pela sua produtividade.
          </p>
        </Reveal>

        {/* Duas colunas estáticas */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <Reveal delay={0.06}>
            <div className="h-full rounded-2xl border border-[#E24B4A]/25 bg-white/[0.02] p-6 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#E24B4A]/80">
                Sem automação
              </p>
              <ul className="mt-5 space-y-4">
                {WITHOUT_AI.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 shrink-0 font-mono text-[#E24B4A]"
                      aria-hidden="true"
                    >
                      —
                    </span>
                    <span className="text-base leading-relaxed text-muted">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="h-full rounded-2xl border border-[#22C7E0]/30 bg-white/[0.02] p-6 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#22C7E0]/90">
                Com a Avanccia
              </p>
              <ul className="mt-5 space-y-4">
                {WITH_AVANCCIA.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#22C7E0]"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                    <span className="text-base leading-relaxed text-ink/90">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Linha de saída, com borda tracejada */}
        <Reveal delay={0.18} className="mt-5">
          <div className="flex flex-col items-start gap-4 rounded-2xl border border-dashed border-white/20 bg-white/[0.01] p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-base italic leading-relaxed text-muted">
              Descubra como podemos resolver seus problemas.
            </p>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] w-full shrink-0 items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Falar no WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
