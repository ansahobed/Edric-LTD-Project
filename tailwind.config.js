/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        charcoal: {
          50: '#F0F1F2',
          100: '#D8DCDF',
          200: '#B0B8BE',
          300: '#88949D',
          400: '#60707D',
          500: '#384C5C',
          600: '#2D3D4A',
          700: '#222E37',
          800: '#171E25',
          900: '#0B0F12',
        },
        gold: {
          50: '#FDF7E9',
          100: '#FAEAC4',
          200: '#F6D88F',
          300: '#F2C55A',
          400: '#EEB325',
          500: '#D29510',
          600: '#A8770D',
          700: '#7E5A0A',
          800: '#533C06',
          900: '#291E03',
        },
        blue: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      height: {
        '80vh': '80vh',
        '90vh': '90vh',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
};