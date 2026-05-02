import { createContext, useContext, useEffect } from "react";

import useThemeSlice, { type ThemeSliceType } from "./useThemeSlice";

const MainContext = createContext<ThemeSliceType | null>(null);

export function useMainContext() {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error("useMainContext must be used within its provider");
  }

  return context;
}

export function MainContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const contextValues = {
    ...useThemeSlice(),
  };

  useEffect(() => {
    console.log(
      "%c Current Main Context : ",
      "font-size: 16px; font-weight: bold; color: green; font-family: cursive;",
      contextValues,
    );
  }, Object.values(contextValues));

  return <MainContext value={contextValues}>{children}</MainContext>;
}
