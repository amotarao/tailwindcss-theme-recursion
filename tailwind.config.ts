import { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        nav: "theme(spacing.16)"
      },
    },
  },
  plugins: [],
} satisfies Config;
