import { fontFamily } from 'tailwindcss/defaultTheme';

export const colors = {
  primary: {
    50: '#CDD2F4',
    100: '#9BA5E9',
    200: '#6A78DF',
    300: '#384BD4',
    400: '#061EC9',
    500: '#0518A1',
    600: '#041279',
    700: '#020C50',
    800: '#010628',
  },
  secondary: {
    50: '#FDCDD4',
    100: '#FB9BA9',
    200: '#F8687D',
    300: '#F63652',
    400: '#F40427',
    500: '#C3031F',
    600: '#920217',
    700: '#620210',
    800: '#310108',
  },
  ternary: {
    50: '#FFFACC',
    100: '#FFF599',
    200: '#FFEF66',
    300: '#FFEA33',
    400: '#FFE500',
    500: '#CCB700',
    600: '#998900',
    700: '#665C00',
    800: '#332E00',
  },
  grayVariants: {
    50: '#4F4F4F',
    100: '#282828',
    200: '#1D1D1D',
  },
  success: '#28A745',
  error: '#FF0000',
  warning: '#FFCC00',
  information: '#40c4FF',
  content: '#333333',
  footer: '#F5F5F5',
};

export const fonts = {
  lora: ['Lora', ...fontFamily.serif], // For headings
  lato: ['Lato', ...fontFamily.sans], // For body
};

export const fontWeight = {
  bold: '700', // Bold
  semibold: '600', // SemiBold
  medium: '500', // Medium
  regular: '400', // Regular
};

export const fontSize = {
  //Web
  h1: ['3rem', { lineHeight: '120%' }] as [string, { lineHeight: string }], // 48px
  h2: ['2.5rem', { lineHeight: '120%' }] as [string, { lineHeight: string }], // 40px
  h3: ['2.125rem', { lineHeight: '120%' }] as [string, { lineHeight: string }], // 34px
  h4: ['1.75rem', { lineHeight: '120%' }] as [string, { lineHeight: string }], // 28px
  h5: ['1.5rem', { lineHeight: '120%' }] as [string, { lineHeight: string }], // 24px
  h6: ['1.25rem', { lineHeight: '120%' }] as [string, { lineHeight: string }], // 20px
  'body-xl': ['1.5rem', { lineHeight: '160%' }] as [string, { lineHeight: string }], // 24px
  'body-lg': ['1.25rem', { lineHeight: '160%' }] as [string, { lineHeight: string }], // 20px
  'body-md': ['1rem', { lineHeight: '160%' }] as [string, { lineHeight: string }], // 16px
  'body-sm': ['0.875rem', { lineHeight: '160%' }] as [string, { lineHeight: string }], // 14px
  'body-xs': ['0.75rem', { lineHeight: '160%' }] as [string, { lineHeight: string }], // 12px

  //Mobile
  'mob-h1': ['1.875rem', { lineHeight: '120%' }] as [string, { lineHeight: string }], // 30px
  'mob-h2': ['1.5rem', { lineHeight: '120%' }] as [string, { lineHeight: string }], // 24px
  'mob-h3': ['1.375rem', { lineHeight: '120%' }] as [string, { lineHeight: string }], //22px
  'mob-h4': ['1.25rem', { lineHeight: '120%' }] as [string, { lineHeight: string }], // 20px
  'mob-h5': ['1.125rem', { lineHeight: '120%' }] as [string, { lineHeight: string }], // 18px
  'mob-h6': ['1rem', { lineHeight: '120%' }] as [string, { lineHeight: string }], // 16px
  'mob-body-xl': ['1.375rem', { lineHeight: '160%' }] as [string, { lineHeight: string }], // 22px
  'mob-body-lg': ['1rem', { lineHeight: '160%' }] as [string, { lineHeight: string }], // 16px
  'mob-body-md': ['0.875rem', { lineHeight: '160%' }] as [string, { lineHeight: string }], // 14px
  'mob-body-sm': ['0.75rem', { lineHeight: '160%' }] as [string, { lineHeight: string }], // 12px
  'mob-body-xs': ['0.625rem', { lineHeight: '160%' }] as [string, { lineHeight: string }], // 10px
};
