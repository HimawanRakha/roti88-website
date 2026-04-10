import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF7900", // orange utama
        secondary: "#632721", // brown merah
        accent: "#FFF800", // kuning
        dark: "#231709", // coklat gelap
        "dark-brown": "#5D2B21", // navbar bar
      },
      fontFamily: {
        // Heading besar - "ROTI" di hero
        serif: ["DM Serif Display", "Georgia", "serif"],
        // Navbar, button, label
        lora: ["Lora", "Georgia", "serif"],
        // Body text
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: ["clamp(80px,12vw,200px)", { lineHeight: "1" }],
        "section-title": ["clamp(28px,3vw,50px)", { lineHeight: "1.2" }],
        "stat-big": ["clamp(48px,6vw,96px)", { lineHeight: "1" }],
      },
      backgroundImage: {
        "gradient-orange": "linear-gradient(135deg, #FF7900 0%, #FF9500 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
