import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a0a0a',
        secondary: '#737373',
        accent: '#2563eb',
        surface: '#fafafa',
        muted: '#f5f5f5',
        border: '#e5e5e5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'display-sm': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'heading': ['1.75rem', { lineHeight: '1.3', letterSpacing: '-0.015em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'caption': ['0.875rem', { lineHeight: '1.5' }],
      },
      maxWidth: {
        'content': '1200px',
        'narrow': '720px',
      },
      spacing: {
        'section': '8rem',
        'section-sm': '5rem',
      },
    },
  },
  plugins: [],
}

export default config
