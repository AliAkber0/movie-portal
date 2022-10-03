import { Map, List } from "immutable";
import createSelector from "../../Utility/reselect";

const getMovies = (state) => {
  const { movies } = state;
  return movies || Map();
};

export const getAllMovies = createSelector(getMovies, (state) => {
  return state.getIn(["movies", "data"]) ?? List();
});
