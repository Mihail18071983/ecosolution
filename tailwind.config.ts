import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "13": "repeat(13, minmax(0, 1fr))",
      },
      gridTemplateAreas: {
        'my-template': {
          a:["a b c d"],
          b:["e f g h"]
        }
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          sm: "20px",
          md: "30px",
          lg: "100px",
          xl: "100px",
          "2xl": "100px",
        },
      },
      colors: {
        "main-text-color": "#173D33",
        "hover-text-color": "#97D28B",
        "menu-text-color": "#ffff",
        "background-color": "#EAEDF1",
        "main-background-color": "#F3F5FA",
        slider: "rgba(23, 61, 51, 0.25)",
        error: "#D28B8B",
      },
      fontSize: {
        "10px": "10px",
        "12px": "12px",
        "33px": "33px",
        "14px": "14px",
        "16px": "16px",
        "18px": "18px",
        "20px": "20px",
        "24px": "24px",
        "28px": "28px",
        "36px": "36px",
        "48px": "48px",
      },
      fontFamily: {
        "all-round-gothic-thick": ["All Round Gothic Thick"],
        "ca-saygon-text": ["CA Saygon Text"],
        firaSans: ["var(--font-fira-sans)"],
        oswald: ["var(--font-oswald)"],
      },
      borderWidth: {
        DEFAULT: "1px",
        "0": "0",
        "2": "2px",
        "3": "3px",
        "4": "4px",
        "6": "6px",
        "8": "8px",
      },
      borderRadius: {
        "500px": "500px",
      },
      backgroundImage: {
        "svg-btn-icon": "url('../assets/svg/arrow-down.svg')",
        callIcon: "url('../assets/svg/call.svg')",
        smsIcon: "url('../assets/svg/sms.svg')",
        mapIcon: "url('../assets/svg/map.svg')",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "24px": "24px",
        "100%": "100%",
      },
    },
    keyframes: {
      shimmer: {
        "100%": {
          transform: "translateX(100%)",
        },
      },
    },
  },

  plugins: [require("@tailwindcss/forms")],
};
export default config;
