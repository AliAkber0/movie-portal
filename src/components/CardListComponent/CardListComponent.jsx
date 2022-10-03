import React from "react";
import { Card, CardMedia, Box, CardContent, Typography } from "@mui/material";

const CardListComponent = (props) => {
  const details = `Unlucky assassin Ladybug is determined to do his job peacefully after one too many gigs gone off the rails. Fate, however, may have other plans, as Ladybug's latest mission puts him on a collision course with lethal adversaries from around the globe—all with connected, yet conflicting, objectives—on the world's fastest train.`;
  return (
    <Card
      sx={{
        display: "flex",
        maxHeight: "180px",
        boxShadow: "0 2px 8px rgb(0 0 0 / 10%)",
      }}
    >
      <CardMedia
        component="img"
        sx={{ maxWidth: 100 }}
        image="https://www.themoviedb.org/t/p/w260_and_h390_bestv2/r7XifzvtezNt31ypvsmb6Oqxw49.jpg"
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent>
          <Typography component="div" variant="h6">
            Live From Space
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            fontSize="15px"
          >
            Mac Miller
          </Typography>
          {""}
          <Typography fontSize="13px" textOverflow="ellipse" pt="1em">
            {details.length <= 200
              ? details
              : `${details.substring(0, 200)}...`}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default CardListComponent;
