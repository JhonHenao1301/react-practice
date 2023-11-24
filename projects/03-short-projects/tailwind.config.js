/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: {
        5: '#f8fafc',
        10: '#f1f5f9'
      },
      black: {
        10: '#4b5563',
        20: '#374151',
        30: '#1f2937',
      }
    },
    extend: {},
  },
  plugins: [],
}
