import { Map } from "immutable";
import createSelector from "../../Utils/reselect";

const getSearch = (state) => {
  const { search } = state;
  return search || Map();
};

export const getSearchSelector = createSelector(getSearch, (state) => {
  return state.get("result") ?? Map();
});
