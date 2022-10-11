import React from "react";
import { Box, Skeleton, Typography } from "@mui/material";
import ToggleButtonComponent from "../ToggleButtonComponent/ToggleButtonComponent";
import { CardComponent } from "../CardComponent";
import classes from "./MoviesOrTvShowsSection.module.css";
import { ErrorComponent } from "../ErrorComponent";

const typographyFontSx = {
  fontWeight: "bold",
  fontSize: "24px",
};

const MoviesOrTvShowsSection = (props) => {
  const {
    sectionHeading,
    isMobileView,
    toggleButtonNames,
    toggleButtonHandler,
    toggleButtonState,
    toggleName,
    dataPopularOrTrending,
    loadingData,
    navigateTo,
  } = props;

  const getTitleCategory = () => {
    if (["tvshows", "movies"].includes(toggleButtonState)) {
      if (toggleButtonState === "tvshows") {
        return "tv";
      } else {
        return "movies";
      }
    }
    return false;
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      width={isMobileView ? "99vw" : "75vw"}
    >
      <Box display="flex" alignItems="center" pl="2em">
        <Typography sx={typographyFontSx}> {sectionHeading}</Typography>
        <ToggleButtonComponent
          isMobileView={isMobileView}
          toggleButtonNames={toggleButtonNames}
          toggleButtonHandler={toggleButtonHandler}
          toggleButtonState={toggleButtonState}
          toggleName={toggleName}
        />
      </Box>
      <Box
        display="flex"
        overflow="auto"
        className={classes.hideScrollBarView}
        height="390px"
      >
        {loadingData &&
          !dataPopularOrTrending?.error &&
          [...new Array(20)].map((_, index) => (
            <Box pr="1.5em" pt="1em" key={`${index}`}>
              <Skeleton variant="rounded" height="220px" width="180px" />
            </Box>
          ))}
        {dataPopularOrTrending?.error && (
          <ErrorComponent errorText={dataPopularOrTrending?.error} />
        )}
        {!loadingData &&
          !dataPopularOrTrending?.error &&
          dataPopularOrTrending?.data?.map((data, index) => (
            <Box paddingX="10px" key={`${index}`}>
              <CardComponent
                isViewOnHome={true}
                data={data}
                titleCategory={getTitleCategory() || data["media_type"]}
                navigateTo={navigateTo}
              />
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default MoviesOrTvShowsSection;
