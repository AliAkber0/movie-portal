import { fromJS } from "immutable";
import {
  GET_TRENDING_TODAY_REDUCER,
  GET_TRENDING_TODAY_ERROR_REDUCER,
  GET_TRENDING_TODAY_PAGE_REDUCER,
  GET_TRENDING_TODAY_TOTAL_PAGES_REDUCER,
  SET_TRENDING_TODAY_ERROR_REDUCER,
  SET_TRENDING_TODAY_PAGE_REDUCER,
  SET_TRENDING_TODAY_REDUCER,
  SET_TRENDING_TODAY_TOTAL_PAGES_REDUCER,
  GET_TRENDING_WEEK_REDUCER,
  GET_TRENDING_WEEK_ERROR_REDUCER,
  GET_TRENDING_WEEK_PAGE_REDUCER,
  GET_TRENDING_WEEK_TOTAL_PAGES_REDUCER,
  SET_TRENDING_WEEK_ERROR_REDUCER,
  SET_TRENDING_WEEK_PAGE_REDUCER,
  SET_TRENDING_WEEK_REDUCER,
  SET_TRENDING_WEEK_TOTAL_PAGES_REDUCER,
} from "../action-types/action-types";

const trendingInitialState = fromJS({
  today: { data: [], page: 0, error: "", totalPages: 0 },
  week: { data: [], page: 0, error: "", totalPages: 0 },
});

const trendingReducer = (state = trendingInitialState, action) => {
  switch (action.type) {
    /* 
        TODAY
    */
    case GET_TRENDING_TODAY_REDUCER:
      return state.get("today");

    case SET_TRENDING_TODAY_REDUCER: {
      return state
        .setIn(["today", "data"], action.data)
        .setIn(["today", "error"], "");
    }

    case GET_TRENDING_TODAY_PAGE_REDUCER: {
      return state.getIn(["today", "page"]);
    }

    case SET_TRENDING_TODAY_PAGE_REDUCER: {
      return state.setIn(["today", "page"], action.page);
    }

    case GET_TRENDING_TODAY_TOTAL_PAGES_REDUCER: {
      return state.getIn(["today", "totalPages"]);
    }

    case SET_TRENDING_TODAY_TOTAL_PAGES_REDUCER: {
      return state.setIn(["today", "totalPages"], action.totalPages);
    }

    case GET_TRENDING_TODAY_ERROR_REDUCER: {
      return state.getIn(["today", "error"]);
    }

    case SET_TRENDING_TODAY_ERROR_REDUCER: {
      return state.setIn(["today", "error"], action.error);
    }

    /* 
        THIS WEEK
    */

    case GET_TRENDING_WEEK_REDUCER:
      return state.get("week");

    case SET_TRENDING_WEEK_REDUCER: {
      return state
        .setIn(["week", "data"], action.data)
        .setIn(["week", "error"], "");
    }

    case GET_TRENDING_WEEK_PAGE_REDUCER: {
      return state.getIn(["week", "page"]);
    }

    case SET_TRENDING_WEEK_PAGE_REDUCER: {
      return state.setIn(["week", "page"], action.page);
    }

    case GET_TRENDING_WEEK_TOTAL_PAGES_REDUCER: {
      return state.getIn(["week", "totalPages"]);
    }

    case SET_TRENDING_WEEK_TOTAL_PAGES_REDUCER: {
      return state.setIn(["week", "totalPages"], action.totalPages);
    }

    case GET_TRENDING_WEEK_ERROR_REDUCER: {
      return state.getIn(["week", "error"]);
    }

    case SET_TRENDING_WEEK_ERROR_REDUCER: {
      return state.setIn(["week", "error"], action.error);
    }

    default:
      return state;
  }
};
export default trendingReducer;
