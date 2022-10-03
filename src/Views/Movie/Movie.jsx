import React from "react";
import { Box, Typography, Grid, useMediaQuery } from "@mui/material";
import { ViewHoc } from "../../ViewHoc";
import { SortFilterSearchComponent } from "../../components/SortFilterSearchComponent";
import { CardComponent } from "../../components/CardComponent";
import { CardListComponent } from "../../components/CardListComponent";
import { getTypographyHeadingBaseOnTag } from "../../Utility/ViewsUtility";
import { useParams } from "react-router-dom";

const Movie = (props) => {
  const isMobileView = useMediaQuery("(max-width:900px)");
  const { tag } = useParams();
  const { movies } = props;
  console.log(props);

  return (
    <ViewHoc>
      <Box display="flex" justifyContent="center" mt="2em">
        <Box mb="1em" width={isMobileView ? "90vw" : "80vw"}>
          <Typography fontWeight="600" fontSize="26px">
            {getTypographyHeadingBaseOnTag(tag)}
          </Typography>
          <Box
            display="flex"
            width="100%"
            flexDirection={isMobileView ? "column" : "row"}
          >
            <Box p="1em" width={isMobileView ? "95%" : "20%"}>
              <SortFilterSearchComponent />
            </Box>
            <Box
              width={isMobileView ? "100%" : "80%"}
              mt="1em"
              ml={isMobileView ? "0em" : "2em"}
            >
              {!isMobileView ? (
                <Grid container spacing={2}>
                  {movies.toJS()?.map((_, index) => (
                    <Grid item md={4} lg={3} xl={2} key={`${index}`}>
                      <CardComponent isViewOnHome={false} />
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <>
                  {movies.toJS()?.map((_, index) => (
                    <Box key={`${index}`} mb="1em">
                      <CardListComponent />
                    </Box>
                  ))}
                </>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </ViewHoc>
  );
};

export default Movie;
