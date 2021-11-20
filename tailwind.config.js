module.exports = {
  mode: 'jit',
  darkMode: 'class',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'headings': ['Poppins', 'sans-serif'],
        'body': ['Lato', 'sans-serif'],
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
