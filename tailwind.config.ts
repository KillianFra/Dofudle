import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      backgroundColor: {
        dbutton: "#C2E103",
        dsecondary: "#5F5F5E",
        dprimary: "#242621"
      },
      backgroundImage: {
        "dbackground": "url('/background.jpg')"
      },
      borderColor: {
        dsecondary: "#5F5F5E",
        dprimary: "#242621"
      }
    },
  },
  plugins: [],
} satisfies Config;
