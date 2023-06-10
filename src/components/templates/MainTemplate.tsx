import React from "react";
import Header from "../organisms/Header";
import { Container } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

function MainTemplate({ children }: Props) {
  return (
    <>
      <Header />
      <Container sx={{ mt: 2 }}>{children}</Container>
    </>
  );
}

export default MainTemplate;
