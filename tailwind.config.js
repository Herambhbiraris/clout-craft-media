/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FAF9FE',
        panel: {
          1: '#F5F0FF',
          2: '#EDE5FC',
          3: '#DDCBFA',
          dark: '#0F0721', // Deep obsidian purple for crystal-clear contrast
        },
        brand: {
          DEFAULT: '#6D28D9', // Vibrant royal violet
          hover: '#5B21B6',
          light: '#8B5CF6',
          accent: '#A78BFA'
        },
        ink: {
          DEFAULT: '#0F172A', // Slate 900 for clean luxury readability
          muted: '#475569',
          light: '#64748B'
        },
        line: '#E2E8F0',
        paper: '#FFFFFF',
        accent: {
          emerald: '#059669',
          mint: '#10B981',
          amber: '#D97706',
          coral: '#E11D48',
          blue: '#2563EB',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Montserrat', 'system-ui', 'sans-serif'],
        display: ['Montserrat', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', '"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'brutal-sm': '0 2px 8px -1px rgba(15, 23, 42, 0.07)',
        'brutal': '0 6px 20px -3px rgba(15, 23, 42, 0.08)',
        'brutal-lg': '0 14px 34px -4px rgba(15, 23, 42, 0.11)',
        'brutal-brand': '0 8px 24px -2px rgba(109, 40, 217, 0.28)',
        'brutal-white': '0 4px 16px -2px rgba(255, 255, 255, 0.5)',
        'brutal-active': '0 1px 4px 0 rgba(15, 23, 42, 0.08)',
      },
      borderRadius: {
        'brutal': '14px',
        'brutal-lg': '18px',
        'brutal-xl': '24px',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.75', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
