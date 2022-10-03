import React from "react";
import Detail from "./Detail";
import { ViewHoc } from "../../ViewHoc";

const DetailContainer = (props) => {
  return (
    <ViewHoc>
      <Detail />
    </ViewHoc>
  );
};

export default DetailContainer;
