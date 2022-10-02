import React from "react";
import { NavBar } from "../../components/NavBar";
import { Box } from "@mui/material";
import { HeroSection } from "../../components/HeroSection";
import { MoviesOrTvShowsSection } from "../../components/MoviesOrTvShowsSection";
import { Footer } from "../../components/Footer";

const Home = ({ isMobileView, fontColorSx }) => {
  return (
    <Box
      width="99vw"
      height="100vh"
      display="flex"
      justifyContent="space-between"
      flexDirection="column"
    >
      <Box>
        <NavBar />
        <Box display="flex" justifyContent="center">
          <Box mb="1em">
            <HeroSection
              isMobileView={isMobileView}
              fontColorSx={fontColorSx}
            />
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
      </Box>
      <Box>
        <Footer isMobileView={isMobileView} />
      </Box>
    </Box>
  );
};

export default Home;
