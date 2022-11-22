/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/icons/**/*.{js,jsx,ts,tsx}",
    "./src/layouts/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Plus Jakarta Sans", "Helvetica", "Arial"],
    },
    extend: {
      width: {
        4.5: "1.125rem",
        "1/20": "5%",
        "9/20": "45%",
        "5/100": "5%",
        "15/100": "15%",
        "25/100": "25%",
        "30/100": "30%",
        "40/100": "40%",
        "48/100": "48%",
        "60/100": "60%",
        "64/100": "64%",
        "70/100": "70%",
        "75/100": "75%",
        "80/100": "80%",
        "85/100": "85%",
        "90/100": "90%",
        "95/100": "95%",
        100: "25rem",
        120: "30rem",
      },
      height: {
        14: "3.5rem",
        15: "3.75rem",
        100: "25rem",
        120: "30rem",
        160: "40rem",
      },
      minWidth: {
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        7: "1.75rem",
        8: "2rem",
        10: "2.5rem",
        12: "3rem",
        14: "3.5rem",
        15: "3.75rem",
        16: "4rem",
        "1/4": "25%",
        "1/2": "50%",
        "2/3": "66.666667%",
      },
      maxWidth: {
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        7: "1.75rem",
        8: "2rem",
        10: "2.5rem",
        12: "3rem",
        14: "3.5rem",
        15: "3.75rem",
        16: "4rem",
        "1/4": "25%",
        "1/2": "50%",
        "2/3": "66.666667%",
      },
      minHeight: {
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        10: "2.5rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        "1/4": "25%",
        "1/2": "50%",
        "2/3": "66.666667%",
        120: "30rem",
      },
      maxHeight: {
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        10: "2.5rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        "1/4": "25%",
        "1/2": "50%",
        "2/3": "66.666667%",
      },
      screens: {
        "2xl": "1440px",
        "3xl": "1600px",
        "4xl": "1800px",
        "5xl": "1920px",
        "6xl": "2048px",
      },
      scale: {
        101: "1.01",
        102: "1.02",
        104: "1.04",
      },
      lineHeight: {
        8: "2rem",
        10: "2.5rem",
        12: "3rem",
      },
      colors: {
        "cuimc-gray": "rgb(238, 238, 238)",
        "cuimc-light-gray": "rgb(245, 245, 245)",
        "cuimc-dark-gray": "rgb(230, 230, 230)",
        "cuimc-dark-gray2": "rgb(200, 200, 200)",
        "cuimc-orange": "rgb(255, 163, 0)",
        "cuimc-blue": "#1d4f91",
        "columbia-secondary-blue": "rgb(108, 173, 223)",
        "cuimc-bg-blue": "rgb(0, 119, 200)",
        "cuimc-button-blue": "rgb(42, 116, 213)",
        "columbia-blue": "rgb(8, 73, 163)",
        "columbia-tertiary-blue": "#0077C8",
        "cuimc-footer": "rgb(65, 81, 108)",
        "button-blue": "#0067b8",
        "button-selected-blue": "#005293",
        "card-blue": "#0078d4",
        "ms-gray": "#f5f5f5",
        "apple-gray": "#f5f5f7",
      },
      boxShadow: {
        box: "0 15px 25px -5px rgb(0 0 0 / 0.5)",
      },
      borderWidth: {
        3: "3px",
      },
      zIndex: {
        80: "80",
        100: "100",
      },
      gridTemplateColumns: {
        // Simple 20 column grid
        20: "repeat(20, minmax(0, 1fr))",
      },
      gridColumn: {
        "span-18": "span 18 / span 18",
      },
      strokeWidth: {
        2: "2px",
        3: "3px",
        4: "4px",
      },
    },
  },
  plugins: [],
}
