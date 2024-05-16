import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: { center: true },
    extend: {
      colors: {
        'purple-1': '#7857FF',
        'purple-2': '#1D1928',
        'pink-1': '#FF0073',
        'light-1': '#F5F5F5',
        'light-2': '#808080',
        'light-3': '#626067',
        'dark-1': '#100817',
        'dark-2': '#34303E',
        'blue-1': '#016FD5',
      },
      fontSize: {
        'heading1-bold': ['36px', { lineHeight: '100%', fontWeight: '700' }],
        'heading2-bold': ['30px', { lineHeight: '140%', fontWeight: '700' }],
        'heading3-bold': ['24px', { lineHeight: '140%', fontWeight: '700' }],
        'heading4-bold': ['20px', { lineHeight: '140%', fontWeight: '700' }],
        'body-bold': ['18px', { lineHeight: '140%', fontWeight: '700' }],
        'body-normal': ['18px', { lineHeight: '140%', fontWeight: '500' }],
        'base-bold': ['16px', { lineHeight: '140%', fontWeight: '600' }],
        'small-bold': ['14px', { lineHeight: '140%', fontWeight: '600' }],
        'small-semibold': ['14px', { lineHeight: '140%', fontWeight: '500' }],
        'subtle-medium': ['12px', { lineHeight: '16px', fontWeight: '500' }],
        'tiny-medium': ['10px', { lineHeight: '140%', fontWeight: '500' }],
        'x-small-semibold': ['7px', { lineHeight: '9px', fontWeight: '600' }],
      },
    },
  },
  plugins: [],
}

export default config
