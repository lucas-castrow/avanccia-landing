/**
 * Logos da marca inlinados como componentes React.
 *
 * Por que inline e não <img src>: os SVGs usam `currentColor`. Dentro de uma
 * tag <img> o SVG vira um documento isolado e não herda a cor do CSS. Inlinando,
 * `fill/stroke: currentColor` passa a herdar `color` do elemento pai — então
 * controlamos a cor (branca no fundo escuro) por CSS normalmente.
 *
 * Os arquivos originais também existem em /public/brand para favicon e download.
 */

type LogoProps = {
  className?: string
}

/** Logo horizontal (símbolo + wordmark) — usado na navbar */
export function LogoHorizontal({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 480 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Avanccia"
      className={className}
    >
      <g transform="translate(6,20) scale(0.75)">
        <path d="M18 102 L60 18 L102 102" stroke="currentColor" strokeWidth={13} strokeLinejoin="miter" />
        <path d="M43 102 L60 68 L77 102" stroke="currentColor" strokeWidth={13} strokeLinejoin="miter" />
      </g>
      <text
        x="118"
        y="82"
        fontFamily="'Space Grotesk', ui-sans-serif, system-ui, sans-serif"
        fontSize="54"
        fontWeight="600"
        letterSpacing="6"
        fill="currentColor"
      >
        AVANCCIA
      </text>
    </svg>
  )
}

/** Logo empilhada (símbolo acima do wordmark) — usada no footer */
export function LogoStacked({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 300 230"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Avanccia"
      className={className}
    >
      <g transform="translate(90,8)">
        <path d="M18 102 L60 18 L102 102" stroke="currentColor" strokeWidth={13} strokeLinejoin="miter" />
        <path d="M43 102 L60 68 L77 102" stroke="currentColor" strokeWidth={13} strokeLinejoin="miter" />
      </g>
      <text
        x="150"
        y="188"
        textAnchor="middle"
        fontFamily="'Space Grotesk', ui-sans-serif, system-ui, sans-serif"
        fontSize="34"
        fontWeight="500"
        letterSpacing="12"
        fill="currentColor"
      >
        AVANCCIA
      </text>
    </svg>
  )
}

/** Símbolo/ícone isolado — grafismo grande e translúcido no hero */
export function LogoIcon({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Avanccia"
      className={className}
    >
      <path d="M18 102 L60 18 L102 102" stroke="currentColor" strokeWidth={13} strokeLinejoin="miter" />
      <path d="M43 102 L60 68 L77 102" stroke="currentColor" strokeWidth={13} strokeLinejoin="miter" />
    </svg>
  )
}
