# 1 use provider MUIThemeContextProvider and wrap it to your app element or any element you like to have theme

```js
import { MUIThemeContextProvider } from "@abhishekzambare/mui";

const App = () => {
  return (
    <MUIThemeContextProvider>
      <Header />
      <Footer />
    </MUIThemeContextProvider>
  );
};
```

# 2 use the theme component to change theme colors use it anywere but within the provider tree

```js
import { YinYangThemesMenu } from "@abhishekzambare/mui";

const App = () => {
  return (
    <MUIThemeContextProvider>
      <Header />
      <YinYangThemesMenu />
      <Footer />
    </MUIThemeContextProvider>
  );
};
```

- [By Abhishek Zambare](http://abhishekzambare.vercel.app/)
