const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      'xs-normal': [
        '12px',
        {
          lineHeight: '16.34px',
          fontWeight: '400',
        },
      ],
      xs: [
        '12px',
        {
          lineHeight: '18px',
          fontWeight: '600',
        },
      ],
      sm: [
        '14px',
        {
          lineHeight: '19px',
          fontWeight: '400',
        },
      ],
      'base-medium': [
        '15',
        {
          lineHeight: '22.5px',
          fontWeight: '500',
        },
      ],
      base: [
        '15',
        {
          lineHeight: '22.5px',
          fontWeight: '700',
        },
      ],
      lg: [
        '17px',
        {
          lineHeight: '23.15px',
          fontWeight: '400',
        },
      ],
      xl: [
        '18px',
        {
          lineHeight: '27px',
          fontWeight: '600',
        },
      ],
      '2xl': [
        '22px',
        {
          lineHeight: '33px',
          fontWeight: '600',
        },
      ],
      '3xl': [
        '26px',
        {
          lineHeight: '39px',
          fontWeight: '600',
        },
      ],
      '2xl': [
        '32px',
        {
          lineHeight: '44.8px',
          fontWeight: '600',
        },
      ],
    },
    colors: {
      transparent: 'transparent',
      primary: {
        100: '#F9F9F9',
        200: '#F9F9F9',
        300: '#F5F5F5',
        400: '#EBEBEB',
        500: '#D1D1D1',
        600: '#A9A9A9',
        700: '#575757',
        800: '#151515',
      },
      secondary: {
        100: '#F4F8EC',
        200: '#C8DEB3',
        300: '#92C064',
        400: '#46760A',
        500: '#6A983C',
      },
      amber: {
        100: '#FFF9F0',
        200: '#FAEDD8',
        300: '#ECD2A6',
        400: '#B28A48',
        500: '#D0A866',
      },
      orange: {
        100: '#FFF1ED',
        200: '#F7C6B7',
        300: '#EB8D70',
        400: '#C7522D',
        500: '#E5704B',
      },
      cyan: {
        100: '#ECF6F6',
        200: '#B9E6E8',
        300: '#7CD0D3',
        400: '#19B2B8',
        500: '#37D0D6',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '45px',
        // sm: '2rem',
        // lg: '4rem',
        // xl: '45px',
      },
    },
    extend: {
      fontFamily: {
        openSans: ['var(--font-openSans)', ...fontFamily.sans],
        poppins: ['var(--font-poppins)', ...fontFamily.sans],
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1260px',
      },
    },
  },
  plugins: [],
};

