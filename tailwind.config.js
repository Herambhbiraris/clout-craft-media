/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FCFAF5',
        'off-white': '#FCFAF5',
        lavender: {
          light: '#F7F3FF',
          DEFAULT: '#EDE5FF',
          dark: '#DDD0FA',
        },
        purple: {
          deep: '#21133F',
          dark: '#160D2E',
          obsidian: '#0E071D',
          border: 'rgba(108, 53, 255, 0.18)',
        },
        violet: {
          bright: '#6C35FF',
          DEFAULT: '#6C35FF',
          hover: '#5824E5',
          light: '#8F66FF',
        },
        brand: {
          DEFAULT: '#6C35FF',
          hover: '#5824E5',
          light: '#8F66FF',
          dark: '#21133F',
        },
        ink: {
          DEFAULT: '#17131F',
          muted: '#524B63',
          light: '#7A728E',
        },
        panel: {
          1: '#F7F3FF',
          2: '#EDE5FF',
          3: '#E3D7FC',
          dark: '#160D2E',
          deep: '#21133F',
        },
        line: '#EAE4F5',
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
        'agency': '0 4px 20px -2px rgba(33, 19, 63, 0.05), 0 2px 6px -1px rgba(33, 19, 63, 0.02)',
        'agency-hover': '0 16px 36px -4px rgba(108, 53, 255, 0.12), 0 4px 12px -2px rgba(33, 19, 63, 0.04)',
        'agency-dark': '0 12px 36px -6px rgba(14, 7, 29, 0.5), 0 4px 12px -2px rgba(108, 53, 255, 0.15)',
        'glow-violet': '0 0 24px rgba(108, 53, 255, 0.25)',
      },
      borderRadius: {
        'agency': '16px',
        'agency-lg': '20px',
        'agency-xl': '28px',
      },
      animation: {
        'marquee': 'marquee 28s linear infinite',
        'pulse-glow': 'pulseGlow 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3.5s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
