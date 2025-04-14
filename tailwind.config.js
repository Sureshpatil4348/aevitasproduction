/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4361ee',
          dark: '#3a56d4',
          light: '#4895ef',
        },
        secondary: {
          DEFAULT: '#7209b7',
          dark: '#560bad',
          light: '#9d4edd',
        },
        accent: {
          DEFAULT: '#f72585',
          dark: '#d61d6e',
          light: '#ff4d6d',
        },
        rich: {
          DEFAULT: '#2c6e49',
          gold: '#ffc857',
        },
        conbuster: {
          DEFAULT: '#2d3142',
          accent: '#ef233c',
        },
        whodunit: {
          DEFAULT: '#3d405b',
          accent: '#984447',
        },
        showdown: {
          DEFAULT: '#3d5a80',
          accent: '#ee6c4d',
        },
        rankitup: {
          DEFAULT: '#118ab2',
          accent: '#ffd166',
        },
        dark: '#121212',
        light: '#f8f9fa',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('/images/hero-bg.svg')",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
} 