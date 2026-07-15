import { useState } from 'react'
import { Check, Loader2 } from 'lucide-react'
import Reveal from './Reveal'

type FormState = {
  nome: string
  empresa: string
  email: string
  mensagem: string
}

const EMPTY_FORM: FormState = { nome: '', empresa: '', email: '', mensagem: '' }

type Status = 'idle' | 'sending' | 'sent'

/**
 * CTA final com fundo em gradiente (o acento) e formulário curto.
 *
 * Nota: não usamos <form> nativo com submit — os campos são controlados por
 * onChange e o "envio" é simulado por onClick. Trocar por integração real depois.
 */
export default function FinalCTA() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM)
  const [status, setStatus] = useState<Status>('idle')

  // Habilita o envio só com os campos essenciais preenchidos
  const canSubmit =
    form.nome.trim() !== '' &&
    form.empresa.trim() !== '' &&
    form.email.trim() !== ''

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }))
    }

  const handleSubmit = () => {
    if (!canSubmit || status === 'sending') return
    setStatus('sending')
    // Simula o envio — substituir por chamada real (API/e-mail) depois
    setTimeout(() => {
      setStatus('sent')
      setForm(EMPTY_FORM)
    }, 1200)
  }

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
                Em uma conversa curta, mapeamos as oportunidades mais rápidas e
                mostramos por onde começar. Sem custo e sem compromisso.
              </p>
            </div>

            {/* Formulário (simulado) */}
            <div className="rounded-2xl bg-base/90 p-6 backdrop-blur-sm sm:p-8">
              {status === 'sent' ? (
                <div className="flex flex-col items-center py-8 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white">
                    <Check className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-medium">
                    Recebemos seu contato!
                  </h3>
                  <p className="mt-2 text-muted">
                    Em breve entramos em contato para agendar seu diagnóstico.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="btn-secondary mt-6"
                  >
                    Enviar outro
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <Field
                    id="nome"
                    label="Nome"
                    value={form.nome}
                    onChange={handleChange('nome')}
                    placeholder="Seu nome"
                  />
                  <Field
                    id="empresa"
                    label="Empresa"
                    value={form.empresa}
                    onChange={handleChange('empresa')}
                    placeholder="Nome da empresa"
                  />
                  <Field
                    id="email"
                    label="E-mail"
                    type="email"
                    value={form.email}
                    onChange={handleChange('email')}
                    placeholder="voce@empresa.com.br"
                  />
                  <div>
                    <label
                      htmlFor="mensagem"
                      className="mb-1.5 block text-sm text-muted"
                    >
                      Mensagem <span className="text-muted/60">(opcional)</span>
                    </label>
                    <textarea
                      id="mensagem"
                      value={form.mensagem}
                      onChange={handleChange('mensagem')}
                      rows={3}
                      placeholder="Conte um pouco sobre o seu desafio"
                      className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-ink placeholder:text-muted/50 focus:border-accent-to/60 focus:outline-none"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={!canSubmit || status === 'sending'}
                    className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                        Enviando…
                      </>
                    ) : (
                      'Agendar diagnóstico gratuito'
                    )}
                  </button>

                  <p className="text-center text-xs text-muted/70">
                    Ao enviar, você concorda em ser contatado sobre o diagnóstico.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

/** Campo de texto controlado reutilizável. */
function Field({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
}: {
  id: string
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  type?: string
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm text-muted">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="min-h-[48px] w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-ink placeholder:text-muted/50 focus:border-accent-to/60 focus:outline-none"
      />
    </div>
  )
}
