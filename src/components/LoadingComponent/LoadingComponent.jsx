import React from "react";
import { LinearProgress, Box, Typography } from "@mui/material";

function LoadingComponent() {
  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress />
      <Typography fontSize="14px" textAlign="center" mt="5px">
        Loading...
      </Typography>
    </Box>
  );
}

export default LoadingComponent;
