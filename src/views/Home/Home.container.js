import React from "react";
import Home from "./Home";
import { useMediaQuery } from "@mui/material";

const fontColorSx = { color: "white" };

const HomeContainer = () => {
  const isMobileView = useMediaQuery("(max-width:900px)");

  return <Home isMobileView={isMobileView} fontColorSx={fontColorSx} />;
};

export default HomeContainer;
