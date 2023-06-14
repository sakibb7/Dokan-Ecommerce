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
    extend: {
      fontFamily:{
        mainFont: ["Poppins", "sans-serif"],
      },

      colors: {
        mainColor:"#1f2937",
        secondaryColor: "#334155",
        headingColor:"rgb(1,1,1)",
        ashColor:"rgb(121,123,121)",
      }
    },
  },
  plugins: [],
}

