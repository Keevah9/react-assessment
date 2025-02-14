import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";


export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'x-hover',
    'o-hover',
  ],
  theme: {
    screens: {
  		sm: '640px',
  		md: '768px',
  		lg: '1024px',
  		xl: '1280px',
  		'2xl': '1536px'
  	},
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    fontFamily: {
      quicksand: ["Quicksand", ...defaultTheme.fontFamily.sans],
      jar: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
      },
  },
  plugins: [],
} satisfies Config;
