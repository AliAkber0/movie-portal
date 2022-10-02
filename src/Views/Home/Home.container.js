import React from "react";
import Home from "./Home";
import { useMediaQuery } from "@mui/material";
import { ViewHoc } from "../../ViewHoc";

const fontColorSx = { color: "white" };

const HomeContainer = () => {
  const isMobileView = useMediaQuery("(max-width:900px)");

  return (
    <ViewHoc>
      <Home isMobileView={isMobileView} fontColorSx={fontColorSx} />
    </ViewHoc>
  );
};

export default HomeContainer;
