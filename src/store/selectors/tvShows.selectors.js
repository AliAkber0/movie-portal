import { Map } from "immutable";
import createSelector from "../../Utils/reselect";

const getTvShows = (state) => {
  const { tvShows } = state;
  return tvShows || Map();
};

export const getPopularTvShowsSelector = createSelector(getTvShows, (state) => {
  return state.get("popular") ?? Map();
});

export const getTopRatedTvShowsSelector = createSelector(
  getTvShows,
  (state) => {
    return state.get("topRated") ?? Map();
  }
);

export const getAiringTodayTvShowsSelector = createSelector(
  getTvShows,
  (state) => {
    return state.get("airingToday") ?? Map();
  }
);

export const getOnAiredTvShowsSelector = createSelector(getTvShows, (state) => {
  return state.get("onAired") ?? Map();
});
