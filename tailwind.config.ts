import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradent-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },

    backgroundImage: {
      "bg-gradient-head": "radial-gradient(currentColor 1px, #aac400 1px), radial-gradient(currentColor 1px, transparent 1px)",
    },

    colors: {
      // Configure your color palette here
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
};
export default config;
