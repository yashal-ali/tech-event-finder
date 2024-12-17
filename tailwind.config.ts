import type { Config } from "tailwindcss";



module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        headingColor: "#034D82",
        textColor: "#90A3B4",
       
      },
      backgroundColor: {
        button: "#eeebe6a1",
      },
      fontFamily: {
        sans: ["NOIRetBLANC"],
        helvetica: "Helvetica",
      },
    },
  },
  plugins: [],
}satisfies Config;