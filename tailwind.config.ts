import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/theme';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      grey: '#4A4A4A',
      darkGreen:"#008C3A",
      lightGreen:'#5AB542',
      lighter:'#DFFFD6',
      danger:'#FF4747',
      white:'#FFFFFF'
    }
  },
  darkMode: "class",
  plugins: [nextui()],
}
export default config