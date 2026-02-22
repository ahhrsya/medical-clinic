/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'medical-blue': '#1B6FEE',
        'soft-green': '#34D399',
        'soft-orange': '#FCD34D',
        'dark-navy': '#0F172A',
        'cool-gray': '#64748B',
        'surface-gray': '#F1F5F9',
        'danger-red': '#EF4444',
        // generated mappings
        'primary': '#0A1F44', // Midnight Blue for VVIP
        'background-light': '#f6f7f8',
        'background-dark': '#050B18', // VVIP Dark
        'navy-dark': '#0F172A',
        'light-gray': '#F1F5F9',
        'navy-900': '#0f172a',
        'sage-soft': '#f0fdf4',
        'peach-soft': '#fff7ed',
        'lavender-soft': '#f5f3ff',
        // VVIP specific
        'accent': '#D4AF37',
        'soft-sand': '#F9F8F2',
        'hero-blue': '#005EB8',
        'button-blue': '#0A1F44',
        'card-grey': '#F8F9FA',
        'pill-blue': '#E0E9FF',
        'text-pill-blue': '#4A72FF',
      },
      fontFamily: {
        sans: ['"Inter Tight"', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: "0px",
        'lg': '0.5rem', /* 8px */
        'xl': '0.75rem', /* 12px */
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
