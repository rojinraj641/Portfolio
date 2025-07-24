export default {
     theme: {
        extend: {
         fontFamily: {
            poppins: ['Poppins','sans-serif']
         }
        }, 
    },
   plugins: [
      require('tailwindcss-motion'),
      require('tailwind-scrollbar-hide')
   ], 
};