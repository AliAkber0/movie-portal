import React from "react";
import { Box } from "@mui/material";
import { HeroSection } from "../../components/HeroSection";
import { MoviesOrTvShowsSection } from "../../components/MoviesOrTvShowsSection";

const Home = ({ isMobileView, fontColorSx }) => {
  return (
    <Box display="flex" justifyContent="center">
      <Box mb="1em">
        <HeroSection isMobileView={isMobileView} fontColorSx={fontColorSx} />
        <Box mt="2em">
          <MoviesOrTvShowsSection
            isMobileView={isMobileView}
            toggleButtonNames={["Movies", "Tv Shows"]}
            sectionHeading={"What's Popular"}
          />
        </Box>
        <Box mt="2em">
          <MoviesOrTvShowsSection
            isMobileView={isMobileView}
            toggleButtonNames={["Today", "This Week"]}
            sectionHeading={"Trending"}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
