import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Capabilities from './components/Capabilities'
import Applications from './components/Applications'
import Problem from './components/Problem'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Results from './components/Results'
import About from './components/About'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

/**
 * Landing page da Avanccia — consultoria de IA.
 * Seções na ordem definida, com um único CTA de conversão
 * (agendar diagnóstico gratuito) repetido ao longo da página.
 */
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Capabilities />
        <Applications />
        <Problem />
        <Services />
        <HowItWorks />
        <Results />
        <About />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
