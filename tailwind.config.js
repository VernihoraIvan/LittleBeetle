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
  safelist: ["w-1/3", "w-2/3"],
  theme: {
    extend: {
      userSelect: {
        none: "none",
      },
      borderRadius: {
        "12px": "12px",
      },
      height: {
        "fit-content": "fit-content",
      },
      fontFamily: {
        primaryRegular: ["mRegular"],
        primarySBold: ["mSBold"],
        primaryBold: ["mBold"],
        secondaryRegular: ["pRegular"],
        secondarySBold: ["pSBold"],
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
        cartCont: "1024px",
        secH: "980px",
        prodW: "740px",
        payW: "680px",
        titleW: "600px",
        imgH: "520px",
        secH2: "500px",
        priceL: "470px",
        sumW: "455px",
        prodPB: "430px",
        contactH: "320px",
        imgH2: "350px",
        imgW: "300px",
        imgSW: "250px",
        purchElH: "200px",
        mainTitleM: "184px",
        purchImgH: "176px",
        titleM: "160px",
        headerPad: "160px",
        buttonP: "140px",
        bookPT: "110px",
        bookPB: "85px",
        navPad: "70px",
        CreatorsElP: "50px",
        prodMar: "30px",
        gapS: "10px",
        customPosition: "10% 60%",
        navMar: "25%",
      },
      fontSize: {
        titleS: "38px",
        buttonS: "28px",
        addCartS: "26px",
        linkS: "22px",
        copyS: "18px",
      },
      colors: {
        primWhite: "#FFFFFF",
        primBeige: "#FFFCF3",
        primWhiteFaint: "rgba(255, 255, 255, 0.8)",
        primWhiteFaintM: "rgba(255, 255, 255, 0.5)",
        primPurple: "#300B50",
        primPurpleFaint: "rgba(48, 11, 80, 0.8)",
        primPurpleFaintM: "rgba(48, 11, 80, 0.5)",
        secPink: "rgba(158, 126, 183, 0.5)",
        pinkGrey: "rgba(255, 252, 243, 0.7)",
        hovYellow: "#FFD036",
        textYellow: "#FCC513",
        bgPink: "#9E7EB7",
        bgPurple: "#300B50",
        secBlack: "#000000",
        inputPink: "#666",
        dropHover: "#F0F0F0",
        whiteHover: "rgba(190, 158, 217, 0.30)",
        purpleHover: "#711EB8",
        pinkBar: "#D9D9D9",
        barGrey: "#8C8C8C",
        alertRed: "#F00",
        adrButton: "#711EB8",
        payButtonActive: "#BE9ED9",
      },
      borderWidth: {
        3: "3px",
      },
      animation: {},
      mixBlendMode: {
        luminosity: "luminosity",
      },
      backgroundImage: {
        "home-bg": "url('@/assets/images/home-bg.jpg')",
        "about-bg": "url('@/assets/images/about-bg.png')",
        "about-bg2": "url('@/assets/images/about-bg2.png')",
        "donation-bg": "url('@/assets/images/donation-bg.png')",
        "contacts-bg": "url('@/assets/images/contacts-bg.png')",
        "creators-bg": "url('@/assets/images/creators-bg.png')",
      },
      backgroundPosition: {
        "custom-50-150": "50% 50%",
      },
    },
  },
  plugins: [],
};
