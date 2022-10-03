import React from "react";
import TV from "./TV";
import { useMediaQuery } from "@mui/material";
import { useParams } from "react-router-dom";
import { ViewHoc } from "../../ViewHoc";

function TVContainer() {
  const { tag } = useParams();
  const isMobileView = useMediaQuery("(max-width:900px)");
  console.log(tag);
  return (
    <ViewHoc>
      <TV isMobileView={isMobileView} tag={tag} />
    </ViewHoc>
  );
}

export default TVContainer;
