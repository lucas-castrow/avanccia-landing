/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Design tokens — base monochromático escuro
        base: '#0B0B0D', // fundo base
        ink: '#F5F5F7', // texto principal
        muted: '#8A8A92', // cinza secundário
        // Acento (usado só em botões, destaques e hero)
        accent: {
          from: '#4F46E5',
          to: '#06B6D4',
        },
      },
      fontFamily: {
        // Títulos
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // Corpo
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // Rótulos / eyebrows / números
        mono: ['"Space Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      borderColor: {
        // Bordas sutis padrão
        subtle: 'rgba(255,255,255,0.08)',
      },
      backgroundImage: {
        accent: 'linear-gradient(135deg, #4F46E5 0%, #06B6D4 100%)',
      },
      borderRadius: {
        '2xl': '1rem',
      },
      keyframes: {
        // Movimento lento e sutil do mesh do hero
        'mesh-drift': {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(4%, -3%, 0) scale(1.08)' },
        },
      },
      animation: {
        'mesh-drift': 'mesh-drift 18s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
