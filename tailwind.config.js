/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./common/**/*.{js,ts,jsx,tsx}",
    "./module/**/*.{js,ts,tsx,jsx}",
  ],
  theme: {
    colors: {
        'VeryLightGray': 'hsl(0, 0%, 98%)',
        'VeryLightGrayishBlue': 'hsl(236, 33%, 92%)',
        'Light:LightGrayishBlue': 'hsl(233, 11%, 84%)',
        'Light:DarkGrayishBlue': 'hsl(236, 9%, 61%)',
        'VeryDark Grayish Blue': 'hsl(235, 19%, 35%)',
        'VeryDarkBlue': 'hsl(235, 21%, 11%)',
        'VeryDarkDesaturated Blue': 'hsl(235, 24%, 19%)',
        'Dark:LightGrayishBlue': 'hsl(234, 39%, 85%)',
        'LightGrayishBlue(hover)': 'hsl(236, 33%, 92%)',
        'Dark:DarkGrayishBlue': 'hsl(234, 11%, 52%)',
        'VeryDarkGrayishBlue': 'hsl(233, 14%, 35%)',
    }
  },
  plugins: [],
}
