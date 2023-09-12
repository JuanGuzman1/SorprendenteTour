module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        'primary': '#00b11d'
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};
