import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      }, fontFamily: {
        poppinsFont: "var(--poppinsFont)"
      },
      extend: {
        backgroundImage: {
          'bg1': "url('../@/assets/bg1.png')",
        },
    }
    },
  },
  plugins: [],
};
export default config;
