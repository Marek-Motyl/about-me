import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      flexGrow: {
        1: '1',
        2: '2',
        3: '3',
      },
      colors: {
        'base-blue': '#0927eb',
        'base-beige': '#f4f2ee'
      }
    },
  },
  plugins: [],
}
export default config
