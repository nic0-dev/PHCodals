/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#fcf5f0',
          '100': '#f8e8dc',
          '200': '#f0cfb8',
          '300': '#e7ae8a',
          '400': '#dc845b',
          '500': '#d36135',
          '600': '#c64f30',
          '700': '#a53d29',
          '800': '#843328',
          '900': '#6b2c23',
          '950': '#391511',
      },
      }
    },
  },
  plugins: [],
}

