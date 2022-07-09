/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home' : "url('/src/Resources/red-onion/images/bannerbackground.png')"
      }
    },
  },
  plugins: [],
}
