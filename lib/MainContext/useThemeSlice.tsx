import { type Dispatch, type SetStateAction, useEffect, useState } from "react";
import { alpha, createTheme, useTheme, type Theme } from "@mui/material";
import {
  ForYinYang_ThemeColorsArray,
  PaletteColors,
  type ShadeCodeType,
  type TypeThemeColors,
} from "./Utils";
import { manualOverrides } from "../ThemeProvider";

const Theme_ColorShades_Light: {
  lightShade: any[];
  mainShade: any[];
  darkShade: any[];
} = {
  // lightShade: [50, 100, 200],
  // mainShade: [100, 200, 300],
  // darkShade: [200, 300, 400],

  // lightShade: [100, 200, 300],
  // mainShade: [200, 300, 400],
  // darkShade: [300, 400, 500],

  // lightShade: [50, 100, 100],
  // mainShade: [100, 200, 200],
  // darkShade: [200, 300, 300],

  // lightShade: [200, 300, 400],
  // mainShade: [300, 400, 500],
  // darkShade: [400, 500, 600],
  lightShade: [200, 200, 200],
  mainShade: [300, 300, 300],
  darkShade: [400, 400, 400],
};

const Theme_ColorShades_Dark: {
  lightShade: any[];
  mainShade: any[];
  darkShade: any[];
} = {
  // lightShade: [600, 700, 800],
  // mainShade: [700, 800, 900],
  // darkShade: [800, 900, 950],

  // lightShade: [500, 600, 700],
  // mainShade: [600, 700, 800],
  // darkShade: [700, 800, 900],

  // lightShade: [700, 800, 800],
  // mainShade: [800, 900, 900],
  // darkShade: [900, 950, 950],

  // lightShade: [300, 400, 500],
  // mainShade: [400, 500, 600],
  // darkShade: [500, 600, 700],

  // lightShade: [200, 300, 400],
  // mainShade: [300, 400, 500],
  // darkShade: [400, 500, 600],

  // lightShade: [100, 200, 300],
  // mainShade: [200, 300, 400],
  // darkShade: [300, 400, 500],
  // lightShade: [400, 400, 400],
  // mainShade: [500, 500, 500],
  // darkShade: [600, 600, 600],
  lightShade: [300, 300, 300],
  mainShade: [400, 400, 400],
  darkShade: [500, 500, 500],
};

// const ShadowsLight: any = {
//     0: "none",
//     1: "0px 2px 1px -1px rgba(0,0,0,0.02),0px 1px 1px 0px rgba(0,0,0,0.014),0px 1px 3px 0px rgba(0,0,0,0.012)",
//     2: "0px 3px 1px -2px rgba(0,0,0,0.02),0px 2px 2px 0px rgba(0,0,0,0.014),0px 1px 5px 0px rgba(0,0,0,0.012)",
//     3: "0px 3px 3px -2px rgba(0,0,0,0.02),0px 3px 4px 0px rgba(0,0,0,0.014),0px 1px 8px 0px rgba(0,0,0,0.012)",
//     4: "0px 2px 4px -1px rgba(0,0,0,0.02),0px 4px 5px 0px rgba(0,0,0,0.014),0px 1px 10px 0px rgba(0,0,0,0.012)",
//     5: "0px 3px 5px -1px rgba(0,0,0,0.02),0px 5px 8px 0px rgba(0,0,0,0.014),0px 1px 14px 0px rgba(0,0,0,0.012)",
//     6: "0px 3px 5px -1px rgba(0,0,0,0.02),0px 6px 10px 0px rgba(0,0,0,0.014),0px 1px 18px 0px rgba(0,0,0,0.012)",
//     7: "0px 4px 5px -2px rgba(0,0,0,0.02),0px 7px 10px 1px rgba(0,0,0,0.014),0px 2px 16px 1px rgba(0,0,0,0.012)",
//     8: "0px 5px 5px -3px rgba(0,0,0,0.02),0px 8px 10px 1px rgba(0,0,0,0.014),0px 3px 14px 2px rgba(0,0,0,0.012)",
//     9: "0px 5px 6px -3px rgba(0,0,0,0.02),0px 9px 12px 1px rgba(0,0,0,0.014),0px 3px 16px 2px rgba(0,0,0,0.012)",
//     10: "0px 6px 6px -3px rgba(0,0,0,0.02),0px 10px 14px 1px rgba(0,0,0,0.014),0px 4px 18px 3px rgba(0,0,0,0.012)",
//     11: "0px 6px 7px -4px rgba(0,0,0,0.02),0px 11px 15px 1px rgba(0,0,0,0.014),0px 4px 20px 3px rgba(0,0,0,0.012)",
//     12: "0px 7px 8px -4px rgba(0,0,0,0.02),0px 12px 17px 2px rgba(0,0,0,0.014),0px 5px 22px 4px rgba(0,0,0,0.012)",
//     13: "0px 7px 8px -4px rgba(0,0,0,0.02),0px 13px 19px 2px rgba(0,0,0,0.014),0px 5px 24px 4px rgba(0,0,0,0.012)",
//     14: "0px 7px 9px -4px rgba(0,0,0,0.02),0px 14px 21px 2px rgba(0,0,0,0.014),0px 5px 26px 4px rgba(0,0,0,0.012)",
//     15: "0px 8px 9px -5px rgba(0,0,0,0.02),0px 15px 22px 2px rgba(0,0,0,0.014),0px 6px 28px 5px rgba(0,0,0,0.012)",
//     16: "0px 8px 10px -5px rgba(0,0,0,0.02),0px 16px 24px 2px rgba(0,0,0,0.014),0px 6px 30px 5px rgba(0,0,0,0.012)",
//     17: "0px 8px 11px -5px rgba(0,0,0,0.02),0px 17px 26px 2px rgba(0,0,0,0.014),0px 6px 32px 5px rgba(0,0,0,0.012)",
//     18: "0px 9px 11px -5px rgba(0,0,0,0.02),0px 18px 28px 2px rgba(0,0,0,0.014),0px 7px 34px 6px rgba(0,0,0,0.012)",
//     19: "0px 9px 12px -6px rgba(0,0,0,0.02),0px 19px 29px 2px rgba(0,0,0,0.014),0px 7px 36px 6px rgba(0,0,0,0.012)",
//     20: "0px 10px 13px -6px rgba(0,0,0,0.02),0px 20px 31px 3px rgba(0,0,0,0.014),0px 8px 38px 7px rgba(0,0,0,0.012)",
//     21: "0px 10px 13px -6px rgba(0,0,0,0.02),0px 21px 33px 3px rgba(0,0,0,0.014),0px 8px 40px 7px rgba(0,0,0,0.012)",
//     22: "0px 10px 14px -6px rgba(0,0,0,0.02),0px 22px 35px 3px rgba(0,0,0,0.014),0px 8px 42px 7px rgba(0,0,0,0.012)",
//     23: "0px 11px 14px -7px rgba(0,0,0,0.02),0px 23px 36px 3px rgba(0,0,0,0.014),0px 9px 44px 8px rgba(0,0,0,0.012)",
//     24: "0px 11px 15px -7px rgba(0,0,0,0.02),0px 24px 38px 3px rgba(0,0,0,0.014),0px 9px 46px 8px rgba(0,0,0,0.012)",
// };

// const ShadowsDark: any = {
//     0: "none",
//     1: "0px 2px 1px -1px rgba(255,255,255,0.02),0px 1px 1px 0px rgba(255,255,255,0.014),0px 1px 3px 0px rgba(255,255,255,0.012)",
//     2: "0px 3px 1px -2px rgba(255,255,255,0.02),0px 2px 2px 0px rgba(255,255,255,0.014),0px 1px 5px 0px rgba(255,255,255,0.012)",
//     3: "0px 3px 3px -2px rgba(255,255,255,0.02),0px 3px 4px 0px rgba(255,255,255,0.014),0px 1px 8px 0px rgba(255,255,255,0.012)",
//     4: "0px 2px 4px -1px rgba(255,255,255,0.02),0px 4px 5px 0px rgba(255,255,255,0.014),0px 1px 10px 0px rgba(255,255,255,0.012)",
//     5: "0px 3px 5px -1px rgba(255,255,255,0.02),0px 5px 8px 0px rgba(255,255,255,0.014),0px 1px 14px 0px rgba(255,255,255,0.012)",
//     6: "0px 3px 5px -1px rgba(255,255,255,0.02),0px 6px 10px 0px rgba(255,255,255,0.014),0px 1px 18px 0px rgba(255,255,255,0.012)",
//     7: "0px 4px 5px -2px rgba(255,255,255,0.02),0px 7px 10px 1px rgba(255,255,255,0.014),0px 2px 16px 1px rgba(255,255,255,0.012)",
//     8: "0px 5px 5px -3px rgba(255,255,255,0.02),0px 8px 10px 1px rgba(255,255,255,0.014),0px 3px 14px 2px rgba(255,255,255,0.012)",
//     9: "0px 5px 6px -3px rgba(255,255,255,0.02),0px 9px 12px 1px rgba(255,255,255,0.014),0px 3px 16px 2px rgba(255,255,255,0.012)",
//     10: "0px 6px 6px -3px rgba(255,255,255,0.02),0px 10px 14px 1px rgba(255,255,255,0.014),0px 4px 18px 3px rgba(255,255,255,0.012)",
//     11: "0px 6px 7px -4px rgba(255,255,255,0.02),0px 11px 15px 1px rgba(255,255,255,0.014),0px 4px 20px 3px rgba(255,255,255,0.012)",
//     12: "0px 7px 8px -4px rgba(255,255,255,0.02),0px 12px 17px 2px rgba(255,255,255,0.014),0px 5px 22px 4px rgba(255,255,255,0.012)",
//     13: "0px 7px 8px -4px rgba(255,255,255,0.02),0px 13px 19px 2px rgba(255,255,255,0.014),0px 5px 24px 4px rgba(255,255,255,0.012)",
//     14: "0px 7px 9px -4px rgba(255,255,255,0.02),0px 14px 21px 2px rgba(255,255,255,0.014),0px 5px 26px 4px rgba(255,255,255,0.012)",
//     15: "0px 8px 9px -5px rgba(255,255,255,0.02),0px 15px 22px 2px rgba(255,255,255,0.014),0px 6px 28px 5px rgba(255,255,255,0.012)",
//     16: "0px 8px 10px -5px rgba(255,255,255,0.02),0px 16px 24px 2px rgba(255,255,255,0.014),0px 6px 30px 5px rgba(255,255,255,0.012)",
//     17: "0px 8px 11px -5px rgba(255,255,255,0.02),0px 17px 26px 2px rgba(255,255,255,0.014),0px 6px 32px 5px rgba(255,255,255,0.012)",
//     18: "0px 9px 11px -5px rgba(255,255,255,0.02),0px 18px 28px 2px rgba(255,255,255,0.014),0px 7px 34px 6px rgba(255,255,255,0.012)",
//     19: "0px 9px 12px -6px rgba(255,255,255,0.02),0px 19px 29px 2px rgba(255,255,255,0.014),0px 7px 36px 6px rgba(255,255,255,0.012)",
//     20: "0px 10px 13px -6px rgba(255,255,255,0.02),0px 20px 31px 3px rgba(255,255,255,0.014),0px 8px 38px 7px rgba(255,255,255,0.012)",
//     21: "0px 10px 13px -6px rgba(255,255,255,0.02),0px 21px 33px 3px rgba(255,255,255,0.014),0px 8px 40px 7px rgba(255,255,255,0.012)",
//     22: "0px 10px 14px -6px rgba(255,255,255,0.02),0px 22px 35px 3px rgba(255,255,255,0.014),0px 8px 42px 7px rgba(255,255,255,0.012)",
//     23: "0px 11px 14px -7px rgba(255,255,255,0.02),0px 23px 36px 3px rgba(255,255,255,0.014),0px 9px 44px 8px rgba(255,255,255,0.012)",
//     24: "0px 11px 15px -7px rgba(255,255,255,0.02),0px 24px 38px 3px rgba(255,255,255,0.014),0px 9px 46px 8px rgba(255,255,255,0.012)",
// };

const theme: any = {
  typography: {
    fontSize: 12,

    fontFamily:
      '"Montserrat",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    // fontSecondaryFamily:
    // '"Montserrat",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    fontWeightLight: "600",
    fontWeightRegular: "600",
    fontWeightMedium: "600",
    fontWeightBold: "600",
    h1: {
      // fontWeight: 800,
      // lineHeight: 1.25,
      // fontSize: "2.5rem",
      fontFamily:
        '"Montserrat",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      // "@media (min-width:600px)": {
      //         fontSize: "3.25rem",
      // },
      // "@media (min-width:900px)": {
      //         fontSize: "3.625rem",
      // },
      // "@media (min-width:1200px)": {
      //         fontSize: "4rem",
      // },
    },
    h2: {
      // fontWeight: 800,
      // lineHeight: 1.3333333333333333,
      // fontSize: "2rem",
      fontFamily:
        '"Montserrat",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      // "@media (min-width:600px)": {
      //         fontSize: "2.5rem",
      // },
      // "@media (min-width:900px)": {
      //         fontSize: "2.75rem",
      // },
      // "@media (min-width:1200px)": {
      //         fontSize: "3rem",
      // },
    },
    h3: {
      //
      // lineHeight: 1.5,
      // fontSize: "1.5rem",
      fontFamily:
        '"Montserrat",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      // "@media (min-width:600px)": {
      //         fontSize: "1.625rem",
      // },
      // "@media (min-width:900px)": {
      //         fontSize: "1.875rem",
      // },
      // "@media (min-width:1200px)": {
      //         fontSize: "2rem",
      // },
    },
    h4: {
      //
      // lineHeight: 1.5,
      // fontSize: "1.25rem",
      // "@media (min-width:600px)": {
      //         fontSize: "1.25rem",
      // },
      // "@media (min-width:900px)": {
      //         fontSize: "1.5rem",
      // },
      // "@media (min-width:1200px)": {
      //         fontSize: "1.5rem",
      // },
      fontFamily:
        '"Montserrat",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    },
    h5: {
      //
      // lineHeight: 1.5,
      // fontSize: "1.125rem",
      // "@media (min-width:600px)": {
      //         fontSize: "1.1875rem",
      // },
      // "@media (min-width:900px)": {
      //         fontSize: "1.25rem",
      // },
      // "@media (min-width:1200px)": {
      //         fontSize: "1.25rem",
      // },
      fontFamily:
        '"Montserrat",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    },
    h6: {
      //
      // lineHeight: 1.5555555555555556,
      // fontSize: "1.0625rem",
      // "@media (min-width:600px)": {
      //         fontSize: "1.125rem",
      // },
      // "@media (min-width:900px)": {
      //         fontSize: "1.125rem",
      // },
      // "@media (min-width:1200px)": {
      //         fontSize: "1.125rem",
      // },
      fontFamily:
        '"Montserrat",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    },
    subtitle1: {
      //
      // lineHeight: 1.5,
      // fontSize: "1rem",
      fontFamily:
        '"Montserrat",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    },
    subtitle2: {
      //
      // lineHeight: 1.5714285714285714,
      // fontSize: "0.875rem",
      fontFamily:
        '"Montserrat",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    },
    body1: {
      // lineHeight: 1.5,
      // fontSize: "1rem",
      fontFamily:
        '"Montserrat",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      // fontWeight: "400",
    },
    body2: {
      // lineHeight: 1.5714285714285714,
      // fontSize: "0.875rem",
      fontFamily:
        '"Montserrat",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      // fontWeight: "400",
    },
    caption: {
      // lineHeight: 1.5,
      fontSize: "11px",
      fontFamily:
        '"Montserrat",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      // fontWeight: "600",
    },
    overline: {
      //
      // lineHeight: 1.5,
      // fontSize: "0.75rem",
      // textTransform: "uppercase",
      fontFamily:
        '"Montserrat",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    },
    button: {
      //
      // lineHeight: 1.7142857142857142,
      // fontSize: "0.875rem",
      // textTransform: "unset",
      fontFamily:
        '"Montserrat",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    },
    // htmlFontSize: 16,
    // fontSize: 14,
    // inherit: {
    //         fontFamily: "inherit",
    //         fontWeight: "inherit",
    //         fontSize: "inherit",
    //         lineHeight: "inherit",
    //         letterSpacing: "inherit",
    // },
  },
  // palette: {
  //         primary: {
  //                 lighter: "#D0ECFE",
  //                 light: "#73BAFB",
  //                 main: "#6395ee",
  //                 dark: "#4873CC",
  //                 darker: "#042174",
  //                 contrastText: TextColor,
  //         },
  //         secondary: {
  //                 lighter: "#FBFECB",
  //                 light: "#EEFE65",
  //                 main: "#DCFC00",
  //                 dark: "#BAD800",
  //                 darker: "#99B500",
  //                 contrastText: TextColor,
  //         },
  //         info: {
  //                 lighter: "#e0f2fe",
  //                 light: "#bae6fd",
  //                 main: "#38bdf8",
  //                 dark: "#0284c7",
  //                 darker: "#0369a1",
  //                 contrastText: TextColor,
  //         },
  //         success: {
  //                 lighter: "#dcfce7",
  //                 light: "#bbf7d0",
  //                 main: "#4ade80",
  //                 dark: "#16a34a",
  //                 darker: "#15803d",
  //                 contrastText: TextColor,
  //         },
  //         warning: {
  //                 lighter: "#fef9c3",
  //                 light: "#fef08a",
  //                 main: "#facc15",
  //                 dark: "#ca8a04",
  //                 darker: "#a16207",
  //                 contrastText: TextColor,
  //         },
  //         error: {
  //                 lighter: "#ffe4e6",
  //                 light: "#fecdd3",
  //                 main: "#fb7185",
  //                 dark: "#e11d48",
  //                 darker: "#be123c",
  //                 contrastText: TextColor,
  //         },
  // },
};

export interface ThemeSliceType {
  Theme_WebApp_Theme: Theme;
  setTheme_WebApp_Theme: Dispatch<SetStateAction<Theme>>;
  Theme_LightOrDarkMode: "light" | "dark";
  setTheme_LightOrDarkMode: Dispatch<SetStateAction<"light" | "dark">>;
  Theme_PrimaryColor: TypeThemeColors;
  setTheme_PrimaryColor: Dispatch<SetStateAction<TypeThemeColors>>;
  Theme_SecondaryColor: TypeThemeColors;
  setTheme_SecondaryColor: Dispatch<SetStateAction<TypeThemeColors>>;
  Theme_SelectedShadeType_Primary: "lightShade" | "mainShade" | "darkShade";
  setTheme_SelectedShadeType_Primary: Dispatch<
    SetStateAction<"lightShade" | "mainShade" | "darkShade">
  >;
  Theme_SelectedShadeType_Secondary: "lightShade" | "mainShade" | "darkShade";
  setTheme_SelectedShadeType_Secondary: Dispatch<
    SetStateAction<"lightShade" | "mainShade" | "darkShade">
  >;
  setYinYangColors: () => void;
  setYinYang2Colors: () => void;
}

const useThemeSlice = () => {
  const currentTheme = useTheme();
  const [Theme_LightOrDarkMode, setTheme_LightOrDarkMode] = useState<
    "light" | "dark"
  >("light");

  const [Theme_PrimaryColor, setTheme_PrimaryColor] =
    useState<TypeThemeColors>("default");

  const [Theme_SecondaryColor, setTheme_SecondaryColor] =
    useState<TypeThemeColors>("default");

  const [Theme_SelectedShadeType_Primary, setTheme_SelectedShadeType_Primary] =
    useState<"lightShade" | "mainShade" | "darkShade">("mainShade");

  const [
    Theme_SelectedShadeType_Secondary,
    setTheme_SelectedShadeType_Secondary,
  ] = useState<"lightShade" | "mainShade" | "darkShade">("mainShade");

  let ShadeCode_Primary_0: ShadeCodeType = "50",
    ShadeCode_Primary_1: ShadeCodeType = "50",
    ShadeCode_Primary_2: ShadeCodeType = "50";

  let ShadeCode_Secondary_0: ShadeCodeType = "50",
    ShadeCode_Secondary_1: ShadeCodeType = "50",
    ShadeCode_Secondary_2: ShadeCodeType = "50";

  const Theme_ColorShades =
    Theme_LightOrDarkMode === "light"
      ? Theme_ColorShades_Light
      : Theme_ColorShades_Dark;

  [ShadeCode_Primary_0, ShadeCode_Primary_1, ShadeCode_Primary_2] =
    Theme_ColorShades[Theme_SelectedShadeType_Primary];

  [ShadeCode_Secondary_0, ShadeCode_Secondary_1, ShadeCode_Secondary_2] =
    Theme_ColorShades[Theme_SelectedShadeType_Secondary];

  const TextColor =
    Theme_LightOrDarkMode === "light"
      ? PaletteColors.neutral["600"]
      : PaletteColors.neutral["100"];

  const getNewGenaratedTheme = (): Theme => ({
    ...currentTheme,
    typography: theme.typography,
    shadows:
      // Theme_LightOrDarkMode === "light"
      //     ? ShadowsLight
      //     : ShadowsDark,
      [
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
      ],
    shape: {
      ...currentTheme.shape,
      borderRadius: "30px !important",
    },
    transitions: {
      ...currentTheme.transitions,
      duration: {
        ...currentTheme.transitions.duration,
        shortest: 1000,
        shorter: 1000,
        short: 1000,
        standard: 1000,
        complex: 1000,
        enteringScreen: 1000,
        leavingScreen: 1000,
      },
    },
    components: manualOverrides(currentTheme),
    palette: {
      ...currentTheme.palette,
      mode: Theme_LightOrDarkMode === "light" ? "light" : "dark",
      common: {
        black: PaletteColors.neutral["700"],
        white: PaletteColors.neutral["100"],
      },
      text: {
        // ...currentTheme.palette.text,
        primary: TextColor,
        secondary:
          Theme_LightOrDarkMode === "light"
            ? PaletteColors.neutral["500"]
            : PaletteColors.neutral["200"],
        disabled:
          Theme_LightOrDarkMode === "light"
            ? PaletteColors.neutral["400"]
            : PaletteColors.neutral["400"],
      },
      background: {
        // ...currentTheme.palette.background,
        default:
          Theme_LightOrDarkMode === "light"
            ? PaletteColors[Theme_PrimaryColor as keyof object][100]
            : alpha(
                PaletteColors[Theme_PrimaryColor as keyof object][900],
                0.2,
              ),

        paper:
          Theme_LightOrDarkMode === "light"
            ? PaletteColors.neutral["50"]
            : PaletteColors.neutral["800"],
      },
      primary: {
        light: PaletteColors.indigo[ShadeCode_Primary_0],
        main: PaletteColors.indigo[ShadeCode_Primary_1],
        dark: PaletteColors.indigo[ShadeCode_Primary_2],
        contrastText: TextColor,
      },
      secondary: {
        light: PaletteColors.lime[ShadeCode_Secondary_0],
        main: PaletteColors.lime[ShadeCode_Secondary_1],
        dark: PaletteColors.lime[ShadeCode_Secondary_2],
        contrastText: TextColor,
      },
      info: {
        ...currentTheme.palette.info,
        light:
          Theme_LightOrDarkMode === "dark"
            ? PaletteColors.sky[ShadeCode_Primary_0]
            : PaletteColors.sky[ShadeCode_Primary_0],

        main:
          Theme_LightOrDarkMode === "dark"
            ? PaletteColors.sky[ShadeCode_Primary_1]
            : PaletteColors.sky[ShadeCode_Primary_1],

        dark:
          Theme_LightOrDarkMode === "dark"
            ? PaletteColors.sky[ShadeCode_Primary_2]
            : PaletteColors.sky[ShadeCode_Primary_2],

        contrastText: TextColor,
      },
      success: {
        ...currentTheme.palette.success,
        light:
          Theme_LightOrDarkMode === "dark"
            ? PaletteColors.emerald[ShadeCode_Primary_0]
            : PaletteColors.emerald[ShadeCode_Primary_0],

        main:
          Theme_LightOrDarkMode === "dark"
            ? PaletteColors.emerald[ShadeCode_Primary_1]
            : PaletteColors.emerald[ShadeCode_Primary_1],

        dark:
          Theme_LightOrDarkMode === "dark"
            ? PaletteColors.emerald[ShadeCode_Primary_2]
            : PaletteColors.emerald[ShadeCode_Primary_2],

        contrastText: TextColor,
      },
      warning: {
        ...currentTheme.palette.warning,
        light:
          Theme_LightOrDarkMode === "dark"
            ? PaletteColors.amber[ShadeCode_Primary_0]
            : PaletteColors.amber[ShadeCode_Primary_0],

        main:
          Theme_LightOrDarkMode === "dark"
            ? PaletteColors.amber[ShadeCode_Primary_1]
            : PaletteColors.amber[ShadeCode_Primary_1],

        dark:
          Theme_LightOrDarkMode === "dark"
            ? PaletteColors.amber[ShadeCode_Primary_2]
            : PaletteColors.amber[ShadeCode_Primary_2],

        contrastText: TextColor,
      },
      error: {
        ...currentTheme.palette.error,
        light:
          Theme_LightOrDarkMode === "dark"
            ? PaletteColors.rose[ShadeCode_Primary_0]
            : PaletteColors.rose[ShadeCode_Primary_0],

        main:
          Theme_LightOrDarkMode === "dark"
            ? PaletteColors.rose[ShadeCode_Primary_1]
            : PaletteColors.rose[ShadeCode_Primary_1],

        dark:
          Theme_LightOrDarkMode === "dark"
            ? PaletteColors.rose[ShadeCode_Primary_2]
            : PaletteColors.rose[ShadeCode_Primary_2],

        contrastText: TextColor,
      },
      grey: {
        ...PaletteColors.neutral,
        A100: PaletteColors.neutral["100"],
        A200: PaletteColors.neutral["200"],
        A400: PaletteColors.neutral["400"],
        A700: PaletteColors.neutral["700"],
      },
      divider: alpha(
        Theme_LightOrDarkMode === "light"
          ? PaletteColors.neutral["300"]
          : PaletteColors.neutral["700"],
        0.3,
      ),
      action: {
        ...currentTheme.palette.action,
        hover:
          Theme_LightOrDarkMode === "light"
            ? "rgba(0, 0, 0, 0.03)"
            : "rgba(255,255,255,0.03)",
        hoverOpacity: Theme_LightOrDarkMode === "light" ? 0.03 : 0.03,

        selected:
          Theme_LightOrDarkMode === "light"
            ? "rgba(0, 0, 0, 0.06)"
            : "rgba(255,255,255,0.06)",
        selectedOpacity: Theme_LightOrDarkMode === "light" ? 0.06 : 0.06,

        focus:
          Theme_LightOrDarkMode === "light"
            ? "rgba(0, 0, 0, 0.09)"
            : "rgba(255,255,255,0.09)",
        focusOpacity: Theme_LightOrDarkMode === "light" ? 0.09 : 0.09,

        active:
          Theme_LightOrDarkMode === "light"
            ? "rgba(0, 0, 0, 0.3)"
            : "rgba(255,255,255,0.3)",
        activatedOpacity: Theme_LightOrDarkMode === "light" ? 0.3 : 0.3,

        disabled:
          Theme_LightOrDarkMode === "light"
            ? "rgba(0, 0, 0, 0.3)"
            : "rgba(255,255,255,0.3)",
        disabledOpacity: Theme_LightOrDarkMode === "light" ? 0.3 : 0.3,
        disabledBackground:
          Theme_LightOrDarkMode === "light"
            ? "rgba(0, 0, 0, 0.15)"
            : "rgba(255,255,255,0.15)",
      },
    },
  });
  const [Theme_WebApp_Theme, setTheme_WebApp_Theme] = useState<Theme>({
    ...currentTheme,
  });

  useEffect(() => {
    const Theme_LightOrDarkMode: any = localStorage.getItem(
      "Theme_LightOrDarkMode",
    );
    if (Theme_LightOrDarkMode != null)
      setTheme_LightOrDarkMode(Theme_LightOrDarkMode);

    const Theme_PrimaryColor: any = localStorage.getItem("Theme_PrimaryColor");
    if (Theme_PrimaryColor != null) setTheme_PrimaryColor(Theme_PrimaryColor);

    const Theme_SecondaryColor: any = localStorage.getItem(
      "Theme_SecondaryColor",
    );
    if (Theme_SecondaryColor != null)
      setTheme_SecondaryColor(Theme_SecondaryColor);

    const Theme_SelectedShadeType_Primary: any = localStorage.getItem(
      "Theme_SelectedShadeType_Primary",
    );
    if (Theme_SelectedShadeType_Primary != null)
      setTheme_SelectedShadeType_Primary(Theme_SelectedShadeType_Primary);

    const Theme_SelectedShadeType_Secondary: any = localStorage.getItem(
      "Theme_SelectedShadeType_Secondary",
    );
    if (Theme_SelectedShadeType_Secondary != null)
      setTheme_SelectedShadeType_Secondary(Theme_SelectedShadeType_Secondary);

    setTheme_WebApp_Theme(getNewGenaratedTheme());
  }, []);

  const setYinYangColors = () => {
    if (Theme_LightOrDarkMode === "light") {
      setTheme_SelectedShadeType_Primary("mainShade");
      setTheme_SelectedShadeType_Secondary("lightShade");
    } else {
      setTheme_SelectedShadeType_Primary("mainShade");
      setTheme_SelectedShadeType_Secondary("lightShade");
    }
    const color = ForYinYang_ThemeColorsArray();
    setTheme_PrimaryColor(color);
    setTheme_SecondaryColor(color);
  };

  const setYinYang2Colors = () => {
    if (Theme_LightOrDarkMode === "light") {
      setTheme_SelectedShadeType_Primary("mainShade");
      setTheme_SelectedShadeType_Secondary("mainShade");
    } else {
      setTheme_SelectedShadeType_Primary("mainShade");
      setTheme_SelectedShadeType_Secondary("mainShade");
    }

    setTheme_PrimaryColor(ForYinYang_ThemeColorsArray());
    setTheme_SecondaryColor(ForYinYang_ThemeColorsArray());
  };

  useEffect(() => {
    if (
      Theme_PrimaryColor === "default" &&
      Theme_SecondaryColor === "default"
    ) {
      setTheme_SelectedShadeType_Primary("mainShade");
      setTheme_SelectedShadeType_Secondary("mainShade");
    } else if (Theme_LightOrDarkMode === "light") {
      setTheme_SelectedShadeType_Primary("mainShade");
      setTheme_SelectedShadeType_Secondary("lightShade");
    } else {
      setTheme_SelectedShadeType_Primary("mainShade");
      setTheme_SelectedShadeType_Secondary("lightShade");
    }

    localStorage.setItem("Theme_LightOrDarkMode", Theme_LightOrDarkMode);
    setTheme_WebApp_Theme((prv) =>
      createTheme({
        ...prv,
        ...getNewGenaratedTheme(),
      }),
    );

    const Old_Theme_Color1 = Theme_PrimaryColor;
    const Old_Theme_Color2 = Theme_SecondaryColor;
    const Color: any = ["stone", "neutral", "neutral", "gray", "slate"][
      Math.floor(Math.random() * 4)
    ];

    setTheme_PrimaryColor(Color);
    setTheme_SecondaryColor(Color);
    setTimeout(() => {
      setTheme_PrimaryColor(Old_Theme_Color1);
      setTheme_SecondaryColor(Old_Theme_Color2);
    }, 0);
  }, [Theme_LightOrDarkMode]);

  const chnageThemeColor = (obj: any, isSecondary = false) => {
    setTheme_WebApp_Theme((prv) =>
      isSecondary
        ? createTheme({
            ...prv,
            components: manualOverrides({
              ...prv,
              palette: {
                ...prv.palette,
                background: getNewGenaratedTheme().palette.background,
                secondary: {
                  ...prv.palette.secondary,
                  ...obj,
                },
              },
            }),
            palette: {
              ...prv.palette,
              background: getNewGenaratedTheme().palette.background,
              secondary: {
                ...prv.palette.secondary,
                ...obj,
              },
            },
          })
        : createTheme({
            ...prv,
            components: manualOverrides({
              ...prv,
              palette: {
                ...prv.palette,
                background: getNewGenaratedTheme().palette.background,
                primary: {
                  ...prv.palette.primary,
                  ...obj,
                },
              },
            }),
            palette: {
              ...prv.palette,
              background: getNewGenaratedTheme().palette.background,
              primary: {
                ...prv.palette.primary,
                ...obj,
              },
            },
          }),
    );
  };

  useEffect(() => {
    localStorage.setItem("Theme_PrimaryColor", Theme_PrimaryColor);
    localStorage.setItem(
      "Theme_SelectedShadeType_Primary",
      Theme_SelectedShadeType_Primary,
    );

    if (Theme_PrimaryColor === "default") {
      chnageThemeColor(getNewGenaratedTheme().palette.primary);
    } else {
      chnageThemeColor({
        light: PaletteColors[Theme_PrimaryColor][ShadeCode_Primary_0],
        main: PaletteColors[Theme_PrimaryColor][ShadeCode_Primary_1],

        dark: PaletteColors[Theme_PrimaryColor][ShadeCode_Primary_2],

        contrastText: TextColor,
      });
    }
  }, [Theme_PrimaryColor, Theme_SelectedShadeType_Primary]);

  useEffect(() => {
    localStorage.setItem("Theme_SecondaryColor", Theme_SecondaryColor);
    localStorage.setItem(
      "Theme_SelectedShadeType_Secondary",
      Theme_SelectedShadeType_Secondary,
    );
    if (Theme_SecondaryColor === "default") {
      chnageThemeColor(getNewGenaratedTheme().palette.secondary, true);
    } else {
      chnageThemeColor(
        {
          light: PaletteColors[Theme_SecondaryColor][ShadeCode_Secondary_0],

          main: PaletteColors[Theme_SecondaryColor][ShadeCode_Secondary_1],

          dark: PaletteColors[Theme_SecondaryColor][ShadeCode_Secondary_2],

          contrastText: TextColor,
        },
        true,
      );
    }
  }, [Theme_SecondaryColor, Theme_SelectedShadeType_Secondary]);

  return {
    Theme_WebApp_Theme,
    setTheme_WebApp_Theme,
    Theme_LightOrDarkMode,
    setTheme_LightOrDarkMode,
    Theme_PrimaryColor,
    setTheme_PrimaryColor,
    Theme_SecondaryColor,
    setTheme_SecondaryColor,
    Theme_SelectedShadeType_Primary,
    setTheme_SelectedShadeType_Primary,
    Theme_SelectedShadeType_Secondary,
    setTheme_SelectedShadeType_Secondary,
    setYinYangColors,
    setYinYang2Colors,
  } as ThemeSliceType;
};

export default useThemeSlice;
