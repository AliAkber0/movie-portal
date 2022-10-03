import { fromJS } from "immutable";

const moviesInitialState = fromJS({ data: [], error: "" });

const moviesReducer = (state = moviesInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default moviesReducer;
