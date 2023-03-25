/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './src/pages/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './src/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      noto: 'Noto Sans SC',
    },
  },
  plugins: [],
}
