import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { SortFilterSearchComponent } from "../../components/SortFilterSearchComponent";
import { CardComponent } from "../../components/CardComponent";
import { CardListComponent } from "../../components/CardListComponent";
import { getTypographyHeadingBaseOnTag } from "../../Utility/ViewsUtility";

const TV = ({ tag, isMobileView }) => {
  return (
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
                {[...new Array(20)].map((_, index) => (
                  <Grid item md={4} lg={3} xl={2} key={`${index}`}>
                    <CardComponent isViewOnHome={false} />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <>
                {[...new Array(20)].map((_, index) => (
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
  );
};

export default TV;
