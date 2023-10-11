/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    maxWidth: {
      container: "auto",
      contentContainer: "1140px",
      containerSmall: "1024px",
      containerxs: "768px",
    },
    extend: {
      screens: {  //l refers to landscape orientation
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily : {
        bodyFont: ['Montserrat', 'sans-serif'],
        titleFont: ['Inter', 'sans-serif'],
        codeFont: ['Fira Code', 'monospace']
      },
      boxShadow : {
        navbarShadow: "0 10px 30px -10px rgba(2,12,27,0.7)",
      },
      colors: {
        bodyColor: "#1B262C",
        textViolet: "#BBE1FA",
        imageOverlay: '#0F4C75',
        textLight: "#BBE1FA",
        textDark: "#3282B8",
        hoverColor: "rgba(27, 38, 44, 0.1)", 
      },
    },
  },
  plugins: [require ("tailwind-scrollbar")],
}
