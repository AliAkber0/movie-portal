import React from "react";
import { SearchField } from "../../components/SearchField";
import HeroImage from "../../assets/IMAGES/HeroBackgroundImage.jpg";
import { Box, Typography } from "@mui/material";

function HeroSection({ isMobileView, fontColorSx }) {
  return (
    <Box width={isMobileView ? "100vw" : "75vw"}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "1.5em",
          height: "250px",
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box pb="20px">
          <Typography sx={fontColorSx} variant="h3">
            Welcome.
          </Typography>
          <Typography pb="15px" sx={fontColorSx} variant="h5">
            Millions of movies, TV shows and people to discover. Explore now.
          </Typography>
          <SearchField />
        </Box>
      </Box>
    </Box>
  );
}

export default HeroSection;
