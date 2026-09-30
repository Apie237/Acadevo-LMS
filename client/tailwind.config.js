/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // ToppestTech brand palette
        navy: {
          DEFAULT: "#071A3D",
          900: "#050F26",
          800: "#071A3D",
          700: "#0C2552",
          600: "#12336B",
        },
        brand: {
          DEFAULT: "#146EF5",
          50: "#EAF3FF",
          100: "#D6E7FF",
          200: "#A9CCFF",
          300: "#6FA9FB",
          400: "#3D8BF8",
          500: "#146EF5",
          600: "#0F5AD0",
          700: "#0C47A6",
        },
        ink: "#0F172A",
        muted: "#64748B",
        line: "#E2E8F0",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px -8px rgba(15, 23, 42, 0.08)",
        lift: "0 2px 4px rgba(15, 23, 42, 0.04), 0 20px 40px -12px rgba(15, 23, 42, 0.16)",
        glow: "0 10px 30px -10px rgba(20, 110, 245, 0.55)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
