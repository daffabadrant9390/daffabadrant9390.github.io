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
        'bg-tree': 'url(/assets/bg-tree.jpg)',
        'bg-collaborations': 'url(/assets/bg-collaborations.jpg)',
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
          750: '#284B63',
          790: '#25475E',
          850: '#2D3142',
        },
        gray: {
          50: '#D9D9D9',
          150: '#BFC0C0',
          650: '#4F5D75',
          750: '#444444',
          850: '#353535',
          950: '#2B2B2B',
        },
        orange: {
          850: '#FCA311',
          950: '#E28D00',
        },
        green: {
          750: '#3C6E71',
        },
      },
    },
  },
  plugins: [],
};
export default config;
