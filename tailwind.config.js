/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgcolor: '#050913',
        lavendar: '#613F75',
        slateblue: '#483d8b',
        // skyBlue: '#0ea5e9',
        // navColor: '#39306f',
        // textColor: '#6c63a2',
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