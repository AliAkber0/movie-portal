import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import moment from "moment/moment";

import { CircularGraphComponent } from "../CircularGraphComponent";

const cardBoxShadowNoneSx = { boxShadow: "none" };

const CardComponent = (props) => {
  const { isViewOnHome, data, titleCategory, navigateTo } = props;

  let rating = data?.["vote_average"] * 10;

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
    return rating > 0 ? `${Math.round(rating)}%` : "NR";
  };

  return (
    <Box
      mt="1em"
      mb="1em"
      onClick={() => navigateTo(titleCategory, data?.id)}
      sx={{ "&:hover": { cursor: "pointer" } }}
    >
      <Card
        sx={{
          width: isViewOnHome ? 180 : "auto",
          "&.MuiCard-root": isViewOnHome && cardBoxShadowNoneSx,
        }}
      >
        <CardActionArea>
          <Box position="relative">
            <CardMedia
              sx={{ maxHeight: "225px" }}
              component="img"
              image={`https://www.themoviedb.org/t/p/w220_and_h330_face${
                data?.["poster_path"] || "/h1pLOZATBr7oVDrwj3DfOjTOCGk.jpg"
              }`}
              alt="movie-image"
            />
            <Box
              position="absolute"
              bottom={isViewOnHome ? "-20px" : "-20px"}
              left="10px"
            >
              <CircularGraphComponent
                rating={rating}
                ratingInPercentage={getRatingInPercentage()}
                ratingColor={getColorBasedOnTheRatingValue()}
              />
            </Box>
          </Box>

          <CardContent sx={{ height: "100px" }}>
            <Typography
              pt="1em"
              gutterBottom
              variant="p"
              component="div"
              fontWeight="bold"
              fontSize="14px"
            >
              {data?.title || data?.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {moment(
                data?.["release_date"] || data?.["first_air_date"] || "",
                "YYYY-MM-DD"
              ).format("MMM DD, YYYY")}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default CardComponent;
