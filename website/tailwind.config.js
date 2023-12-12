/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0000FF",
        secondary: "#1a2639",
        accent: "#e2e8f0",
        highlight: "#edf2f7",
        muted: "#718096",
        white: "#fff",
        black: "#000",
      },
    },
    translate: {
      '-full': '-100%',
    },
  },
  plugins: [],
}

