import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { SortFilterSearchComponent } from "../../components/SortFilterSearchComponent";
import { CardComponent } from "../../components/CardComponent";

const Movie = ({ tag, isMobileView }) => {
  const getTypographyHeadingBaseOnTag = () => {
    if (tag === "popular") {
      return "Popular Movies";
    } else if (tag === "nowplaying") {
      return "Now Playing Movies";
    } else if (tag === "upcoming") {
      return "Upcoming Movies";
    }
    return "Top Rated Movies";
  };
  return (
    <Box display="flex" justifyContent="center" mt="2em">
      <Box mb="1em" width={isMobileView ? "90vw" : "75vw"}>
        <Typography fontWeight="600" fontSize="26px">
          {getTypographyHeadingBaseOnTag()}
        </Typography>
        <Box
          display="flex"
          width="100%"
          flexDirection={isMobileView ? "column" : "row"}
        >
          <Box p="1em" width={isMobileView ? "95%" : "20%"}>
            <SortFilterSearchComponent />
          </Box>
          <Box width="80%" mt="1em" ml="2em">
            {!isMobileView ? (
              <Grid container spacing={2}>
                {[...new Array(20)].map((_, index) => (
                  <Box paddingX="10px" key={`${index}`}>
                    <CardComponent isViewOnHome={false} />
                  </Box>
                ))}
              </Grid>
            ) : null}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Movie;
