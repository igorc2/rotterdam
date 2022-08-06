/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#089083",
        "secondary": "#FEA36B",
        "neutral": "#FEA36B",
        "screen": "#FAFAFA",
        "wall": "#E5E5E5",
        "alert": "#FF3636"
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#E0A82E",
          "secondary": "#F9D72F",
          "accent": "#18182F",
          "neutral": "#18182F",
          "base-100": "#FFFFFF",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [
    require("daisyui"),
  ],
}
