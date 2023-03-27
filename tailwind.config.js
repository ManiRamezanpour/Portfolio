/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './src/Layout/**/*.{js,jsx,ts,tsx}',
      './src/pages/**/*.{js,jsx,ts,tsx}',
      './src/components/**/*.{js,jsx,ts,tsx}',
      './src/common/**/*.{js,jsx,ts,tsx}',
   ],
   theme: {
      extend: {
         borderRadius: {
            '4xl': '2rem',
         },
         colors: {
            primary: '#675ba3',
            // secondary: '#43474E',
            secondary: "#B6A2BB",
            white: "#FFFFFF",
            darkblue: "#0A0027",
            gray: '#75707B'
         },
         letterSpacing: {
            'primary': '8.02px'
         },
         spacing: {
            128: "32rem",
            144: "36rem",
            160: "40rem",
         },
      },
   },
   plugins: [],
   darkMode: "class",
}
