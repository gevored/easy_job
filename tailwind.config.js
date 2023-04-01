/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Karla", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "main-blue-200": "#19A7CE",
        "main-blue-300": "#146C94",
        "off-white": "#F6F1F1",
        borderInput: "#cccccc",
        input: "#172B4D",
      },
    },
  },
  plugins: [],
};
