import type { JSX } from "react";

export const Card = ({ children }: { children: JSX.Element }) => {
  return (
    <div
      style={{
        padding: "10px",
        margin: "10px",
        backgroundColor: "lightblue",
        minHeight: "500px",
        minWidth: "500px",
      }}
    >
      {children}
    </div>
  );
};
