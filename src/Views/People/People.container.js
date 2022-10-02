import React from "react";
import People from "./People";
import { useParams } from "react-router-dom";

function PeopleContainer() {
  const { tag } = useParams(tag);
  return <People />;
}

export default PeopleContainer;
