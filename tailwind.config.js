/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'], // Add 'Nunito Sans' to the font family
      },
      colors: {
        custom: {
          beige: '#FFFEFA',    // Custom color name for #FFFEFA
          dark: '#252422',     // Custom color name for #252422
          orange: '#EB5E28',   // Custom color name for #EB5E28
          lightBeige: '#E6E3DA', // Custom color name for #E6E3DA
          white: '#FFFFFF',    // Custom color name for #FFFFFF
        },
      },
    },
  },
  plugins: [],
}

