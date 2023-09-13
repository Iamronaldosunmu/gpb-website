/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
          '#F7B797': '#F7B797', 
      },
      backgroundColor:{
        '#F2A5A5' : '#F2A5A5',
        '#F7B797': '#F7B797', 

      }
      
    },
  },
  plugins: [],
}

