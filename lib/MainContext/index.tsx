import { createContext, useContext, useEffect } from "react";

import useThemeSlice, { type ThemeSliceType } from "./useThemeSlice";

const MUIThemeContext = createContext<ThemeSliceType | null>(null);

export function useMUIThemeContext() {
  const context = useContext(MUIThemeContext);
  if (!context) {
    throw new Error("useMUIThemeContext must be used within its provider");
  }

  return context;
}

export function MUIThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const contextValues = {
    ...useThemeSlice(),
  };

  useEffect(() => {
    console.log(
      "%c Current MUITheme Context : ",
      "font-size: 16px; font-weight: bold; color: green; font-family: cursive;",
      contextValues,
    );
  }, Object.values(contextValues));

  return <MUIThemeContext value={contextValues}>{children}</MUIThemeContext>;
}
