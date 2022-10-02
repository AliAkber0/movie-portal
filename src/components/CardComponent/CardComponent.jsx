import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CircularProgress,
  useTheme,
} from "@mui/material";
import React from "react";

const cardBoxShadowNoneSx = { boxShadow: "none" };
const CardComponent = ({ isViewOnHome }) => {
  const theme = useTheme();
  const rating = 70;

  const getColorBasedOnTheRatingValue = () => {
    if (rating >= 70) {
      return "green";
    } else if (rating >= 45 && rating < 70) {
      return "yellow";
    } else if (rating > 0 && rating < 45) {
      return "red";
    } else {
      return "gray";
    }
  };

  const getRatingInPercentage = () => {
    return rating ? `${Math.round(rating)}%` : "NR";
  };

  return (
    <Box mt="1em" position="relative" mb="1em">
      <Card
        sx={{
          width: 150,
          "&.MuiCard-root": isViewOnHome ? cardBoxShadowNoneSx : {},
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="225px"
            image="https://www.themoviedb.org/t/p/w220_and_h330_face/suyNxglk17Cpk8rCM2kZgqKdftk.jpg"
            alt="movie-image"
          />
          <CardContent>
            <Typography
              pt="1em"
              gutterBottom
              variant="p"
              component="div"
              fontWeight="bold"
              fontSize="14px"
            >
              The Lord of the Rings: The Rings of Power
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Sep 01, 2022
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Box position="absolute" bottom="98px" left="10px">
        <Box
          sx={{ position: "relative", display: "inline-flex" }}
          borderRadius="25px"
          backgroundColor={theme.palette.primary.main}
        >
          <CircularProgress
            size="35px"
            variant="determinate"
            value={70}
            sx={{ color: `${getColorBasedOnTheRatingValue()}` }}
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
              fontSize="13px"
            >
              {getRatingInPercentage()}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CardComponent;
