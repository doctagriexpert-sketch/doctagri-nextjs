/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "!./src/app/**/*.test.{js,ts,jsx,tsx}",
    "!./node_modules/**/*",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2D5016', // Vert Principal
          light: '#00C853',   // Vert Clair
          dark: '#1B3A1F',    // Vert Foncé
          50: '#F5F1E8',      // Beige Clair
          100: '#E8DCC4',     // Beige
          200: '#F5F1E8',
          300: '#86efac',
          400: '#4ade80',
          500: '#00C853',     // Vert Clair pour boutons
          600: '#2D5016',     // Vert Principal
          700: '#1B3A1F',     // Vert Foncé
          800: '#166534',
          900: '#14532d',
        },
        beige: {
          light: '#F5F1E8',
          DEFAULT: '#E8DCC4',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Crimson Pro', 'serif'],
      },
      fontSize: {
        '7xl': ['72px', { lineHeight: '1.1' }],
        '5xl': ['48px', { lineHeight: '1.2' }],
        '3xl': ['30px', { lineHeight: '1.3' }],
      },
    },
  },
  plugins: [],
}