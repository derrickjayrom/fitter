/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        workshop: {
          950: '#060B14',
          900: '#0A1322',
          850: '#0E1A2C',
          800: '#132338',
          700: '#1E3550',
          600: '#2E4C70',
          500: '#466791',
          400: '#6C8DB5',
          300: '#9DB7D5',
          200: '#CADAF0',
          100: '#E7EFF8',
          50: '#F4F8FC',
        },
        // Mapped to Sea Blue palette so all existing components seamlessly adopt the Sea Blue theme
        crimson: {
          950: '#04223d',
          900: '#083358',
          800: '#0c4a6e',
          700: '#0369a1',
          600: '#0284c7', // Primary Sea Blue
          500: '#0ea5e9', // Vibrant Sea Blue / Accent
          400: '#38bdf8', // Light Sea Blue / Text highlights
          300: '#7dd3fc',
          200: '#bae6fd',
          100: '#e0f2fe',
          50: '#f0f9ff',
        },
        seablue: {
          950: '#04223d',
          900: '#083358',
          800: '#0c4a6e',
          700: '#0369a1',
          600: '#0284c7',
          500: '#0ea5e9',
          400: '#38bdf8',
          300: '#7dd3fc',
          200: '#bae6fd',
          100: '#e0f2fe',
          50: '#f0f9ff',
        },
        amber: {
          500: '#F59E0B',
          600: '#D97706',
        }
      }
    },
  },
  plugins: [],
}
