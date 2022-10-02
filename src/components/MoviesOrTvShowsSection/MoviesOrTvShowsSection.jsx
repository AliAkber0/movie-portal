import React from "react";
import { Box, Typography } from "@mui/material";
import ToggleButtonComponent from "../ToggleButtonComponent/ToggleButtonComponent";
import { CardComponent } from "../CardComponent";

const typographyFontSx = {
  fontWeight: "bold",
  fontSize: "24px",
};

const MoviesOrTvShowsSection = ({
  sectionHeading,
  isMobileView,
  toggleButtonNames,
}) => {
  console.log(toggleButtonNames);
  return (
    <Box
      display="flex"
      flexDirection="column"
      width={isMobileView ? "85vw" : "75vw"}
    >
      <Box display="flex" alignItems="center" pl="2em">
        <Typography sx={typographyFontSx}> {sectionHeading}</Typography>
        <ToggleButtonComponent
          isMobileView={isMobileView}
          toggleButtonNames={toggleButtonNames}
        />
      </Box>
      <Box display="flex" overflow="auto">
        {[...new Array(20)].map((_, index) => (
          <Box paddingX="10px" key={`${index}`}>
            <CardComponent isViewOnHome={true} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MoviesOrTvShowsSection;
