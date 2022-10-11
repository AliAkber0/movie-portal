import React from "react";
import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";

const PeopleCard = (props) => {
  const { popularPeople, navigateTo } = props;

  return (
    <Card
      onClick={() => navigateTo(popularPeople?.id)}
      sx={{
        maxWidth: 235,
        boxShadow: "0 2px 8px rgb(0 0 0 / 10%)",
        "&::hover": { cursor: "pointer" },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="235"
          image={`https://www.themoviedb.org/t/p/w235_and_h235_face/${
            popularPeople?.profile_path || "whNwkEQYWLFJA8ij0WyOOAD5xhQ.jpg"
          }`}
          alt="Jason Statham"
        />
        <CardContent sx={{ height: "75px" }}>
          <Typography fontSize="20px" fontWeight="600">
            {popularPeople?.name}
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: "14px",
            }}
            noWrap
          >
            {popularPeople?.["known_for"]?.map(
              (knownFor) =>
                `${knownFor?.["original_title"] || knownFor?.["name"]}, `
            )}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PeopleCard;
