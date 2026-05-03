import {
  Tooltip,
  IconButton,
  MenuItem,
  Popover,
  Select,
  Typography,
  Stack,
} from "@mui/material";
import { AnimateZoom } from "@abhishekzambare/animate";
import { useState } from "react";
import { AnimateFromTop } from "@abhishekzambare/animate";
import { AnimateItem } from "@abhishekzambare/animate";
import { AnimateOnScroll } from "@abhishekzambare/animate";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import FormatPaintOutlinedIcon from "@mui/icons-material/FormatPaintOutlined";
import FormatColorFillOutlinedIcon from "@mui/icons-material/FormatColorFillOutlined";
import { useMUIThemeContext } from "@abhishekzambare/mui";
import { styled, type SwitchProps, Switch } from "@mui/material";
import { Box } from "@mui/material";

import { useTheme, useMediaQuery } from "@mui/material";

function useResponsive(query: string, start?: any, end?: any) {
  const theme = useTheme();

  const mediaUp = useMediaQuery(theme.breakpoints.up(start));

  const mediaDown = useMediaQuery(theme.breakpoints.down(start));

  const mediaBetween = useMediaQuery(theme.breakpoints.between(start, end));

  const mediaOnly = useMediaQuery(theme.breakpoints.only(start));

  if (query === "up") {
    return mediaUp;
  }

  if (query === "down") {
    return mediaDown;
  }

  if (query === "between") {
    return mediaBetween;
  }

  return mediaOnly;
}

const HighlightedText = ({
  text,
  key = "",
  isPrimary = false,
}: {
  text: string;
  key?: string;
  isPrimary?: boolean;
}) => {
  return (
    <AnimateItem mKey={"HighlighedText" + key}>
      <Box
        sx={{
          backgroundColor: isPrimary
            ? (theme) => theme.palette.primary.main
            : (theme) => theme.palette.secondary.main,
          boxShadow: (theme) => theme.shadows[1],

          px: 1,
          borderRadius: (theme) => theme.shape.borderRadius,
        }}
      >
        <Typography
          variant="subtitle2"
          color={"textPrimary"}
          noWrap
          sx={{
            textOverflow: "ellipsis",
          }}
        >
          {text}
        </Typography>
      </Box>
    </AnimateItem>
  );
};

const GrayText = ({
  text,
  fontSize = 12,
}: {
  text: string;
  fontSize?: string | number;
}) => {
  return (
    <Typography
      variant="subtitle1"
      color={"textSecondary"}
      noWrap
      sx={{
        fontSize: fontSize,
        textOverflow: "ellipsis",
      }}
    >
      {text}
    </Typography>
  );
};

const NewSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" {...props} />
))(({ theme }) => ({
  width: 35,
  height: 20,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "500ms",
    color: "#fff",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(16px)",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.secondary.main,
        border: "1px solid " + theme.palette.action.hover,

        opacity: 1,
      },
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.palette.grey[100],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 15,
    height: 15,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.action.active,
    boxShadow: theme.shadows[1],
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));
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

const YinYangThemesMenu = () => {
  const MUIThemeContext = useMUIThemeContext();
  const isDesktop = useResponsive("up", "lg");
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const isAnchorElOpen = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <>
      {" "}
      <AnimateZoom>
        <Tooltip title="YinYang Colors">
          <IconButton
            sx={{
              mt: "3px !important",
            }}
            onClick={(e) => {
              handleClick(e);
            }}
          >
            <Stack
              direction={"row"}
              sx={{
                borderRadius: "100%",
                animation: "roll 40000s infinite",

                boxShadow: (theme) => theme.shadows[1],
              }}
            >
              <Stack
                sx={{
                  height: "25px",
                  width: "13px",
                  backgroundColor: (theme) => theme.palette.primary.main,
                  borderRadius: "100% 0 0 100%/50% 0 0 50%",
                }}
              ></Stack>
              <Stack
                sx={{
                  height: "25px",
                  width: "13px",
                  backgroundColor: (theme) => theme.palette.secondary.main,
                  borderRadius: "0 100% 100% 0/0 50% 50% 0",
                }}
              ></Stack>
            </Stack>
          </IconButton>
        </Tooltip>
      </AnimateZoom>
      <Popover
        open={isAnchorElOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={{
          mt: 0.5,
        }}
      >
        <AnimateOnScroll key="theme">
          <Stack
            spacing={1}
            sx={{
              p: 2,
              alignItems: "center",
            }}
          >
            <Stack
              spacing={1}
              direction={"row"}
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AnimateFromTop>
                <Stack
                  direction={"row"}
                  spacing={1}
                  onClick={() => {
                    MUIThemeContext.setYinYangColors();
                  }}
                  sx={{
                    alignItems: "center",
                  }}
                >
                  <AnimateItem mKey={"YinYang1"}>
                    <AnimateZoom>
                      <Tooltip title="YinYang Colors">
                        <IconButton>
                          <Stack
                            direction={"row"}
                            sx={{
                              borderRadius: "100%",

                              animation: "roll 40000s infinite",

                              boxShadow: (theme) => theme.shadows[1],
                            }}
                          >
                            <Stack
                              sx={{
                                height: "25px",
                                width: "13px",
                                backgroundColor: (theme) =>
                                  theme.palette.primary.main,
                                borderRadius: "100% 0 0 100%/50% 0 0 50%",
                              }}
                            ></Stack>
                            <Stack
                              sx={{
                                height: "25px",
                                width: "13px",
                                backgroundColor: (theme) =>
                                  theme.palette.secondary.main,
                                borderRadius: "0 100% 100% 0/0 50% 50% 0",
                              }}
                            ></Stack>
                          </Stack>
                        </IconButton>
                      </Tooltip>
                    </AnimateZoom>
                  </AnimateItem>
                  <Typography variant="subtitle1" color="textSecondary">
                    YinYang Colors
                  </Typography>
                  <AnimateItem mKey={"YinYang2"}>
                    <AnimateZoom>
                      <Tooltip title="YinYang Colors">
                        <IconButton>
                          <Stack
                            direction={"row"}
                            sx={{
                              borderRadius: "100%",

                              animation: "roll 40000s infinite",

                              boxShadow: (theme) => theme.shadows[1],
                            }}
                          >
                            <Stack
                              sx={{
                                height: "25px",
                                width: "13px",
                                backgroundColor: (theme) =>
                                  theme.palette.primary.main,
                                borderRadius: "100% 0 0 100%/50% 0 0 50%",
                              }}
                            ></Stack>
                            <Stack
                              sx={{
                                height: "25px",
                                width: "13px",
                                backgroundColor: (theme) =>
                                  theme.palette.secondary.main,
                                borderRadius: "0 100% 100% 0/0 50% 50% 0",
                              }}
                            ></Stack>
                          </Stack>
                        </IconButton>
                      </Tooltip>
                    </AnimateZoom>
                  </AnimateItem>
                </Stack>
              </AnimateFromTop>
              <AnimateZoom>
                <NewSwitch
                  value={
                    MUIThemeContext.Theme_LightOrDarkMode === undefined ||
                    MUIThemeContext.Theme_LightOrDarkMode === "light"
                      ? false
                      : true
                  }
                  defaultChecked={
                    MUIThemeContext.Theme_LightOrDarkMode === undefined ||
                    MUIThemeContext.Theme_LightOrDarkMode === "light"
                      ? false
                      : true
                  }
                  onChange={() => {
                    MUIThemeContext.setTheme_LightOrDarkMode(
                      MUIThemeContext.Theme_LightOrDarkMode === undefined ||
                        MUIThemeContext.Theme_LightOrDarkMode === "light"
                        ? "dark"
                        : "light",
                    );
                  }}
                ></NewSwitch>
              </AnimateZoom>
              <AnimateFromTop>
                <Stack
                  direction={"row"}
                  spacing={1}
                  onClick={() => {
                    MUIThemeContext.setYinYang2Colors();
                  }}
                  sx={{
                    alignItems: "center",
                  }}
                >
                  <AnimateItem mKey={"YinYang1"}>
                    <AnimateZoom>
                      <Tooltip title="YinYang Colors">
                        <IconButton>
                          <Stack
                            direction={"row"}
                            sx={{
                              borderRadius: "100%",

                              animation: "roll 40000s infinite",

                              boxShadow: (theme) => theme.shadows[1],
                            }}
                          >
                            <Stack
                              sx={{
                                height: "25px",
                                width: "13px",
                                backgroundColor: (theme) =>
                                  theme.palette.primary.main,
                                borderRadius: "100% 0 0 100%/50% 0 0 50%",
                              }}
                            ></Stack>
                            <Stack
                              sx={{
                                height: "25px",
                                width: "13px",
                                backgroundColor: (theme) =>
                                  theme.palette.secondary.main,
                                borderRadius: "0 100% 100% 0/0 50% 50% 0",
                              }}
                            ></Stack>
                          </Stack>
                        </IconButton>
                      </Tooltip>
                    </AnimateZoom>
                  </AnimateItem>
                  <Typography variant="subtitle1" color="textSecondary">
                    Yin2Yang Colors
                  </Typography>
                  <AnimateItem mKey={"YinYang2"}>
                    <AnimateZoom>
                      <Tooltip title="YinYang Colors">
                        <IconButton>
                          <Stack
                            direction={"row"}
                            sx={{
                              borderRadius: "100%",

                              animation: "roll 40000s infinite",

                              boxShadow: (theme) => theme.shadows[1],
                            }}
                          >
                            <Stack
                              sx={{
                                height: "25px",
                                width: "13px",
                                backgroundColor: (theme) =>
                                  theme.palette.primary.main,
                                borderRadius: "100% 0 0 100%/50% 0 0 50%",
                              }}
                            ></Stack>
                            <Stack
                              sx={{
                                height: "25px",
                                width: "13px",
                                backgroundColor: (theme) =>
                                  theme.palette.secondary.main,
                                borderRadius: "0 100% 100% 0/0 50% 50% 0",
                              }}
                            ></Stack>
                          </Stack>
                        </IconButton>
                      </Tooltip>
                    </AnimateZoom>
                  </AnimateItem>
                </Stack>
              </AnimateFromTop>
            </Stack>
            <AnimateFromTop>
              <Stack direction={"row"} spacing={1}>
                <HighlightedText isPrimary text="Colors" />
                <Typography variant="subtitle1" color="textSecondary">
                  &
                </Typography>
                <HighlightedText text="Shades" />
              </Stack>
            </AnimateFromTop>

            <Stack
              spacing={1}
              sx={{
                width: "100%",
                overflow: "auto",
              }}
            >
              <Stack direction={"row"} spacing={1}>
                <ColorLensOutlinedIcon
                  sx={{
                    color: (theme) => theme.palette.primary.main,
                  }}
                />
                <GrayText text="Primary" />
              </Stack>
              <Stack
                direction={isDesktop ? "row" : "column"}
                spacing={2}
                sx={{
                  alignItems: "center",

                  backgroundColor: "background.default",

                  borderRadius: (theme) => theme.shape.borderRadius,

                  m: 1,
                  p: 1,
                  overflow: "auto",
                }}
              >
                <GrayText text="Color" />
                <AnimateItem mKey={"PrimaryTheme"}>
                  <AnimateZoom>
                    <Stack
                      direction={"row"}
                      sx={[
                        {
                          alignItems: "center",
                        },
                        (theme) => ({
                          height: "32px",
                          backgroundColor: theme.palette.action.hover,
                          pr: 0,
                          pl: 2,

                          borderRadius: (theme) => theme.shape.borderRadius,
                        }),
                      ]}
                    >
                      <FormatPaintOutlinedIcon
                        sx={{
                          color: (theme) => theme.palette.primary.main,
                        }}
                      />
                      <Select
                        sx={{
                          width: "100%",
                          maxWidth: "120px",
                          boxShadow: (theme) => theme.shadows[0],
                          backgroundColor: "transparent",
                        }}
                        value={MUIThemeContext.Theme_PrimaryColor}
                        onChange={(e: any) => {
                          MUIThemeContext.setTheme_PrimaryColor(e.target.value);
                        }}
                      >
                        {ThemeColorsArray.map((value: string) => (
                          <MenuItem value={value} key={value}>
                            <Stack
                              direction={"row"}
                              sx={{
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: "150px",
                              }}
                            >
                              <GrayText text={value} />
                            </Stack>
                          </MenuItem>
                        ))}
                      </Select>
                    </Stack>
                  </AnimateZoom>
                </AnimateItem>
                <GrayText text="Shade" />
                <AnimateItem mKey={"Shade"}>
                  <AnimateZoom>
                    <Stack
                      direction={"row"}
                      sx={[
                        {
                          alignItems: "center",
                        },
                        (theme) => ({
                          height: "32px",
                          backgroundColor: theme.palette.action.hover,
                          pr: 0,
                          pl: 2,

                          borderRadius: (theme) => theme.shape.borderRadius,
                        }),
                      ]}
                    >
                      <FormatColorFillOutlinedIcon
                        sx={{
                          color: (theme) => theme.palette.primary.main,
                        }}
                      />
                      <Select
                        sx={{
                          width: "100%",
                          maxWidth: "120px",

                          boxShadow: (theme) => theme.shadows[0],
                          backgroundColor: "transparent",
                        }}
                        value={MUIThemeContext.Theme_SelectedShadeType_Primary}
                        onChange={(e: any) => {
                          MUIThemeContext.setTheme_SelectedShadeType_Primary(
                            e.target.value,
                          );
                        }}
                      >
                        {["lightShade", "mainShade", "darkShade"].map(
                          (value: string) => (
                            <MenuItem value={value} key={value}>
                              <Stack
                                direction={"row"}
                                sx={{
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  width: "150px",
                                }}
                              >
                                <GrayText text={value} />
                              </Stack>
                            </MenuItem>
                          ),
                        )}
                      </Select>
                    </Stack>
                  </AnimateZoom>
                </AnimateItem>
              </Stack>
              <Stack direction={"row"} spacing={1}>
                <ColorLensOutlinedIcon
                  sx={{
                    color: (theme) => theme.palette.secondary.main,
                  }}
                />
                <GrayText text="Secondary" />
              </Stack>

              <Stack
                direction={isDesktop ? "row" : "column"}
                spacing={2}
                sx={{
                  alignItems: "center",

                  backgroundColor: "background.default",

                  borderRadius: (theme) => theme.shape.borderRadius,

                  m: 1,
                  p: 1,
                  overflow: "auto",
                }}
              >
                <GrayText text="Color" />
                <AnimateItem mKey={"SecondaryTheme"}>
                  <AnimateZoom>
                    <Stack
                      direction={"row"}
                      sx={[
                        {
                          alignItems: "center",
                        },
                        (theme) => ({
                          height: "32px",
                          backgroundColor: theme.palette.action.hover,
                          pr: 0,
                          pl: 2,

                          borderRadius: (theme) => theme.shape.borderRadius,
                        }),
                      ]}
                    >
                      <FormatPaintOutlinedIcon
                        sx={{
                          color: (theme) => theme.palette.secondary.main,
                        }}
                      />
                      <Select
                        sx={{
                          width: "100%",
                          maxWidth: "120px",

                          boxShadow: (theme) => theme.shadows[0],
                          backgroundColor: "transparent",
                        }}
                        value={MUIThemeContext.Theme_SecondaryColor}
                        onChange={(e: any) => {
                          MUIThemeContext.setTheme_SecondaryColor(
                            e.target.value,
                          );
                        }}
                      >
                        {ThemeColorsArray.map((value: string) => (
                          <MenuItem value={value} key={value}>
                            <Stack
                              direction={"row"}
                              sx={{
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: "150px",
                              }}
                            >
                              <GrayText text={value} />
                            </Stack>
                          </MenuItem>
                        ))}
                      </Select>
                    </Stack>
                  </AnimateZoom>
                </AnimateItem>
                <GrayText text="Shade" />
                <AnimateItem mKey={"Shade"}>
                  <AnimateZoom>
                    <Stack
                      direction={"row"}
                      sx={[
                        {
                          alignItems: "center",
                        },
                        (theme) => ({
                          height: "32px",
                          backgroundColor: theme.palette.action.hover,
                          pr: 0,
                          pl: 2,

                          borderRadius: (theme) => theme.shape.borderRadius,
                        }),
                      ]}
                    >
                      <FormatColorFillOutlinedIcon
                        sx={{
                          color: (theme) => theme.palette.secondary.main,
                        }}
                      />
                      <Select
                        sx={{
                          width: "100%",
                          maxWidth: "120px",

                          boxShadow: (theme) => theme.shadows[0],
                          backgroundColor: "transparent",
                        }}
                        value={
                          MUIThemeContext.Theme_SelectedShadeType_Secondary
                        }
                        onChange={(e: any) => {
                          MUIThemeContext.setTheme_SelectedShadeType_Secondary(
                            e.target.value,
                          );
                        }}
                      >
                        {["lightShade", "mainShade", "darkShade"].map(
                          (value: string) => (
                            <MenuItem value={value} key={value}>
                              <Stack
                                direction={"row"}
                                sx={{
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  width: "150px",
                                }}
                              >
                                <GrayText text={value} />
                              </Stack>
                            </MenuItem>
                          ),
                        )}
                      </Select>
                    </Stack>
                  </AnimateZoom>
                </AnimateItem>
              </Stack>
            </Stack>
          </Stack>
        </AnimateOnScroll>
      </Popover>
    </>
  );
};

export default YinYangThemesMenu;
