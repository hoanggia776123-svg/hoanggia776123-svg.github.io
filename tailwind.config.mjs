/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          950: '#030712',
          900: '#080d1a',
          850: '#0d1527',
          800: '#111c35',
          700: '#1b2a4e',
          600: '#263a69',
          border: 'rgba(56, 189, 248, 0.15)',
          glow: 'rgba(6, 182, 212, 0.35)',
        },
        neon: {
          cyan: '#00f2fe',
          blue: '#3b82f6',
          purple: '#a855f7',
          emerald: '#10b981',
          rose: '#f43f5e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'Cascadia Code', 'Consolas', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-line': 'glowLine 3s ease-in-out infinite',
        'scan': 'scan 6s linear infinite',
      },
      keyframes: {
        glowLine: {
          '0%, 100%': { opacity: '0.3', transform: 'scaleX(0.95)' },
          '50%': { opacity: '0.9', transform: 'scaleX(1)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      },
      boxShadow: {
        'cyber-cyan': '0 0 20px -5px rgba(0, 242, 254, 0.3)',
        'cyber-purple': '0 0 20px -5px rgba(168, 85, 247, 0.3)',
        'cyber-blue': '0 0 20px -5px rgba(59, 130, 246, 0.3)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
