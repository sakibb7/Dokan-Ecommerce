/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': {'max': '480px'},
      // => @media (min-width: 640px) { ... }

     'md': '481px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily:{
        mainFont: ["Poppins", "sans-serif"],
      },

      colors: {
        mainColor:"#1f2937",
        secondaryColor: "#334155",
        headingColor:"rgb(1,1,1)",
        ashColor:"rgb(121,123,121)",
      },
      fontSize: {
        clamp: "clamp(1.875rem, 3.5vw, 6rem)",
        clamp2:"clamp(400px, 5.5vw, 900px)",
      },
      width:{
      }
    },
  },
  plugins: [],
}

