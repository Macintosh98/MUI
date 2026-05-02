import type { JSX } from "react";
import { MainContextProvider } from "./MainContext";

import ThemeProvider from "./ThemeProvider";

const App = ({ children }: { children: JSX.Element }) => {
  return (
    <MainContextProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </MainContextProvider>
  );
};

export default App;
