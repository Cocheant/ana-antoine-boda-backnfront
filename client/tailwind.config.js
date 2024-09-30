/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-0.5deg)' },
          '50%': { transform: 'rotate(0.5deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 0.2s ease-in-out infinite',
      },
     
      colors: {
        lightRed:{
          DEFAULT: "#d56f63"
        }, 
        red:{
          DEFAULT: "#950028"
        }, 
        orange:{
          DEFAULT: "#d33d00"
        }, 

        lgreen:{
          DEFAULT:"#7b7e59"
        },
        green: {
          DEFAULT: "#3a4a2d"
        },
        yellow: {
          DEFAULT: "#fcab00"
        },
        background: {
          DEFAULT: "#e6e7dc"
        }
      },
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        poppins: ['Poppins', "sans-serif"]
      },
      boxShadow: {
        card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)'
      }
    },
  },
  plugins: []
}

