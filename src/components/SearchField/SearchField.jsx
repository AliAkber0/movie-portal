import React from "react";
import {
  InputBase,
  InputAdornment,
  useTheme,
  CircularProgress,
  Box,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

const SearchField = (props) => {
  const theme = useTheme();
  const {
    searchValue,
    searchValueHandler,
    searchLoading,
    searchSubmitHandler,
    isViewedOnHome = true,
  } = props;

  // console.log(searchLoading);
  return (
    <InputBase
      value={searchValue}
      onChange={searchValueHandler}
      onKeyDown={(e) => searchSubmitHandler(e.key.toString(), "keyPress")}
      placeholder="Search for a movie, tv show, person...."
      fullWidth
      sx={{
        "&.MuiInputBase-root": {
          backgroundColor: "white",
          paddingLeft: "15px",
          height: "46px",
          borderRadius: isViewedOnHome ? "30px" : "0px",
          borderBottom: `${
            isViewedOnHome ? "none" : `1px solid ${theme.palette.primary.main}`
          }`,
        },
        "& label.Mui-focused": {
          color: "none",
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: "black",
        },
        "& .MuiOutlinedInput-root": {
          border: "1px black",
          "& fieldset": {
            borderColor: `${isViewedOnHome ? "transparent" : "black"}`,
          },
          "&:hover fieldset": {
            borderColor: `${isViewedOnHome ? "transparent" : "black"}`,
          },
          "&.Mui-focused fieldset": {
            borderColor: `${isViewedOnHome ? "transparent" : "black"}`,
          },
        },
      }}
      endAdornment={
        isViewedOnHome ? (
          <InputAdornment position="end">
            <LoadingButton
              onClick={() => searchSubmitHandler(undefined, "buttonClick")}
              loading={searchLoading}
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
              {!searchLoading ? "Search" : ""}
            </LoadingButton>
          </InputAdornment>
        ) : (
          <InputAdornment position="end">
            {searchLoading && (
              <Box mr="5px">
                <CircularProgress size={25} />
              </Box>
            )}
          </InputAdornment>
        )
      }
    />
  );
};

export default SearchField;
