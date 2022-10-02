import React from "react";
import TV from "./TV";
import { useParams } from "react-router-dom";
import { TagFacesRounded } from "@mui/icons-material";

function TVContainer() {
  const { tag } = useParams();
  console.log(tag);
  return <TV />;
}

export default TVContainer;
