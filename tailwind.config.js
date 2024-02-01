/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: ({
        'start-game': "url('/background.jpg')",
        'game': "url('/background2.jpg')",
        'end-game': "url('/background3.jpg')",
      })
    },
  },
  plugins: [],
}

