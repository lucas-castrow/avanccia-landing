import { motion, useReducedMotion } from 'framer-motion'
import WhatsAppIcon from './WhatsAppIcon'
import { buildWhatsAppLink } from '../lib/whatsapp'

const MESSAGE = 'Olá! Vi o site da Avanccia e quero saber mais.'

/**
 * Botão flutuante de WhatsApp, fixo no canto inferior direito e visível
 * durante todo o scroll. Verde do WhatsApp é exceção deliberada à paleta
 * monocromática da marca, por ser um código de cor que o usuário brasileiro
 * já reconhece de cara.
 *
 * bottom-5/right-5 (20px) não conflita com nenhum elemento fixo do site: a
 * navbar fica no topo e o CTA principal só aparece inline no conteúdo (nunca
 * fixo), então não há sobreposição nem no mobile.
 */
export default function WhatsAppFloatingButton() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.a
      href={buildWhatsAppLink(MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp com a Avanccia"
      className="fixed bottom-5 right-5 z-40 flex min-h-[48px] items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-medium text-white shadow-lg shadow-black/30"
      whileHover={reduceMotion ? undefined : { scale: 1.06 }}
      whileTap={reduceMotion ? undefined : { scale: 0.96 }}
      transition={{ duration: 0.15 }}
    >
      <WhatsAppIcon className="h-6 w-6 shrink-0" />
      {/* Texto some em telas pequenas; só o ícone permanece */}
      <span className="hidden sm:inline">Falar agora</span>
    </motion.a>
  )
}
