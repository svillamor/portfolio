import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
         fontFamily: {
            sans: [
                '"Inter var", sans-serif',
          ]
         },
         colors: {
        'dgray': '#030712',
        'high': '#DCFF00',
        'bggray': '#E6E8F0',
        'purp': '#6100FF',     
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
