/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,md,tsx,jsx,vto}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto Sans", "sans-serif"],
        heading: ["Roboto Slab", "serif"],
        mono: ["Fira Code", "monospace"],
      },
      colors: {
        primary: "rgb(65, 224, 41)", // Bright green
        "primary-dark": "rgb(53, 188, 31)", // Darker green for hover states
        secondary: "rgb(240, 253, 237)", // Light green background
        "secondary-foreground": "rgb(29, 91, 17)", // Dark green text on secondary background
        text: {
          primary: "hsl(215, 25%, 27%)",
          muted: "hsl(215, 15%, 47%)",
        },
        border: "hsl(214.3, 31.8%, 91.4%)",
        green: {
          50: "rgb(240, 253, 237)",
          100: "rgb(226, 251, 221)",
          200: "rgb(190, 246, 185)",
          300: "rgb(149, 239, 145)",
          400: "rgb(104, 232, 98)",
          500: "rgb(65, 224, 41)", // Main brand green
          600: "rgb(53, 188, 31)",
          700: "rgb(43, 153, 25)",
          800: "rgb(34, 120, 20)",
          900: "rgb(29, 91, 17)",
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.primary'),
              '&:hover': {
                color: theme('colors.primary-dark'),
              },
            },
            h2: {
              color: theme('colors.primary'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
