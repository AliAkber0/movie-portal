// import React from "react";
// import Movie from "./Movie";
// import { useParams } from "react-router-dom";
// import { useMediaQuery } from "@mui/material";
// import { ViewHoc } from "../../ViewHoc";

// const MovieContainer = () => {
//   const { tag } = useParams();
//   const isMobileView = useMediaQuery("(max-width:900px)");
//   console.log(tag);
//   return (
//     <ViewHoc>
//       <Movie tag={tag} isMobileView={isMobileView} />
//     </ViewHoc>
//   );
// };

// export default MovieContainer;

import { connect } from "react-redux";
import Movies from "./Movie";
import { getAllMovies } from "../../store/selectors/movies.selectors";

const mapStateToProps = (state) => {
  return {
    movies: getAllMovies(state),
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
