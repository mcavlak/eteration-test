import { ThemeProvider } from "@mui/material";
import React from "react";
import { themeOptions } from "./styles/mui_theme";

function App() {
  return <ThemeProvider theme={themeOptions}></ThemeProvider>;
}

export default App;
