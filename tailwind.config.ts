import type { Config } from 'tailwindcss';

import { colors, fonts, fontSize, fontWeight } from './src/styles/theme';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/common/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/features/Home/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/features/HeroSection/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/layout/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/constants/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/utils/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: ['text-h1', 'text-h2', 'text-h3', 'text-h4', 'text-h5', 'text-h6'],
  theme: {
    fontWeight,
    fontSize,
    fontFamily: fonts,
    extend: {
      colors,
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '6.5': '1.625rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      backgroundImage: {
        'dotted-pattern': 'url("/images/dottedbackground.svg")',
        'snare-pattern': 'url("/images/homebgimages/customersectionbg.svg")',
        'entrepreneurship-bg':
          'url("/images/programsimg/programsImages/programsModal/backgroundImage/entrepreneurship.svg")',
        'studyabroad-bg': 'url("/images/programsimg/programsImages/programsModal/backgroundImage/studyabroad.svg")',
        'Internshiphub-bg': 'url("/images/programsimg/programsImages/programsModal/backgroundImage/Internshiphub.svg")',
        'financial-bg': 'url("/images/programsimg/programsImages/programsModal/backgroundImage/financial.svg")',
        'squarebackground': 'url("/images/backgrounds/squarebackground.svg")',
      },
      boxShadow: {
        'button-glow': `0 0 50px ${colors.secondary[50]}, 0 0 50px ${colors.secondary[100]}`,
      },
    },
  },
  plugins: [],
} satisfies Config;
