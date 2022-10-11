import { Map } from "immutable";
import createSelector from "../../Utils/reselect";

const getPeople = (state) => {
  const { people } = state;
  return people || Map();
};

export const getPopularPeopleSelector = createSelector(getPeople, (state) => {
  return state.get("popular") ?? Map();
});
