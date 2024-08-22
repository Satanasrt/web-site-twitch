/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        twitchPurple: '#9147ff',
        twitchDark: '#0e0e10',
        twitchGray: '#313131',
      },
    },
  },
  plugins: [],
}
