/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primaryBlue: "#141A3B",
        sidebarBlue: "#1B203F",
        headerBlue: "#0A0F31",
        headerBlueDark: "#050721" 
      },
      screens: {
        // 'xxs': '300px',
        // 'xs': '475px',
        'xs': {'min': '450px', 'max': '640px'},
        'xxs': {'min': '280px', 'max': '450px'},
        // 'xmin': {'min': '0px', 'max': '380px'},
      },
    },
  },
  plugins: [],
}

