import React from "react";
import { ToggleButton, ToggleButtonGroup, useTheme, Box } from "@mui/material";

const ToggleButtonComponent = ({ isMobileView, toggleButtonNames }) => {
  const theme = useTheme();
  const [alignment, setAlignment] = React.useState(
    toggleButtonNames[0]?.toLowerCase()
  );

  const handleChange = (event, newAlignment) => {
    console.log(newAlignment);
    if (newAlignment && alignment !== newAlignment) setAlignment(newAlignment);
  };
  return (
    <Box
      ml="2em"
      border={`1px solid ${theme.palette.primary.main}`}
      borderRadius="30px"
    >
      <ToggleButtonGroup
        size={isMobileView ? "small" : "medium"}
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
        sx={{
          "& .MuiToggleButtonGroup-grouped": {
            borderRadius: "40px",
            height: "25px",
            border: "none",
            padding: "10px",
            fontSize: `${isMobileView ? "12px" : "14px"}`,
          },
          "& .Mui-selected, & .Mui-selected:hover": {
            color: "white !important",
            backgroundColor: `${theme.palette.primary.main} !important`,
          },
        }}
      >
        {toggleButtonNames?.map((toggleButtonName) => (
          <ToggleButton
            key={toggleButtonName}
            value={toggleButtonName.toLowerCase()}
            disableRipple
          >
            {toggleButtonName}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Box>
  );
};

export default ToggleButtonComponent;
