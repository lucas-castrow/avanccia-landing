# Avanccia — Landing Page

Landing page da **Avanccia**, consultoria de inteligência artificial. Foco único
de conversão: **agendar um diagnóstico gratuito**.

## Stack

- **Vite + React + TypeScript**
- **Tailwind CSS** (design tokens em `tailwind.config.js`)
- **framer-motion** (scroll-reveal, contadores, accordion)
- **lucide-react** (ícones)
- Fontes via Google Fonts: **Space Grotesk** (títulos), **Inter** (corpo),
  **Space Mono** (rótulos/eyebrows/números)

## Rodando o projeto

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

Outros comandos:

```bash
npm run build     # build de produção (type-check + Vite)
npm run preview   # serve o build localmente
```

## Estrutura

```
public/brand/            SVGs da marca (favicon, footer, hero)
src/
  App.tsx                Monta as seções na ordem
  index.css              Tailwind + tokens + utilitários (.btn-primary etc.)
  hooks/useCountUp.ts    Contador animado (respeita reduced-motion)
  components/
    Navbar.tsx           Navbar fixa translúcida + menu hambúrguer (mobile)
    Hero.tsx             Hero com símbolo translúcido + mesh de gradiente
    TechBar.tsx          Barra de tecnologias
    Problem.tsx          Dores em cards
    Services.tsx         Serviços em grid bento
    HowItWorks.tsx       4 passos em linha do tempo
    UseCases.tsx         Exemplos de aplicação (ilustrativos)
    Results.tsx          Números com contador animado (placeholder)
    About.tsx            Posicionamento
    FAQ.tsx              Accordion
    FinalCTA.tsx         CTA final + formulário (envio simulado)
    Footer.tsx           Rodapé
    Logos.tsx            Logos inlinados (currentColor via CSS)
    Reveal.tsx           Wrapper de scroll-reveal
    SectionHeader.tsx    Cabeçalho de seção reutilizável
    CtaButton.tsx        CTA único (leva a #contato)
```

## Notas para personalizar

- **Números da seção Resultados** são **ilustrativos (placeholder)** — substitua
  os valores em `src/components/Results.tsx` por dados reais.
- **Formulário** (`FinalCTA.tsx`) apenas **simula o envio** (`setTimeout`).
  Conecte a uma API/serviço de e-mail no `handleSubmit`.
- **E-mail de contato** no `Footer.tsx` é um placeholder
  (`contato@avanccia.com.br`).
- Cores, fontes e o gradiente de acento ficam centralizados em
  `tailwind.config.js`.
```
