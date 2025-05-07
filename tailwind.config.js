module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2D31A6",
          light: "#6B7280",
          dark: "#1E1B4B",
        },
        accent: {
          DEFAULT: "#22D3EE",
          light: "#67E8F9",
        },
        neutral: {
          DEFAULT: "#F3F4F6",
          dark: "#D1D5DB",
        },
        glass: {
          DEFAULT: "rgba(255, 255, 255, 0.1)",
          dark: "rgba(255, 255, 255, 0.05)",
        },
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #2D31A6 0%, #22D3EE 100%)",
        "cta-gradient": "linear-gradient(135deg, #1E1B4B 0%, #2D31A6 100%)",
      },
      backdropBlur: {
        glass: "10px",
      },
      animation: {
        "fade-in": "fadeIn 1.2s ease-out",
        "slide-up": "slideUp 1s ease-out",
        "bounce-slow": "bounce 3s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "scale-up": "scaleUp 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(34, 211, 238, 0.5)" },
          "50%": { boxShadow: "0 0 20px rgba(34, 211, 238, 0.8)" },
        },
        scaleUp: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};