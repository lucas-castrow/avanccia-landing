import Reveal from './Reveal'

export default function About() {
  return (
    <section className="px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="eyebrow">Sobre a Avanccia</p>
        <p className="mt-6 font-display text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
          A Avanccia existe para tirar a inteligência artificial do campo das
          promessas e colocá-la para trabalhar dentro da sua empresa.
        </p>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          Traduzimos IA em resultado de negócio. Entendemos o seu contexto,
          escolhemos as ferramentas certas e implementamos ao seu lado, sem jargão
          e sem projeto que fica só no papel. Levamos você do diagnóstico à
          automação rodando em produção e continuamos por perto para garantir que
          ela dê retorno.
        </p>
      </Reveal>
    </section>
  )
}
