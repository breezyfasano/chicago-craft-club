module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: {
      fontSize: {
        xxs: '0.875rem', //14px
        xs: '1rem', //16px
        base: '1rem', //18px
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
      colors: {
        transparent: 'transparent',
        blue: '#3D69F0',
        sky: '#ABAEFF',
        pink: '#F0BBF3',
        yellow: '#FAFF7E',
        beige: '#FFF2EA',
        gray: '#1E1E1E',
        black: '#000000',
        white: '#FFFFFF',
        boobs: {
          hotpink: '#ec2b68',
          pink: '#e482b0',
          purple: '#9c5f86',
        },
      },
    },
    fontFamily: {
      sans: ['Libre Franklin', 'sans-serif'],
      display: ['Dela Gothic One', 'sans-serif'],
    },
  },
  plugins: [],
}
