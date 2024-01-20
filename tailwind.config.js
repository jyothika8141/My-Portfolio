/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgcolor: '#050913',
      },
      // backgroundImage: {
      //   site: "url('/src/assets/images/bg.jpg')",
      //   about: "url('/src/assets/images/about.jpg')",
      //   services: "url('/src/assets/images/services.jpg')",
      // }
    },
    fontFamily: {
      primary: 'Poppins',
      secondary: 'Roboto',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1200px',
    },
  },
  plugins: [],
}