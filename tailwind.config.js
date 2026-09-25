/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F5EEFD',
        panel: {
          1: '#EBE0FB',
          2: '#DDCBFA',
          3: '#CCAFF5',
          dark: '#241447', // Deep obsidian purple for crystal-clear text contrast (15:1)
        },
        brand: {
          DEFAULT: '#5B2FB8', // High-contrast rich royal violet
          hover: '#4A239E',
          light: '#7C4BE8',
          accent: '#9D76F7'
        },
        ink: {
          DEFAULT: '#140A28', // Deep contrast ink black-purple
          muted: '#2E1E50',
          light: '#423168'
        },
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
        'brutal-sm': '3px 3px 0px #140A28',
        'brutal': '5px 5px 0px #140A28',
        'brutal-lg': '8px 8px 0px #140A28',
        'brutal-brand': '5px 5px 0px #5B2FB8',
        'brutal-white': '5px 5px 0px #FFFFFF',
        'brutal-active': '1px 1px 0px #140A28',
      },
      borderRadius: {
        'brutal': '12px',
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
