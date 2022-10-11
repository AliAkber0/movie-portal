import React from "react";
import { Card, CardMedia, Box, CardContent, Typography } from "@mui/material";
import moment from "moment/moment";

const CardListComponent = (props) => {
  const { data, titleCategory, navigateTo } = props;
  const details = data?.overview;

  return (
    <Card
      onClick={() => navigateTo(titleCategory, data?.id)}
      sx={{
        "&:hover": { cursor: "pointer" },
        display: "flex",
        maxHeight: "180px",
        boxShadow: "0 2px 8px rgb(0 0 0 / 10%)",
      }}
    >
      <CardMedia
        component="img"
        sx={{ maxWidth: 100 }}
        image={`https://www.themoviedb.org/t/p/w220_and_h330_face${
          data?.["poster_path"] ||
          data?.["profile_path"] ||
          "/h1pLOZATBr7oVDrwj3DfOjTOCGk.jpg"
        }`}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent>
          <Typography component="div" variant="h6">
            {data?.title || data?.name}
          </Typography>

          {data?.["media_type"] === "person" ? (
            <Typography>
              {data?.gender === 1 ? "Female" : "Male"}{" "}
              {data?.["known_for_department"] === "Acting"
                ? "Actor"
                : "Not a Actor"}
            </Typography>
          ) : (
            <Typography color="text.secondary" component="div" fontSize="15px">
              {moment(
                data?.["release_date"] || data?.["first_air_date"] || "",
                "YYYY-MM-DD"
              ).format("MMM DD, YYYY")}
            </Typography>
          )}
          <Typography fontSize="13px" textOverflow="ellipse" pt="1em">
            {details?.length ? (
              details?.length <= 200 ? (
                details
              ) : (
                `${details?.substring(0, 195)}...`
              )
            ) : (
              <Box>
                <Typography fontSize="14px" fontWeight="600">
                  Known For
                </Typography>
                {data?.["known_for"]?.map(
                  (knownFor) =>
                    `${knownFor?.["original_title"] || knownFor?.["name"]}, `
                )}
              </Box>
            )}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default CardListComponent;
