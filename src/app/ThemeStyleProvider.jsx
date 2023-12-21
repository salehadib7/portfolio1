"use client";

import { ThemeContext } from "./context";
import { useContext } from "react";

const ThemeStyleProvider = ({ children }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      {children}
    </div>
  );
};

export default ThemeStyleProvider;
