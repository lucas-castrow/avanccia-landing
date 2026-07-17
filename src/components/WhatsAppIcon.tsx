type WhatsAppIconProps = {
  className?: string
}

/**
 * Glifo simples de "telefone em balão de conversa", usado nos dois pontos de
 * contato via WhatsApp. Combinado com a cor #25D366 e o texto ao lado, é
 * reconhecível pelo usuário brasileiro sem depender do logotipo oficial.
 */
export default function WhatsAppIcon({ className }: WhatsAppIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.37 2 11.75c0 1.87.53 3.62 1.45 5.12L2.5 21.5l4.8-1.24a10.2 10.2 0 0 0 4.7 1.24c5.52 0 10-4.37 10-9.75S17.52 2 12 2Zm0 17.75c-1.55 0-3-.42-4.24-1.15l-.3-.18-2.85.74.76-2.72-.2-.31a7.87 7.87 0 0 1-1.27-4.38c0-4.35 3.63-7.85 8.1-7.85s8.1 3.5 8.1 7.85-3.63 7.85-8.1 7.85Z" />
      <path d="M16.2 13.9c-.24-.12-1.4-.68-1.62-.76-.22-.08-.38-.12-.54.12-.16.24-.62.76-.76.92-.14.16-.28.18-.52.06-.24-.12-1-.36-1.9-1.15-.7-.61-1.18-1.37-1.32-1.6-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.26-.74-1.73-.19-.46-.39-.4-.54-.4-.14 0-.3-.01-.46-.01-.16 0-.42.06-.64.3-.22.24-.84.8-.84 1.94s.86 2.26.98 2.42c.12.16 1.68 2.52 4.06 3.54.57.24 1.01.38 1.36.49.57.17 1.09.15 1.5.09.46-.07 1.4-.56 1.6-1.11.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.27Z" />
    </svg>
  )
}
