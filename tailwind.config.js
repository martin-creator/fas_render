/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1C243C",
        secondary: "#A5B9DF",
        tertiary: "#C3B299",
        darkGray: "#686C78",
        darkerGray: "#625D5D",
        dimGray: "#9497A1",
        lightGray: "#AAADC4",
        black: "#292D33",
        backgroundLight: "#F1F6FA",
        error: "#C14040",
      },
    },
  },
  plugins: [],
};
