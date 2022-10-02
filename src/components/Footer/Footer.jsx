import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { ReactComponent as Logo } from "../../assets/SVG/logoMobile.svg";

const TypographyHeadingSx = { fontWeight: "bold" };
const TypographyColorSx = { color: "white" };
const TypographyHeadingFontSizeSx = { fontSize: "20px" };
const TypographyHoverSx = { "&:hover": { cursor: "pointer" } };

const Footer = () => {
  const isMobileView = useMediaQuery("(max-width:900px)");
  const theme = useTheme();

  const linkOnClickHandler = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        minHeight: "250px",
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        pt="3em"
        flexDirection={isMobileView ? "column" : "row"}
      >
        {!isMobileView && (
          <Box height="80px" mt="2em">
            <Logo height="90px  " />
          </Box>
        )}
        <Box ml="45px">
          <Typography
            sx={{
              ...TypographyHeadingSx,
              ...TypographyColorSx,
              ...TypographyHeadingFontSizeSx,
            }}
          >
            THE BASICS
          </Typography>

          <Typography
            sx={{ ...TypographyColorSx, ...TypographyHoverSx }}
            onClick={() =>
              linkOnClickHandler("https://www.themoviedb.org/about")
            }
          >
            About TMDB
          </Typography>

          <Typography
            sx={{ ...TypographyColorSx, ...TypographyHoverSx }}
            onClick={() =>
              linkOnClickHandler(
                "https://www.themoviedb.org/about/staying-in-touch"
              )
            }
          >
            Contact Us
          </Typography>
          <Typography
            sx={{ ...TypographyColorSx, ...TypographyHoverSx }}
            onClick={() =>
              linkOnClickHandler("https://www.themoviedb.org/talk")
            }
          >
            Support Forums
          </Typography>
          <Typography
            sx={{ ...TypographyColorSx, ...TypographyHoverSx }}
            onClick={() =>
              linkOnClickHandler("https://www.themoviedb.org/documentation/api")
            }
          >
            API
          </Typography>
          <Typography
            sx={{ ...TypographyColorSx, ...TypographyHoverSx }}
            onClick={() => linkOnClickHandler("https://status.themoviedb.org/")}
          >
            System Status
          </Typography>
        </Box>
        <Box ml="45px" mt={isMobileView ? "2em" : "0em"}>
          <Typography
            sx={{
              ...TypographyHeadingSx,
              ...TypographyColorSx,
              ...TypographyHeadingFontSizeSx,
            }}
          >
            GET INVOLVED
          </Typography>
          <Typography
            sx={{ ...TypographyColorSx, ...TypographyHoverSx }}
            onClick={() =>
              linkOnClickHandler("https://www.themoviedb.org/bible")
            }
          >
            Contribution Bible
          </Typography>
          <Typography
            sx={{ ...TypographyColorSx, ...TypographyHoverSx }}
            onClick={() =>
              linkOnClickHandler("https://www.themoviedb.org/movie/new")
            }
          >
            Add New Movie
          </Typography>
          <Typography
            sx={{ ...TypographyColorSx, ...TypographyHoverSx }}
            onClick={() =>
              linkOnClickHandler("https://www.themoviedb.org/tv/new")
            }
          >
            Add New TV Show
          </Typography>
        </Box>
        <Box ml="45px" mt={isMobileView ? "2em" : "0em"}>
          <Typography
            sx={{
              ...TypographyHeadingSx,
              ...TypographyColorSx,
              ...TypographyHeadingFontSizeSx,
            }}
          >
            COMMUNITY
          </Typography>
          <Typography
            sx={{ ...TypographyColorSx, ...TypographyHoverSx }}
            onClick={() =>
              linkOnClickHandler(
                "https://www.themoviedb.org/documentation/community/guidelines"
              )
            }
          >
            Guidlines
          </Typography>
          <Typography
            sx={{ ...TypographyColorSx, ...TypographyHoverSx }}
            onClick={() =>
              linkOnClickHandler("https://www.themoviedb.org/discuss")
            }
          >
            Discussions
          </Typography>
          <Typography
            sx={{ ...TypographyColorSx, ...TypographyHoverSx }}
            onClick={() =>
              linkOnClickHandler("https://www.themoviedb.org/leaderboard")
            }
          >
            Leaderboard
          </Typography>
          <Typography
            sx={{ ...TypographyColorSx, ...TypographyHoverSx }}
            onClick={() => linkOnClickHandler("https://twitter.com/themoviedb")}
          >
            Twitter
          </Typography>
        </Box>
        <Box ml="45px" mt={isMobileView ? "2em" : "0em"} mb="1em">
          <Typography
            sx={{
              ...TypographyHeadingSx,
              ...TypographyColorSx,
              ...TypographyHeadingFontSizeSx,
            }}
          >
            LEGAL
          </Typography>
          <Typography
            sx={{ ...TypographyColorSx, ...TypographyHoverSx }}
            onClick={() =>
              linkOnClickHandler("https://www.themoviedb.org/terms-of-use")
            }
          >
            Term of Use
          </Typography>
          <Typography
            sx={{ ...TypographyColorSx, ...TypographyHoverSx }}
            onClick={() =>
              linkOnClickHandler(
                "https://www.themoviedb.org/documentation/api/terms-of-use"
              )
            }
          >
            API Terms of Use
          </Typography>
          <Typography
            sx={{ ...TypographyColorSx, ...TypographyHoverSx }}
            onClick={() =>
              linkOnClickHandler("https://www.themoviedb.org/privacy-policy")
            }
          >
            Privacy Policy
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
