// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Add Roboto as the default sans stack and keep Michroma available
        sans: ["Roboto", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial"],
        michroma: ["Michroma", "sans-serif"], // kept for headings that use Michroma
      },
    },
  },
  plugins: [],
};
