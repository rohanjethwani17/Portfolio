/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        card: "hsl(var(--card))",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
        'fade-in': 'fade-in 0.7s ease-out forwards',
        'fade-in-delay-1': 'fade-in 0.7s ease-out 0.2s forwards',
        'fade-in-delay-2': 'fade-in 0.7s ease-out 0.4s forwards',
        'fade-in-delay-3': 'fade-in 0.7s ease-out 0.6s forwards',
        'fade-in-delay-4': 'fade-in 0.7s ease-out 0.8s forwards',
        'meteor': 'meteor 5s linear infinite',
      },
    },
  },
  plugins: [],
}