// Número de WhatsApp da Avanccia (formato DDI+DDD+número, só dígitos).
// Troque pelo número real antes de publicar.
export const WHATSAPP_NUMBER = '5511999999999'

/** Monta um link wa.me com mensagem pré-preenchida e URL-encoded. */
export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
