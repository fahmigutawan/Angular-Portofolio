/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {},
    colors:{
      'silvertree': {
        '50': '#f3faf7',
        '100': '#d6f1e5',
        '200': '#ade2cd',
        '300': '#7cccae',
        '400': '#64b99c',
        '500': '#379577',
        '600': '#2a775f',
        '700': '#25604e',
        '800': '#214e41',
        '900': '#204138',
        '950': '#0d2620',
      },
    }
  },
  plugins: [],
}

