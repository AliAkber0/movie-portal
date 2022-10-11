import { fromJS } from "immutable";
import {
  GET_POPULAR_PEOPLE_ERROR_REDUCER,
  GET_POPULAR_PEOPLE_PAGE_REDUCER,
  GET_POPULAR_PEOPLE_REDUCER,
  GET_POPULAR_PEOPLE_TOTAL_PAGES_REDUCER,
  SET_POPULAR_PEOPLE_ERROR_REDUCER,
  SET_POPULAR_PEOPLE_PAGE_REDUCER,
  SET_POPULAR_PEOPLE_REDUCER,
  SET_POPULAR_PEOPLE_TOTAL_PAGES_REDUCER,
} from "../action-types/action-types";

const peopleInitialState = fromJS({
  popular: { data: [], page: 0, error: "", totalPages: 0 },
});

const peopleReducer = (state = peopleInitialState, action) => {
  switch (action.type) {
    case GET_POPULAR_PEOPLE_REDUCER:
      return state.get("popular");

    case SET_POPULAR_PEOPLE_REDUCER: {
      return state
        .setIn(["popular", "data"], action.data)
        .setIn(["popular", "error"], "");
    }

    case GET_POPULAR_PEOPLE_PAGE_REDUCER: {
      return state.getIn(["popular", "page"]);
    }

    case SET_POPULAR_PEOPLE_PAGE_REDUCER: {
      return state.setIn(["popular", "page"], action.page);
    }

    case GET_POPULAR_PEOPLE_TOTAL_PAGES_REDUCER: {
      return state.getIn(["popular", "totalPages"]);
    }

    case SET_POPULAR_PEOPLE_TOTAL_PAGES_REDUCER: {
      return state.setIn(["popular", "totalPages"], action.totalPages);
    }

    case GET_POPULAR_PEOPLE_ERROR_REDUCER: {
      return state.getIn(["popular", "error"]);
    }

    case SET_POPULAR_PEOPLE_ERROR_REDUCER: {
      return state.setIn(["popular", "error"], action.error);
    }

    default:
      return state;
  }
};
export default peopleReducer;
