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
      gray: {
        5: '#9ca3af',
        10: '#6b7280',
        20: '#4b5563',
        30: '#374151',
      }
    },
    extend: {},
  },
  plugins: [],
}
