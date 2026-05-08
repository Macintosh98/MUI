import { type Dispatch, type SetStateAction, useEffect, useState } from "react";
import { alpha, createTheme, useTheme, type Theme } from "@mui/material";

function manualOverrides(theme: Theme) {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          // backgroundColor: "#444",
        },
      },
    },
    MuiSvgIcon: {
      defaultProps: {
        fontSize: "small",
        color: "action",
      },
      styleOverrides: {
        root: {
          fill:
            theme.palette.mode === "light"
              ? alpha(theme.palette.common.black, 0.6)
              : alpha(theme.palette.common.white, 0.6),
        },
      },
    },
    MuiIcon: {
      defaultProps: {
        fontSize: "small",
        color: "action",
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: "11px",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          marginBottom: "5px",
          textTransform: "capitalize",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "& input:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px #aaf inset",
            WebkitTextFillColor: theme.palette.text.primary,
          },
          ".MuiOutlinedInput-notchedOutline": {
            border: "unset !important",
            outline: "none",
            borderRadius: "unset",
            borderColor: "unset !important",
          },
          "&.Mui-focused": {
            outline: "none",
          },
          boxShadow: theme.shadows[1],
          backgroundColor: theme.palette.action.hover,
          ".Mui-error": {
            boxShadow:
              "0px 0px 0px 1px rgba(255, 158, 171, 0.2),0px 0px 0px 0px rgba(255, 158, 171, 0.14),0px 0px 0px 0px rgba(255, 158, 171, 0.12)",
            color: theme.palette.error.light,
          },
          ".MuiInputBase-input": {
            padding: "0px 15px",
            fontSize: "12px",
            height: "30px !important",
            alignContent: "center",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {},
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          ".MuiSelect-select": {},
        },
      },
    },
    MuiPickersTextField: {
      styleOverrides: {
        root: {
          boxShadow: theme.shadows[1],
          borderRadius: theme.shape.borderRadius,
          backgroundColor: theme.palette.action.hover,

          ".MuiPickersInputBase-sectionsContainer": {
            padding: "6px",
          },

          ".MuiPickersInputBase-root": {
            fontSize: "12px",
          },
          ".MuiPickersOutlinedInput-notchedOutline": {
            border: "unset !important",
            outline: "none",
            borderRadius: "unset",
            borderColor: "unset !important",
          },
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(
            theme.palette.grey[theme.palette.mode === "light" ? 900 : 600],
            0.2,
          ),
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          textWrap: "noWrap",
          padding: "3px 16px !important",
          textTransform: "capitalize",
        },
        contained: {
          boxShadow: theme.shadows[1],
          "&:hover": {
            boxShadow: theme.shadows[1],
          },
        },
        outlined: {
          boxShadow: 4,
          border: "none",
          "&:hover": {
            border: "none",
          },
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: "4px",
          boxShadow: theme.shadows[1],
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: theme.shadows[1],
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: theme.shape.borderRadius,
          boxShadow: theme.shadows[1],
          backgroundImage: "none !important",
        },
      },
      defaultProps: {
        elevation: 0,
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.secondary,
          boxShadow: theme.shadows[1],
          padding: "5px 15px",
        },
        arrow: {
          color: theme.palette.background.paper,
        },
      },
      defaultProps: {
        TransitionProps: {},
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          marginTop: "10px",
          boxShadow: theme.shadows[1],
        },
      },
      defaultProps: {
        TransitionProps: {},
      },
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          ".MuiMenu-paper": {
            padding: "5px 0",
            boxShadow: theme.shadows[1],
          },
        },
      },
      defaultProps: {
        TransitionProps: {},
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&:hover": {
            boxShadow: theme.shadows[1],
          },
          "&.Mui-selected": {
            boxShadow: theme.shadows[1],
          },

          margin: "5px !important",
          borderRadius: theme.shape.borderRadius,
          padding: "5px 15px !important",
          "&:last-child": {
            marginBottom: "0px !important",
          },
          "&:first-child": {
            marginTop: "0px !important",
          },
          ".MuiListItemIcon-root": {
            minWidth: "25px",
          },
          ".MuiList-root": {
            padding: "0px !important",
            boxShadow: theme.shadows[1],
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          ".MuiPaper-root": {
            width: "100%",
            boxShadow: theme.shadows[1],
          },
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: "10px !important",
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: "5px 10px !important",
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: "0px",
        },
        indicator: {
          backgroundColor: "transparent",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.action.hover,
          borderRadius: theme.shape.borderRadius,
          textTransform: "capitalize",
          minHeight: "0px",
          padding: "5px 10px",
          boxShadow: theme.shadows[1],

          "&.Mui-selected": {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.main,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          padding: "6px 8px",
          boxShadow: theme.shadows[1],

          textTransform: "capitalize",
          ".MuiChip-label": {
            fontSize: "10px !important",
          },
        },
        filled: {
          border: "none",
        },
        outlined: {},
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          "&::before": {
            height: "0px",
          },
          "&.MuiPaper-root": {
            boxShadow: "none !important",
          },
          ".MuiAccordionSummary-root": {
            borderRadius: theme.shape.borderRadius,
            marginBottom: "10px",
            backgroundColor: theme.palette.action.hover,
            minHeight: "35px !important",
          },

          ".MuiAccordionSummary-content": {
            "& .MuiTypography-root": {},
            "&.Mui-expanded": {
              margin: "10px 0",
            },
          },
          ".MuiAccordionDetails-root": {
            padding: theme.shape.borderRadius,
            marginTop: "0px",
            backgroundColor: theme.palette.action.hover,
            borderRadius: theme.shape.borderRadius,
          },
        },
      },
    },
    MuiSimpleTreeView: {
      styleOverrides: {
        root: {
          ".MuiTreeItem-root": {
            ".MuiTreeItem-content": {
              padding: "1px 0px",
            },
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          padding: "5px",
          margin: "0px 10px",
          marginRight: "5px",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          height: "unset !important",
        },
      },
    },
    MuiBarElement: {
      styleOverrides: {
        root: {
          rx: 5,
        },
      },
    },
    MuiChartsLegend: {
      styleOverrides: {
        root: {
          ".MuiChartsLegend-mark": {
            rx: 10,
          },
        },
      },
    },
    MuiChartsAxis: {
      styleOverrides: {
        root: {
          ".MuiChartsAxis-tickLabel": {
            color: theme.palette.text.secondary,
            fontWeight: 600,
          },
          ".MuiChartsAxis-label": {
            color: theme.palette.text.secondary,
            fontWeight: 600,
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          boxShadow: theme.shadows[1],
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.text.primary,
        },
      },
    },
  } as any;
}

type ShadeCodeType =
  | "50"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | "950";

const PaletteColors = {
  slate: {
    "50": "#f8fafc",
    "100": "#f1f5f9",
    "200": "#e2e8f0",
    "300": "#cbd5e1",
    "400": "#94a3b8",
    "500": "#64748b",
    "600": "#475569",
    "700": "#334155",
    "800": "#1e293b",
    "900": "#0f172a",
    "950": "#020617",
  },
  gray: {
    "50": "#f9fafb",
    "100": "#f3f4f6",
    "200": "#e5e7eb",
    "300": "#d1d5db",
    "400": "#9ca3af",
    "500": "#6b7280",
    "600": "#4b5563",
    "700": "#374151",
    "800": "#1f2937",
    "900": "#111827",
    "950": "#030712",
  },
  zinc: {
    "50": "#fafafa",
    "100": "#f4f4f5",
    "200": "#e4e4e7",
    "300": "#d4d4d8",
    "400": "#a1a1aa",
    "500": "#71717a",
    "600": "#52525b",
    "700": "#3f3f46",
    "800": "#27272a",
    "900": "#18181b",
    "950": "#09090b",
  },
  neutral: {
    "50": "#fafafa",
    "100": "#f5f5f5",
    "200": "#e5e5e5",
    "300": "#d4d4d4",
    "400": "#a3a3a3",
    "500": "#737373",
    "600": "#525252",
    "700": "#404040",
    "800": "#262626",
    "900": "#171717",
    "950": "#0a0a0a",
  },
  stone: {
    "50": "#fafaf9",
    "100": "#f5f5f4",
    "200": "#e7e5e4",
    "300": "#d6d3d1",
    "400": "#a8a29e",
    "500": "#78716c",
    "600": "#57534e",
    "700": "#44403c",
    "800": "#292524",
    "900": "#1c1917",
    "950": "#0c0a09",
  },
  red: {
    "50": "#fef2f2",
    "100": "#fee2e2",
    "200": "#fecaca",
    "300": "#fca5a5",
    "400": "#f87171",
    "500": "#ef4444",
    "600": "#dc2626",
    "700": "#b91c1c",
    "800": "#991b1b",
    "900": "#7f1d1d",
    "950": "#450a0a",
  },
  orange: {
    "50": "#fff7ed",
    "100": "#ffedd5",
    "200": "#fed7aa",
    "300": "#fdba74",
    "400": "#fb923c",
    "500": "#f97316",
    "600": "#ea580c",
    "700": "#c2410c",
    "800": "#9a3412",
    "900": "#7c2d12",
    "950": "#431407",
  },
  amber: {
    "50": "#fffbeb",
    "100": "#fef3c7",
    "200": "#fde68a",
    "300": "#fcd34d",
    "400": "#fbbf24",
    "500": "#f59e0b",
    "600": "#d97706",
    "700": "#b45309",
    "800": "#92400e",
    "900": "#78350f",
    "950": "#451a03",
  },
  yellow: {
    "50": "#fefce8",
    "100": "#fef9c3",
    "200": "#fef08a",
    "300": "#fde047",
    "400": "#facc15",
    "500": "#eab308",
    "600": "#ca8a04",
    "700": "#a16207",
    "800": "#854d0e",
    "900": "#713f12",
    "950": "#422006",
  },
  lime: {
    "50": "#f7fee7",
    "100": "#ecfccb",
    "200": "#d9f99d",
    "300": "#bef264",
    "400": "#a3e635",
    "500": "#84cc16",
    "600": "#65a30d",
    "700": "#4d7c0f",
    "800": "#3f6212",
    "900": "#365314",
    "950": "#1a2e05",
  },
  green: {
    "50": "#f0fdf4",
    "100": "#dcfce7",
    "200": "#bbf7d0",
    "300": "#86efac",
    "400": "#4ade80",
    "500": "#22c55e",
    "600": "#16a34a",
    "700": "#15803d",
    "800": "#166534",
    "900": "#14532d",
    "950": "#052e16",
  },
  emerald: {
    "50": "#ecfdf5",
    "100": "#d1fae5",
    "200": "#a7f3d0",
    "300": "#6ee7b7",
    "400": "#34d399",
    "500": "#10b981",
    "600": "#059669",
    "700": "#047857",
    "800": "#065f46",
    "900": "#064e3b",
    "950": "#022c22",
  },
  teal: {
    "50": "#f0fdfa",
    "100": "#ccfbf1",
    "200": "#99f6e4",
    "300": "#5eead4",
    "400": "#2dd4bf",
    "500": "#14b8a6",
    "600": "#0d9488",
    "700": "#0f766e",
    "800": "#115e59",
    "900": "#134e4a",
    "950": "#042f2e",
  },
  cyan: {
    "50": "#ecfeff",
    "100": "#cffafe",
    "200": "#a5f3fc",
    "300": "#67e8f9",
    "400": "#22d3ee",
    "500": "#06b6d4",
    "600": "#0891b2",
    "700": "#0e7490",
    "800": "#155e75",
    "900": "#164e63",
    "950": "#083344",
  },
  sky: {
    "50": "#f0f9ff",
    "100": "#e0f2fe",
    "200": "#bae6fd",
    "300": "#7dd3fc",
    "400": "#38bdf8",
    "500": "#0ea5e9",
    "600": "#0284c7",
    "700": "#0369a1",
    "800": "#075985",
    "900": "#0c4a6e",
    "950": "#082f49",
  },
  blue: {
    "50": "#eff6ff",
    "100": "#dbeafe",
    "200": "#bfdbfe",
    "300": "#93c5fd",
    "400": "#60a5fa",
    "500": "#3b82f6",
    "600": "#2563eb",
    "700": "#1d4ed8",
    "800": "#1e40af",
    "900": "#1e3a8a",
    "950": "#172554",
  },
  indigo: {
    "50": "#eef2ff",
    "100": "#e0e7ff",
    "200": "#c7d2fe",
    "300": "#a5b4fc",
    "400": "#818cf8",
    "500": "#6366f1",
    "600": "#4f46e5",
    "700": "#4338ca",
    "800": "#3730a3",
    "900": "#312e81",
    "950": "#1e1b4b",
  },
  violet: {
    "50": "#f5f3ff",
    "100": "#ede9fe",
    "200": "#ddd6fe",
    "300": "#c4b5fd",
    "400": "#a78bfa",
    "500": "#8b5cf6",
    "600": "#7c3aed",
    "700": "#6d28d9",
    "800": "#5b21b6",
    "900": "#4c1d95",
    "950": "#2e1065",
  },
  purple: {
    "50": "#faf5ff",
    "100": "#f3e8ff",
    "200": "#e9d5ff",
    "300": "#d8b4fe",
    "400": "#c084fc",
    "500": "#a855f7",
    "600": "#9333ea",
    "700": "#7e22ce",
    "800": "#6b21a8",
    "900": "#581c87",
    "950": "#2d0a4e",
  },
  fuchsia: {
    "50": "#fdf4ff",
    "100": "#fae8ff",
    "200": "#f5d0fe",
    "300": "#f0abfc",
    "400": "#e879f9",
    "500": "#d946ef",
    "600": "#c026d3",
    "700": "#a21caf",
    "800": "#86198f",
    "900": "#701a75",
    "950": "#4a044e",
  },
  pink: {
    "50": "#fdf2f8",
    "100": "#fce7f3",
    "200": "#fbcfe8",
    "300": "#f9a8d4",
    "400": "#f472b6",
    "500": "#ec4899",
    "600": "#db2777",
    "700": "#be185d",
    "800": "#9d174d",
    "900": "#831843",
    "950": "#500724",
  },
  rose: {
    "50": "#fff1f2",
    "100": "#ffe4e6",
    "200": "#fecdd3",
    "300": "#fda4af",
    "400": "#fb7185",
    "500": "#f43f5e",
    "600": "#e11d48",
    "700": "#be123c",
    "800": "#9f1239",
    "900": "#881337",
    "950": "#4c0519",
  },
  default: {
    "50": "#eff6ff",
    "100": "#dbeafe",
    "200": "#bfdbfe",
    "300": "#93c5fd",
    "400": "#60a5fa",
    "500": "#3b82f6",
    "600": "#2563eb",
    "700": "#1d4ed8",
    "800": "#1e40af",
    "900": "#1e3a8a",
    "950": "#172554",
  },
};

type TypeThemeColors =
  | "default"
  | "slate"
  | "gray"
  | "zinc"
  | "neutral"
  | "stone"
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose";

const ThemeColorsArray: TypeThemeColors[] = [
  "default",

  "fuchsia",
  "purple",
  "violet",

  "cyan",
  "teal",
  "emerald",

  "green",
  "lime",

  "red",
  "rose",
  "pink",

  "indigo",
  "blue",
  "sky",

  "yellow",
  "amber",
  "orange",

  "stone",
  "neutral",
  "zinc",
  "gray",
  "slate",
];

const ForYinYang_ThemeColorsArray = () =>
  ThemeColorsArray.filter(
    (s) =>
      !["default", "stone", "neutral", "zinc", "gray", "slate"].includes(s),
  )[
    Math.floor(
      Math.random() *
        ThemeColorsArray.filter(
          (s) =>
            !["default", "stone", "neutral", "zinc", "gray", "slate"].includes(
              s,
            ),
        ).length,
    )
  ];

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
