/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          200: "#D5DAE1"
        },
        black: {
          DEFAULT: "#000",
          500: "#1D2235"
        },
        green: {
          DEFAULT: "#23381f"
        },
        vlorange: {
          DEFAULT: "#b18969"
        },

        lorange: {
          DEFAULT: "#b47543"
        },
        morange: {
          DEFAULT: "#aa4010"
        },
        dorange: {
          DEFAULT: "#7c0004"
        },
        yellow: {
          DEFAULT: "#D9BA45"
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

