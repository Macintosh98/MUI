import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as CustomThemeProvider } from "@mui/material";
import { useMUIThemeContext } from "../MainContext";
import YinYangThemesMenu from "./YinYangThemesMenuProvider";

function WithTheme() {
    const MUIThemeContext = useMUIThemeContext();

    return (
        <CustomThemeProvider
            theme={MUIThemeContext.Theme_WebApp_Theme}
        >
            <CssBaseline />
            <YinYangThemesMenu></YinYangThemesMenu>
        </CustomThemeProvider>
    );
}

export default WithTheme;
