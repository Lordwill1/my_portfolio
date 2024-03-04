import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        jet: '#333333',
        onyx: '#0F0F29',
        'eerie-black-1': '#1E1E35',
        'eerie-black-2': '#1C1C32',
        'smoky-black': '#111111',
        'smoky-gray': '#383838',
        'gray': '#9f9f9f',
        white: '#FFFFFF',
        litewhite: '#FAFAFA',
        'orange-yellow-crayola': '#FFA823',
        'vegas-gold': '#FFC254',
        'light-gray': '#D6D6D6',
        'light-gray-70': 'rgba(214, 214, 214, 0.7)',
        'bittersweet-shimmer': '#FF6E84',
      },
      backgroundImage: {
        'smoky-black': '#121212',
        'eerie-black': '#1e1e1f',
        'smoky-gray': '#39393a',
      },
      fontWeight: {
        '100': '100',
        '200': '200',
        '300': '300',
        '400': '400',
        '500': '500',
        '600': '600',
        '700': '700',
        '800': '800',
        '900': '900',
      },
    },
  },
  plugins: [],
}
export default config
