import { fromJS } from "immutable";
import {
  CLEAR_SEARCH_RESULT_REDUCER,
  GET_SEARCH_REDUCER,
  GET_SEARCH_RESULT_ERROR_REDUCER,
  GET_SEARCH_RESULT_PAGE_REDUCER,
  GET_SEARCH_RESULT_TOTAL_PAGES_REDUCER,
  SET_SEARCH_RESULT_ERROR_REDUCER,
  SET_SEARCH_RESULT_PAGE_REDUCER,
  SET_SEARCH_RESULT_REDUCER,
  SET_SEARCH_RESULT_TOTAL_PAGES_REDUCER,
} from "../action-types/action-types";

const searchInitialState = fromJS({
  result: { data: [], page: 0, error: "", totalPages: 0 },
});

const searchReducer = (state = searchInitialState, action) => {
  switch (action.type) {
    case GET_SEARCH_REDUCER:
      return state.get("result");

    case SET_SEARCH_RESULT_REDUCER: {
      return state
        .setIn(["result", "data"], action.data)
        .setIn(["result", "error"], "");
    }

    case GET_SEARCH_RESULT_PAGE_REDUCER: {
      return state.getIn(["result", "page"]);
    }

    case SET_SEARCH_RESULT_PAGE_REDUCER: {
      return state.setIn(["result", "page"], action.page);
    }

    case GET_SEARCH_RESULT_TOTAL_PAGES_REDUCER: {
      return state.getIn(["result", "totalPages"]);
    }

    case SET_SEARCH_RESULT_TOTAL_PAGES_REDUCER: {
      return state.setIn(["result", "totalPages"], action.totalPages);
    }

    case GET_SEARCH_RESULT_ERROR_REDUCER: {
      return state.getIn(["result", "error"]);
    }

    case SET_SEARCH_RESULT_ERROR_REDUCER: {
      return state.setIn(["result", "error"], action.error);
    }
    case CLEAR_SEARCH_RESULT_REDUCER: {
      return state
        .setIn(["result", "data"], [])
        .setIn(["result", "error"], "")
        .setIn(["result", "totalPages"], 0)
        .setIn(["result", "page"], 0);
    }

    default:
      return state;
  }
};
export default searchReducer;
