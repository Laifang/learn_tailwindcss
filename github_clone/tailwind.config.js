/** @type {import('tailwindcss').Config} */

const generateWidthClasses = () => {
  const widthClasses = {};
  for (let i = 1; i <= 100; i++) {
    widthClasses[`${i}/100`] = `${i}%`;
  }
  return widthClasses;
};


module.exports = {
  content: ["src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      width: generateWidthClasses(),
    },
  },
  plugins: [],
}


