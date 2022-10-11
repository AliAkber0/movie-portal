import { Map } from "immutable";
import createSelector from "../../Utils/reselect";

const getTrending = (state) => {
  const { trending } = state;
  return trending || Map();
};

export const getTrendingTodaySelector = createSelector(getTrending, (state) => {
  return state.get("today") ?? Map();
});

export const getTrendingWeekSelector = createSelector(getTrending, (state) => {
  return state.get("week") ?? Map();
});
