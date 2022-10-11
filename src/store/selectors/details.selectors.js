import { Map } from "immutable";
import createSelector from "../../Utils/reselect";

const getDetails = (state) => {
  const { details } = state;
  return details || Map();
};

export const getDetailsSelector = createSelector(getDetails, (state) => {
  return state.get("details") ?? Map();
});
