import React from "react";
import { Typography } from "@mui/material";

function ErrorComponent(props) {
  const { errorText } = props;
  return (
    <Typography color="red" width="100%" textAlign="center">
      {errorText}
    </Typography>
  );
}

export default ErrorComponent;
