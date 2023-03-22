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
         spacing: {
            '8xl': '96rem',
            '9xl': '128rem',
         },
         borderRadius: {
            '4xl': '2rem',
         },
         colors: {
            primary: '#675ba3',
            secondary: '#43474E',
         },
       },
   },
   plugins: [],
}
