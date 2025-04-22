/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}", // ✅ added
    "node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}", // ✅ added
  ],
  theme: {
    extend: {
      colors: {
        "navy-blue": "#003366",
        golden: "#FFD700",
      },
    },
  },
  plugins: [],
};
