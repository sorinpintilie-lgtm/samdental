import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // 1. Scan src folder (if you have it)
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    
    // 2. Scan root folder (if you don't use src)
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-nunito)', 'sans-serif'], 
        body: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        dristor: {
          bg: '#F4F9F9',
          surface: '#FFFFFF',
          accent: '#4FD1C5',
          accentDark: '#38B2AC',
          text: '#2C3E50',
          textLight: '#5D7285',
          highlight: '#E6FFFA',
        }
      },
      borderRadius: {
        'blob': '30% 70% 70% 30% / 30% 30% 70% 70%',
      }
    },
  },
  plugins: [],
};
export default config;