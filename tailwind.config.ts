import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{
        xsm:"500px",
        sm:"600px",
        md:"690px",
        lg:"988px",
        xl:"1078px",
        xxl:"1265px",

      },
      colors: {
        textgray:"#71767b",
        lighttextgray:"#e7e9ea",
        bordergray:"#2f3336",
        inputgray:"#202327",
        iconblue:"#1d9bf0",
        icongreen:"#00ba7c",
        iconpink:"#f91880"
      },
    },
  },
  plugins: [],
} satisfies Config;
