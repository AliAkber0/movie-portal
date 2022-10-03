import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { PeopleCard } from "../../components/PeopleCard";

const People = ({ isMobileView, tag }) => {
  console.log(tag);
  return (
    <Box display="flex" alignItems="center" mt="2em" flexDirection="column">
      <Typography fontWeight="600" fontSize="26px" width="75%">
        Popular People
      </Typography>
      <Box mb="1em" mt="2em" width={isMobileView ? "90vw" : "80vw"}>
        <Grid container spacing={2} justifyContent="center">
          {[...new Array(20)].map((_, index) => (
            <Box paddingX="10px" key={`${index}`} paddingY="10px">
              <PeopleCard />
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default People;
