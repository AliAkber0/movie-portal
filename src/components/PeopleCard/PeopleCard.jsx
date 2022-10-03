import React from "react";
import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";

const PeopleCard = (props) => {
  return (
    <Card sx={{ maxWidth: 235, boxShadow: "0 2px 8px rgb(0 0 0 / 10%)" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="235"
          image="https://www.themoviedb.org/t/p/w235_and_h235_face/whNwkEQYWLFJA8ij0WyOOAD5xhQ.jpg"
          alt="Jason Statham"
        />
        <CardContent>
          <Typography fontSize="20px" fontWeight="600">
            Jason Statham
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: "14px",
            }}
            noWrap
          >
            Snatch, The Meg, The Fate of the Furious asasas Snatch,
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PeopleCard;
