import React from "react";
import { Typography, CircularProgress, Box, useTheme } from "@mui/material";

function CircularGraphComponent(props) {
  const theme = useTheme();
  const {
    ratingColor,
    ratingInPercentage,
    rating,
    size = "35px",
    percentageFont = "13px",
  } = props;
  return (
    <Box
      sx={{ position: "relative", display: "inline-flex" }}
      borderRadius={size}
      backgroundColor={theme.palette.primary.main}
    >
      <CircularProgress
        size={size}
        variant="determinate"
        value={rating ? rating : 100}
        sx={{ color: `${ratingColor}` }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="white"
          fontSize={percentageFont}
        >
          {ratingInPercentage}
        </Typography>
      </Box>
    </Box>
  );
}

export default CircularGraphComponent;
