/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        "800px": "800px",
      },
      width: {
        "450px": "450px",
      },
      padding: {
        "80px":
          "80px" /* Adjust this value based on the actual height of your navbar */,
      },
    },
  },
  plugins: [],
};
