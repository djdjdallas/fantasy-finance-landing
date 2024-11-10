/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E1E1E", // Main background
          dark: "#000000", // Darker background
          light: "#2C2C2C", // Lighter background
        },
        accent: {
          DEFAULT: "#4CAF50", // Green accent color
          hover: "#3d8b40", // Darker green for hover states
        },
        text: {
          primary: "#FFFFFF", // Primary text color
          secondary: "#BBBBBB", // Secondary text color
          tertiary: "#8E8E93", // Tertiary text color
        },
        border: {
          DEFAULT: "#333333", // Default border color
        },
      },
      borderRadius: {
        DEFAULT: "10px", // Default border radius
        lg: "12px", // Larger border radius
      },
      spacing: {
        container: "1200px", // Container max width
      },
    },
  },
  plugins: [],
};
