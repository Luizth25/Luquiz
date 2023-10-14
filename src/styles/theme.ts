import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: typeof themeColors;
    fontStyles: typeof themeFontStyle;
  }
}

const themeColors = {
  background: "#26001F",
  secondaryBackground: "#3B0735",
  lightPurple: "#FFBCFF",
  primaryComponentBackground: "#4F0D4B",
  secondaryComponentBackground: "#9d3a9d",
  correctAnswer: "#93E70C",
  wrongAnswer: "#FA0000",
  primaryTextColor: "#3B0735",
  secondaryTextColor: "#ffffff",
};

const themeFontStyle = {
  questions: {
    fontSize: 36,
    fontWeight: "SemiBold",
  },

  answers: {
    fontSize: 20,
    fontWeight: "SemiBold",
  },
};

const theme: DefaultTheme = {
  colors: themeColors,
  fontStyles: themeFontStyle,
};

export default theme;
