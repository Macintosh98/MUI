# 1 use provider MUIThemeContextProvider and wrap it to your app element or any element you like to have theme

```js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { MUIThemeContextProvider } from "@abhishekzambare/mui";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MUIThemeContextProvider>
      <App />
    </MUIThemeContextProvider>
  </StrictMode>,
);

```

# 2 apply my theme so mui looks better and has lots of colors

```js
import { useMUIThemeContext } from "@abhishekzambare/mui";
import { Button, Stack, ThemeProvider } from "@mui/material";

function App() {
    const theme = useMUIThemeContext();

    return (
        <ThemeProvider theme={theme.Theme_WebApp_Theme}>
            <>
                <Stack spacing={2} direction="row">
                    <Button variant="text">Text</Button>
                    <Button variant="contained">Contained</Button>
                    <Button variant="outlined">Outlined</Button>
                </Stack>
            </>
        </ThemeProvider>
    );
}

export default App;
```

# 3 use the theme component to change theme colors use it anywere but within the provider tree

```js
import {
    useMUIThemeContext,
    YinYangThemesMenu,
} from "@abhishekzambare/mui";
import { Button, Stack, ThemeProvider } from "@mui/material";

function App() {
    const theme = useMUIThemeContext();

    return (
        <ThemeProvider theme={theme.Theme_WebApp_Theme}>
            <>
                <Stack spacing={2} direction="row">
                    <Button variant="text">Text</Button>
                    <Button variant="contained">Contained</Button>
                    <Button variant="outlined">Outlined</Button>
                </Stack>
                <YinYangThemesMenu />
            </>
        </ThemeProvider>
    );
}

export default App;
```

- [By Abhishek Zambare](http://abhishekzambare.vercel.app/)
