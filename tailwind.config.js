/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary palette for Testigo.mx
        primary: '#0d3b66', // Deep navy for text and headings
        secondary: '#f5f5f5', // Off‑white background
        accent: '#354f7c', // Mid‑tone blue used sparingly
        muted: '#e1e5ea', // Soft grey for backgrounds and borders
        danger: '#b00020', // Red for warnings and destructive actions
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Merriweather', 'ui-serif', 'serif'],
      },
      borderRadius: {
        md: '0.375rem',
        lg: '0.5rem',
      },
    },
  },
  plugins: [],
};