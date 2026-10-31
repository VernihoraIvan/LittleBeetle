/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // Three layouts only: mobile (default), tablet (md), desktop (lg)
    screens: {
      md: "768px",
      lg: "1024px",
    },
    extend: {
      fontFamily: {
        primaryRegular: ["mRegular", "system-ui", "sans-serif"],
        primarySBold: ["mSBold", "system-ui", "sans-serif"],
        primaryBold: ["mBold", "system-ui", "sans-serif"],
        secondaryRegular: ["pRegular", "system-ui", "sans-serif"],
        secondarySBold: ["pSBold", "system-ui", "sans-serif"],
        secondaryBold: ["pBold", "system-ui", "sans-serif"],
      },
      colors: {
        primWhite: "#FFFFFF",
        primBeige: "#FFFCF3",
        primWhiteFaint: "rgba(255, 255, 255, 0.8)",
        primWhiteFaintM: "rgba(255, 255, 255, 0.5)",
        primPurple: "#300B50",
        primPurpleFaint: "rgba(48, 11, 80, 0.8)",
        primPurpleFaintM: "rgba(48, 11, 80, 0.5)",
        hovYellow: "#FFD036",
        textYellow: "#FCC513",
        bgPink: "#9E7EB7",
        inputPink: "#666",
        whiteHover: "rgba(190, 158, 217, 0.30)",
        purpleHover: "#711EB8",
        pinkBar: "#D9D9D9",
        alertRed: "#D00",
        lilac: "#BE9ED9",
      },
      maxWidth: {
        page: "1280px",
        prose: "68ch",
      },
      boxShadow: {
        card: "0 1px 2px rgba(48, 11, 80, 0.04), 0 8px 24px -8px rgba(48, 11, 80, 0.12)",
        lift: "0 2px 4px rgba(48, 11, 80, 0.06), 0 16px 40px -12px rgba(48, 11, 80, 0.22)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-in": { from: { opacity: "0" }, to: { opacity: "1" } },
        "pop-in": {
          from: { opacity: "0", transform: "translate(-50%, -48%) scale(0.98)" },
          to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        },
        "sheet-up": {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
        "slide-in-right": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 200ms ease-out",
        "pop-in": "pop-in 280ms cubic-bezier(0.22, 1, 0.36, 1)",
        "sheet-up": "sheet-up 320ms cubic-bezier(0.22, 1, 0.36, 1)",
        "slide-in-right": "slide-in-right 320ms cubic-bezier(0.22, 1, 0.36, 1)",
      },
      backgroundImage: {
        "about-bg2": "url('/src/assets/images/compressed/about-bg2.jpg')",
        "donation-bg": "url('/src/assets/images/compressed/donation-bg.jpg')",
        "contacts-bg": "url('/src/assets/images/compressed/contacts-bg.jpg')",
        "creators-bg": "url('/src/assets/images/compressed/creators-bg.jpg')",
      },
    },
  },
  plugins: [],
};
