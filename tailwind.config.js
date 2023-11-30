/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // 'monsterrat': ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        // 'source': ['Source Sans 3', 'sans-serif'],
        // 'noto': ['Noto Sans', 'sans-serif'],
        // 'DM': ['DM Sans', 'sans-serif'],
        // 'alef': ['Alef', 'sans-serif'],
        // 'open': ['Open Sans', 'sans-serif'],
        // 'lato': ['Lato', 'sans-serif'],
        // 'rubik': ['Rubik', 'sans-serif'],
      },
    },
    plugins: [],
  },
}
