import { fromJS } from "immutable";

const tvShowsInitialState = fromJS({});

const tvShowsReducer = (state = tvShowsInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default tvShowsReducer;