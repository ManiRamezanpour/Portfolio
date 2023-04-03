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
            // ? purple theme
            primary: '#865DFF',
            secondary: "#FFA3FD",
            light: "#F0EEED",
            dark: "#191825",
            // ? pink theme
            // primary: '#C92C6D',
            // secondary: "#609EA2",
            // light: "#F0EEED",
            // dark: "#332C39",
            // ? blue theme
            // primary: '#19A7CE',
            // secondary: "#146C94",
            // light: "#F6F1F1",
            // dark: "#000000",
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
