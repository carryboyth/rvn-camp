
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'kanit': ['Kanit', 'sans-serif'],
        'sans': ['Kanit', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#1f2937", // เทาเข้ม
          foreground: "#f9fafb",
        },
        secondary: {
          DEFAULT: "#6b7280", // เทากลาง
          foreground: "#f9fafb",
        },
        accent: {
          DEFAULT: "#f3f4f6", // เทาอ่อน
          foreground: "#1f2937",
        },
        muted: {
          DEFAULT: "#f9fafb",
          foreground: "#6b7280",
        },
        luxury: {
          dark: "#111827", // เทาดำ
          charcoal: "#374151", // ถ่าน
          silver: "#9ca3af", // เงิน
          platinum: "#e5e7eb", // แพลทินัม
          pearl: "#f9fafb", // ไข่มุก
        },
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-in": {
          "0%": {
            opacity: "0",
            transform: "translateX(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "slide-in": "slide-in 0.6s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
