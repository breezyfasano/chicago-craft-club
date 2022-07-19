module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: '0.875rem', //14px
        xs: '1rem', //16px
        base: '1.05rem', //16.8px
        sm: '1.125rem', // 18px
        md: '1.25rem', // 20px
        lg: '1.375rem', // 22px
        xl: '1.5rem', // 24px
        '2xl': '1.5625rem', // 25px
        '3xl': '2.1875rem', // 35px
        '4xl': '2.5rem', // 40px
        '5xl': '3.125rem', // 50px
      },
      screens: {
        '3xl': '2560px',
      },
      spacing: {
        30: '1.875rem', //30px,
      },
    },
    fontFamily: {
      sans: ['Libre Franklin', 'sans-serif'],
    },
  },
  plugins: [],
}
