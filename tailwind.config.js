/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: ["emerald"],
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

