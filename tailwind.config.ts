import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        bitter: ['var(--font-bitter)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'bg-hero': 'url(/assets/bg-hero.jpg)',
        'bg-hero-50-opacity': 'url(/assets/bg-hero-50-opacity.jpg)',
        'bg-about-me': 'url(/assets/bg-about-me.jpg)',
        'bg-about-me-transparent': 'url(/assets/bg-about-me-transparent.png)',
        'bg-tree': 'url(/assets/bg-tree.jpg)',
        'bg-collaborations': 'url(/assets/bg-collaborations.jpg)',
        'bg-project-1': 'url(/assets/bg-project-1.jpg)',
        'bg-project-2': 'url(/assets/bg-project-2.jpg)',
        'bg-project-3': 'url(/assets/bg-project-3.jpg)',
        'bg-project-4': 'url(/assets/bg-project-4.jpg)',
      },
      // backgroundPosition: {
      //   'bottom-4': 'center bottom',
      // },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '5xl': '2200px',
      },
      colors: {
        blue: {
          350: '#4A5468',
          450: '#445470',
          550: '#586187',
          650: '#404D63',
          750: '#284B63',
          790: '#25475E',
          850: '#2D3142',
          950: '#14213D',
        },
        gray: {
          25: '#F7F9FC',
          50: '#D9D9D9',
          75: '#C2C0C0',
          150: '#BFC0C0',
          550: '#BDBDBD',
          650: '#4F5D75',
          750: '#444444',
          850: '#353535',
          950: '#2B2B2B',
          1050: '#30333D',
          1150: '#252525',
        },
        yellow: {
          1050: '#FFBA08',
          1150: '#F5B100',
        },
        orange: {
          150: '#F37F4C',
          250: '#F26B30',
          750: '#F77F00',
          850: '#FCA311',
          950: '#E28D00',
          1050: '#FF7D00',
          1150: '#F17600',
        },
        red: {
          1050: '#D90429',
          1150: '#D00629',
          1250: '#EF233C',
        },
        green: {
          750: '#3C6E71',
          1050: '#136F63',
          1150: '#10695E',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
export default config;
