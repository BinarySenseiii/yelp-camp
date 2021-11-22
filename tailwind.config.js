module.exports = {
   mode: 'jit',
   content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
   ],
   theme: {
      extend: {
         fontFamily: {
            headings: ['Poppins', 'sans-serif'],
            body: ['Lato', 'sans-serif'],
         },
         backgroundImage: {
            'hero-pattern': "url('/assets/hero-image.jpg')",
         },
         textColor: {
            primary: 'rgba(70,70,70,.8)',
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
}
