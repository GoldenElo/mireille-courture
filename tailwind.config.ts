import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './sections/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F8F6F3',
        linen: '#EEE7DF',
        gold: '#C4A16D',
        'gold-text': '#8B6D3F',
        taupe: '#9B8770',
        charcoal: '#2E2E2E',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-jost)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        luxury: '0.25em',
        wide: '0.15em',
        wider: '0.2em',
        widest: '0.3em',
      },
    },
  },
  plugins: [],
}

export default config
