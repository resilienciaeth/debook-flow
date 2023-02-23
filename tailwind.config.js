/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "debook-1": "#FF4227",
        "debook-2": "#E85A46",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
