import React from "react";
import { useMediaQuery } from "@mui/material";
import People from "./People";
import { useParams } from "react-router-dom";
import { ViewHoc } from "../../ViewHoc";

function PeopleContainer() {
  const { tag } = useParams();
  const isMobileView = useMediaQuery("(max-width:900px)");
  console.log(tag);
  return (
    <ViewHoc>
      <People isMobileView={isMobileView} tag={tag} />
    </ViewHoc>
  );
}

export default PeopleContainer;
