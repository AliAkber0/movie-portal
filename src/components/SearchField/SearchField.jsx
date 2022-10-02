import React from "react";
import { Button, InputBase, InputAdornment, useTheme } from "@mui/material";

const SearchField = () => {
  const theme = useTheme();
  return (
    <InputBase
      placeholder="Search for a movie, tv show, person...."
      fullWidth
      sx={{
        "&.MuiInputBase-root": {
          backgroundColor: "white",
          paddingLeft: "15px",
          height: "46px",
          borderRadius: "30px",
        },
        "& label.Mui-focused": {
          color: "none",
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: "green",
        },
        "& .MuiOutlinedInput-root": {
          border: "1px black",
          "& fieldset": {
            borderColor: "transparent",
          },
          "&:hover fieldset": {
            borderColor: "transparent",
          },
          "&.Mui-focused fieldset": {
            borderColor: "transparent",
          },
        },
      }}
      endAdornment={
        <InputAdornment position="end">
          <Button
            sx={{
              "&.MuiButton-root": {
                fontWeight: 700,
                color: "white",
                borderRadius: "30px",
                height: "46px",
                width: "100px",
                background: `${theme.palette.primary.gradientColor}`,
              },
            }}
          >
            Search
          </Button>
        </InputAdornment>
      }
    />
  );
};

export default SearchField;
