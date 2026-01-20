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
        background: '#1e1f22',
        primary: '#2b2d31',
        secondary: '#383a40',
        accent: '#5865f2',
        'text-primary': '#ffffff',
        'text-secondary': '#b9bbbe',
      },
    },
  },
  plugins: [],
}
export default config
