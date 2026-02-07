/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff9ff3", // কেকের মতো পিংক (Home)
        secondary: "#54a0ff", // নীল আকাশ (Menu)
        accent: "#feca57", // হলুদ (Offer)
        glass: "rgba(255, 255, 255, 0.25)", // গ্লাস এফেক্ট
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        cursive: ["Dancing Script", "cursive"], // কেকের লেখার জন্য স্টাইলিশ ফন্ট
      },
    },
  },
  plugins: [],
};
