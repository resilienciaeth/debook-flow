/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        lg: { min: "1800px" },
        nm: { min: "1300px" },
        md: { min: "750px" },
        sm: { min: "600px" },
        xs: { min: "450px" },
      },
      colors: {
        "debook-1": "#FF4227",
        "debook-2": "#E85A46",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
