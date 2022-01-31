module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    colors: {
      //Colors
      // Primary
      veryDarkBlueMainBackground: "hsl(233, 47%, 7%)",
      darkDesaturatedBlueCardBackground: "hsl(244, 38%, 16%)",
      softVioletAccent: "hsl(277, 64%, 61%)",
      purple: "hsl(277, 51%, 33%)",
      // Neutral
      whiteMainHeadingStat: "hsl(0, 0%, 100%)",
      slightlyTransparentWhiteMainParagraph: "hsla(0, 0%, 100%, 0.75)",
      slightlyTransparentWhiteStatHeadings: "hsla(0, 0%, 100%, 0.6)",
      attribution: "hsl(228, 45%, 44%)",
    },
    fontFamily: {
      Inter: "Inter",
      LexendDeca: "Lexend Deca",
    },
    extend: {
      backgroundImage: {
        "hero-mobile": "url('./../assets/images/image-header-mobile.jpg') ",
        "hero-desktop": "url('./../assets/images/image-header-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
