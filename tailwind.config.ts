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
        "sage": "#ACBD86",
        "sage-light": "#bac99c",
        "stale-gray": "#28544B",
        "caramel": "#ffc880",
        "orange": "#FFA06F",
        "peach": "#ffbd66",
        "olive": "#ACBD86",
        "olive-shadow": "#718448",
      },
     
    },
  },
  plugins: [],
};
export default config;
