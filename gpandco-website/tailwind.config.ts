import type { Config } from "tailwindcss";

// NOTE: In Tailwind v4, custom tokens are defined in globals.css using @theme.
// This file only retains content scanning paths.
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};

export default config;
