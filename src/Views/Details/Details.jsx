import React from "react";
import {
  Box,
  Card,
  CardMedia,
  Typography,
  useMediaQuery,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@mui/material";
import { ViewHoc } from "../../components/ViewHoc";
import { useParams } from "react-router-dom";
import { CircularGraphComponent } from "../../components/CircularGraphComponent";
import moment from "moment";
import { LoadingComponent } from "../../components/LoadingComponent";
import { ErrorComponent } from "../../components/ErrorComponent";

const Details = (props) => {
  const { details, getDetails, clearDetails, getDetailsReviews } = props;

  const isMobileView = useMediaQuery("(max-width:900px)");
  const textAlign = isMobileView ? "center" : "left";

  const { tag, id } = useParams();
  const rating = details?.toJS()?.data?.["vote_average"] * 10;

  const getRatingInPercentage = () => {
    return rating > 0 ? `${Math.round(rating)}%` : "NR";
  };

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

  const getBackDropImagePath = () => {
    return `https://image.tmdb.org/t/p/original/${
      details?.toJS()?.data?.["backdrop_path"] ||
      "nVRyd8hlg0ZLxBn9RaI7mUMQLnz.jpg"
    }`;
  };

  const getGenre = (genres) => {
    return genres?.map((genre) => ` ${genre.name}`);
  };

  React.useEffect(() => {
    getDetails(id, tag);
    getDetailsReviews(id, tag);
  }, [id, tag, getDetails, getDetailsReviews]);

  React.useEffect(() => {
    return () => {
      clearDetails();
    };
  }, [clearDetails]);

  if (details?.toJS().error) {
    return (
      <ViewHoc>
        <Box width="100%" mt="3em">
          <ErrorComponent errorText={details?.toJS().error} />
        </Box>
      </ViewHoc>
    );
  }
  if (Object.keys(details?.toJS().data || {}).length === 0) {
    return (
      <ViewHoc>
        <Box display="flex" justifyContent="center" mt="3em">
          <Box width="30%">
            <LoadingComponent />
          </Box>
        </Box>
      </ViewHoc>
    );
  }

  return (
    <ViewHoc>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: `${isMobileView ? "column" : "row"}`,
          alignItems: `${isMobileView ? "center" : "normal"}`,
          paddingTop: "2em",
          minHeight: "500px",
          backgroundImage: `linear-gradient(to bottom, rgba(82, 82, 82, 0.52), rgba(0, 0, 0, 0.73)),
          url(${getBackDropImagePath()})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box display="flex" justifyContent="flex-end" width="35%">
          <Card sx={{ maxWidth: 300, maxHeight: 450 }}>
            <CardMedia
              component="img"
              image={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${
                details?.toJS()?.data?.["poster_path"] ||
                "KoYWXbnYuS3b0GyQPkbuexlVK9.jpg"
              }`}
              alt="image"
            />
          </Card>
        </Box>
        <Box
          color="white"
          ml={isMobileView ? "0em" : "3em"}
          width={isMobileView ? "100%" : "65%"}
          display="flex"
          alignItems={isMobileView ? "center" : "normal"}
          flexDirection="column"
        >
          <Box display="flex" mt="1em">
            <Typography fontSize="35px" fontWeight="600" textAlign="center">
              {details?.toJS()?.data?.title ||
                details?.toJS()?.data?.["original_name"]}
            </Typography>
            <Typography fontSize="35px" fontWeight="500" ml="10px">{`(${moment(
              details?.toJS()?.data?.release_date ||
                details?.toJS()?.data?.first_air_date,
              "YYYY-MM-DD"
            ).format("YYYY")})`}</Typography>
          </Box>
          <Typography fontSize="16px">{`${getGenre(
            details?.toJS()?.data?.genres
          )}  -  ${
            details?.toJS()?.data?.runtime ||
            details?.toJS()?.data?.episode_run_time?.[0]
          }m`}</Typography>
          <Box mt="2em" display="flex">
            <CircularGraphComponent
              percentageFont={"18px"}
              size={"60px"}
              rating={rating}
              ratingInPercentage={getRatingInPercentage()}
              ratingColor={getColorBasedOnTheRatingValue()}
            />
            <Box ml="10px" mt="4px">
              <Typography fontWeight="900" fontSize="16px">
                User
              </Typography>
              <Typography fontWeight="900" fontSize="16px">
                Score
              </Typography>
            </Box>
          </Box>
          <Box mt="1em">
            <Typography as="i" fontSize="16px">
              {details?.toJS()?.data?.tagline}
            </Typography>
          </Box>
          <Box width="90%" mt="1.5em">
            <Typography fontSize="16px" fontWeight="700" textAlign={textAlign}>
              OVERVIEW
            </Typography>
            <Typography fontSize="16px" textAlign={textAlign}>
              {details?.toJS()?.data?.overview}
            </Typography>
          </Box>
          <Box mt="2em" mb="1em">
            <Typography fontSize="16px" fontWeight="bold">
              {details?.toJS()?.data?.created_by?.[0]?.name || ""}
            </Typography>
            <Typography fontSize="14px" textAlign={textAlign}>
              {tag === "tv" &&
                !!details?.toJS()?.data?.created_by.length &&
                "creator"}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          "&::-webkit-scrollbar": { display: "none" },
          "&": {
            OverflowStyle: "none",
            scrollbarWidth: "none",
          },
          marginTop: "1em",
          padding: "1em",
          width: `${isMobileView ? "95%" : "60%"}`,
          maxHeight: "700px",
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        <Typography fontWeight="bold">Reviews</Typography>
        {!details?.toJS().reviews?.length && (
          <Typography
            color="text.secondary"
            fontSize="15px"
            textAlign={isMobileView ? "center" : "left"}
          >
            no review's
          </Typography>
        )}
        {details?.toJS().reviews?.map((review, index) => (
          <List
            key={`${index}`}
            sx={{
              marginTop: "2em",
              width: "100%",
              bgcolor: "background.paper",
              border: "1px solid #c7c7c7",
              borderRadius: "5px",
            }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Aemy Sharp"
                  src={`https://www.gravatar.com/avatar${review.author_details.avatar_path}?s=64`}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <>
                    <Typography fontWeight="600 " fontSize="20px">
                      {`A review by ${review.author}`}
                    </Typography>
                    <Typography fontSize="14px" color="text.secondary">
                      {`Written by ${review.author} on ${moment(
                        review.created_at,
                        "YYYY-MM-DDTHH:mm:ss[Z]"
                      ).format("MMM DD, YYYY")}`}
                    </Typography>
                  </>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {review.content}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        ))}
      </Box>
    </ViewHoc>
  );
};

export default Details;
