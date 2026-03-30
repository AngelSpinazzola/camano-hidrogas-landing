/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f0fafb',
          100: '#d0eef4',
          500: '#4ab8cc',
          600: '#2d8da6',
          700: '#1e728a',
          800: '#1b5d72',
          900: '#163f52',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Raleway', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
