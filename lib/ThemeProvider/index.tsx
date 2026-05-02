import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as CustomThemeProvider } from "@mui/material";
import { useMainContext } from "../MainContext";
import { alpha } from "@mui/material";
import type { Theme } from "@mui/material";

export function manualOverrides(theme: Theme) {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#444",
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

interface Props {
  children: React.ReactNode;
}

function ThemeProvider({ children }: Props) {
  const mainContext = useMainContext();

  return (
    <CustomThemeProvider theme={mainContext.Theme_WebApp_Theme}>
      <CssBaseline />
      {children}
    </CustomThemeProvider>
  );
}

export default ThemeProvider;
