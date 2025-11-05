module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8B7355", // Warm brown
        secondary: "#D4C4B7", // Light beige
        accent: "#A67F5D", // Darker beige/brown
        background: "#F5F1EA", // Very light beige
        surface: "#EBE6DD", // Slightly darker background
        brandText: "#4A4036", // Warm dark brown for text
      },
      animation: {
        "sparkle-1": "sparkle 3s ease-in-out infinite",
        "sparkle-2": "sparkle 3s ease-in-out infinite 1.5s",
        ping: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        sparkle: {
          "0%, 100%": {
            opacity: 0,
            transform: "translateY(-20%) translateX(-20%) rotate(0deg)",
          },
          "50%": {
            opacity: 1,
            transform: "translateY(0) translateX(0) rotate(180deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
