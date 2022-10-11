import { Map } from "immutable";
import createSelector from "../../Utils/reselect";

const getMovies = (state) => {
  const { movies } = state;
  return movies || Map();
};

export const getPopularMoviesSelector = createSelector(getMovies, (state) => {
  return state.get("popular") ?? Map();
});

export const getTopRatedMoviesSelector = createSelector(getMovies, (state) => {
  return state.get("topRated") ?? Map();
});

export const getUpcomingMoviesSelector = createSelector(getMovies, (state) => {
  return state.get("upComing") ?? Map();
});

export const getNowPlayingMoviesSelector = createSelector(
  getMovies,
  (state) => {
    return state.get("nowPlaying") ?? Map();
  }
);
