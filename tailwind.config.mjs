/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily:{
        'trakis':['Triakis', 'sans-serif'],
        'manrope':['Manrope', 'sans-serif']
      },
      colors: {
        'bgcard': '#23262d',
        'bg-black': '#00000',
        'bg-silver':'#C5D2CB',
        'white':'#ffff',
        'grey':'#52555A',
        'silver':'#999EA6',
        'smtext':'#808080',
        'footergrey':'#68767C',
        'lightsilver':'#D8D8D5',
        'textgrey':'#4C5D64',
        'primary': '#22D96D',
        'bg-btn': '#0E0E11'
      },
      minHeight:{
        'screen': '100vh'
      }
    },
    fontSize: {
      'sm': '0.8rem',
      'base': '1rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      '4xl': '2.5rem',
      '5xl': '3rem',
    }
  },
  plugins: [require('tailwind-hamburgers')],
};
