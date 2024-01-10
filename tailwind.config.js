module.exports = {
  darkMode: 'class',
  mode:'production',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container:{
      center:true,
      margin:"auto"
    },
    extend: {
      colors:{
        primary: "rgb(var(--color-primary))",
        dark:"rgb(var(--color-text) / <alpha-value>)",
        secondari:"rgb(var(--color-text-white) / <alpha-value>)"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        Oswaldbold: ["Oswaldbold", "sans-serif"],
        Oswalextraligt: ["OswalExtraligt", "sans-serif"],
        OswaldMedium: ["OswaldMedium", "sans-serif"],
        OswaldReguler: ["OswaldReguler", "sans-serif"],
        OswaldSemibold: ["OswaldSemibold", "sans-serif"],
        OswaldLight: ["OswaldLight", "sans-serif"],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}