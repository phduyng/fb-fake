/** @type {import('tailwindcss').Config} */

import { withUt } from "uploadthing/tw";

module.exports = withUt({
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        'background-2': "hsl(var(--background-2))",
        'background-3': "hsl(var(--background-3))",
        'background-search': "hsl(var(--background-search))",
        'primary-text': "hsl(var(--primary-text))",
        'secondary-text': "hsl(var(--secondary-text))",
        'tertiary-text': "hsl(var(--tertiary-text))",
        'radio-checked': "hsl(var(--radio-checked))",
        'thumd-sidebar': "hsl(var(--thumd-sidebar))",
        'hover-menu': "hsl(var(--hover-menu))",
        'hover-nav-right': "hsl(var(--hover-nav-right))",
        'hover-1': "hsl(var(--hover-1))",
        'line': "hsl(var(--line))",
        'icon': "hsl(var(--icon))",
        bg: {
          primary: "hsl(var(--bg-1))",
          secondary: "hsl(var(--bg-2))",
          tertiary: "hsl(var(--bg-3))",
        },
        text: {
          primary: "hsl(var(--text-1))",
          secondary: "hsl(var(--text-2))",
        },
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          light: "hsl(var(--primary-light))",
          superlight: "hsl(var(--primary-superlight))",
          hyperlight: "hsl(var(--primary-hyperlight))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      screens: {
        '700': '700px',
        '900': '900px',
        '1100': '1100px',
        '1300': '1300px',
        '1260': '1260px',
      },
      boxShadow: {
        'menubar': '0 4px 6px -1px rgb(var(--shadow-menu)), 0 2px 4px -2px rgb(var(--shadow-menu))',
        'menubar2': '0 1px 2px -1px rgb(var(--shadow-menu)), 0 1px 2px -2px rgb(var(--shadow-menu))',
        'active': '0px 3px 0px 0px hsl(217 100% 52%)',
        'account-homepage': '0px 2px 12px 1px rgba(0, 0, 0, 0.2)',
        'form': '0px 2px 4px 1px rgba(0, 0, 0, 0.2)',
        "card-friend" : 'var(--shadow-card-friend)',
        "main-nav": 'var(--shadow-main-nav)',
      },
      gridTemplateColumns: {
        'home': '1fr 792.8px 1fr'
      }
    },
  },
  plugins: [require("tailwindcss-animate"),  require('tailwind-scrollbar-hide')],
})