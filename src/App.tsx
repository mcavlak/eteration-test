import { ThemeProvider } from "@mui/material";
import React from "react";
import "./styles/reset.css";
import { themeOptions } from "./styles/mui_theme";
import MainTemplate from "./components/templates/MainTemplate";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import { useRoutes } from "react-router-dom";

function App() {
  const element = useRoutes([
    { path: "/", element: <Products /> },
    { path: "/product/:productId", element: <ProductDetail /> },
    { path: "*", element: <div>Bulunamadı!</div> },
  ]);
  return (
    <ThemeProvider theme={themeOptions}>
      <MainTemplate>{element}</MainTemplate>
    </ThemeProvider>
  );
}

export default App;
