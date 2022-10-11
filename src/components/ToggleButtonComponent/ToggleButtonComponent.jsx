import React from "react";
import { ToggleButton, ToggleButtonGroup, useTheme, Box } from "@mui/material";

const ToggleButtonComponent = (props) => {
  const theme = useTheme();

  const {
    isMobileView,
    toggleButtonNames,
    toggleButtonState,
    toggleButtonHandler,
    toggleName,
  } = props;

  const stringRemoveSpacesAndLowerCaseConversion = (stringToConvert) => {
    return stringToConvert.replace(/\s/g, "").toLowerCase();
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
        value={toggleButtonState}
        exclusive
        onChange={(event) =>
          toggleButtonHandler(
            toggleName,
            stringRemoveSpacesAndLowerCaseConversion(
              event.target.value.toString()
            )
          )
        }
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
            value={stringRemoveSpacesAndLowerCaseConversion(toggleButtonName)}
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
