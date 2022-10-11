import React from "react";
import { Button, useTheme } from "@mui/material";

const ButtonComponent = (props) => {
  const theme = useTheme();
  const { buttonLabel, onClick } = props;
  const buttonSx = {
    background: `${theme.palette.primary.gradientColor}`,
  };

  return (
    <Button onClick={onClick} sx={buttonSx} fullWidth>
      {buttonLabel}
    </Button>
  );
};

export default ButtonComponent;
