/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     extend: {
      colors: {
        customBlue: 'rgb(22, 93, 134)',
      },
      
    },
  },
  plugins: [
    require('tailwindcss-animated'), 
  ],
}

