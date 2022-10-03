import { fromJS } from "immutable";

const peopleInitialState = fromJS({ data: [], error: "" });

const peopleReducer = (state = peopleInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default peopleReducer;
