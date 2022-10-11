export const getTypographyHeadingBaseOnTag = (tag) => {
  if (tag === "popular") {
    return "Popular Movies";
  } else if (tag === "nowplaying") {
    return "Now Playing Movies";
  } else if (tag === "upcoming") {
    return "Upcoming Movies";
  }
  return "Top Rated Movies";
};
