/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primaryRegular: ["mRegular"],
        primaryBold: ["mBold"],
        secondaryRegular: ["pRegular"],
        secondaryBold: ["pBold"],
      },
      screens: {
        xxs: { max: "460px" },
        // => @media (max-width: 460px) { ... }
        xs: { max: "639px" },
        // => @media (max-width: 639px) { ... }
        sm: { max: "767px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }
        md: { min: "768px" },
        // => @media (min-width: 768px and max-width: 1023px) { ... }
        lg: { min: "1024px", max: "1279px" },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }
        xl: { min: "1280px", max: "1563px" },
        // => @media (min-width: 1280px and max-width: 1563px) { ... }
        xxl: { min: "1564px" },
        // => @media (min-width: 1564px ) { ... }
      },
      width: {
        fit: "fit-content",
      },
      spacing: {
        contW: "1564px",
        headerPad: "100px",
        navPad: "70px",
        navMar: "25%",
        customPosition: "10% 60%",
        secH: "980px",
        secH2: "500px",
      },
      colors: {
        primWhite: "#FFFFFF",
        primBeige: "#FFFCF3",
        primWhiteFaint: "rgba(255, 255, 255, 0.8)",
        primPurple: "#300B50",
        primPurpleFaint: "rgba(48, 11, 80, 0.8)",
        secPink: "rgba(158, 126, 183, 0.5)",
        hovYellow: "#FFD036",
        textYellow: "#FCC513",
        bgPink: "#9E7EB7",
        bgPurple: "#300B50",
      },
      animation: {},
      mixBlendMode: {
        luminosity: "luminosity",
      },
      backgroundImage: {
        "home-bg": "url('src/assets/images/home-bg.jpg')",
        "about-bg": "url('src/assets/images/about-bg.png')",
        "about-bg2": "url('src/assets/images/about-bg2.png')",
        "donation-bg": "url('src/assets/images/donation-bg.png')",
        "contacts-bg": "url('src/assets/images/contacts-bg.png')",
        "creators-bg": "url('src/assets/images/creators-bg.png')",
      },
      backgroundPosition: {
        "custom-50-150": "50% 50%",
      },
    },
  },
  plugins: [],
};
