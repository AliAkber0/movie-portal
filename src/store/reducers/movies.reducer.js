import { fromJS } from "immutable";
import {
  GET_NOW_PLAYING_MOVIES_ERROR_REDUCER,
  GET_NOW_PLAYING_MOVIES_PAGE_REDUCER,
  GET_NOW_PLAYING_MOVIES_REDUCER,
  GET_NOW_PLAYING_MOVIES_TOTAL_PAGES_REDUCER,
  GET_POPULAR_MOVIES_ERROR_REDUCER,
  GET_POPULAR_MOVIES_PAGE_REDUCER,
  GET_POPULAR_MOVIES_REDUCER,
  GET_POPULAR_MOVIES_TOTAL_PAGES_REDUCER,
  GET_TOP_RATED_MOVIES_ERROR_REDUCER,
  GET_TOP_RATED_MOVIES_PAGE_REDUCER,
  GET_TOP_RATED_MOVIES_REDUCER,
  GET_TOP_RATED_MOVIES_TOTAL_PAGES_REDUCER,
  GET_UPCOMING_MOVIES_ERROR_REDUCER,
  GET_UPCOMING_MOVIES_PAGE_REDUCER,
  GET_UPCOMING_MOVIES_REDUCER,
  GET_UPCOMING_MOVIES_TOTAL_PAGES_REDUCER,
  SET_NOW_PLAYING_MOVIES_ERROR_REDUCER,
  SET_NOW_PLAYING_MOVIES_PAGE_REDUCER,
  SET_NOW_PLAYING_MOVIES_REDUCER,
  SET_NOW_PLAYING_MOVIES_TOTAL_PAGES_REDUCER,
  SET_POPULAR_MOVIES_ERROR_REDUCER,
  SET_POPULAR_MOVIES_PAGE_REDUCER,
  SET_POPULAR_MOVIES_REDUCER,
  SET_POPULAR_MOVIES_TOTAL_PAGES_REDUCER,
  SET_TOP_RATED_MOVIES_ERROR_REDUCER,
  SET_TOP_RATED_MOVIES_PAGE_REDUCER,
  SET_TOP_RATED_MOVIES_REDUCER,
  SET_TOP_RATED_MOVIES_TOTAL_PAGES_REDUCER,
  SET_UPCOMING_MOVIES_ERROR_REDUCER,
  SET_UPCOMING_MOVIES_PAGE_REDUCER,
  SET_UPCOMING_MOVIES_REDUCER,
  SET_UPCOMING_MOVIES_TOTAL_PAGES_REDUCER,
} from "../action-types/action-types";

const moviesInitialState = fromJS({
  popular: { data: [], page: 0, error: "", totalPages: 0 },
  topRated: { data: [], page: 0, error: "", totalPages: 0 },
  upComing: { data: [], page: 0, error: "", totalPages: 0 },
  nowPlaying: { data: [], page: 0, error: "", totalPages: 0 },
});

const moviesReducer = (state = moviesInitialState, action) => {
  switch (action.type) {
    // Popular

    case GET_POPULAR_MOVIES_REDUCER:
      return state.get("popular");

    case SET_POPULAR_MOVIES_REDUCER: {
      return state
        .setIn(["popular", "data"], action.data)
        .setIn(["popular", "error"], "");
    }

    case GET_POPULAR_MOVIES_PAGE_REDUCER: {
      return state.getIn(["popular", "page"]);
    }

    case SET_POPULAR_MOVIES_PAGE_REDUCER: {
      return state.setIn(["popular", "page"], action.page);
    }

    case GET_POPULAR_MOVIES_TOTAL_PAGES_REDUCER: {
      return state.getIn(["popular", "totalPages"]);
    }

    case SET_POPULAR_MOVIES_TOTAL_PAGES_REDUCER: {
      return state.setIn(["popular", "totalPages"], action.totalPages);
    }

    case GET_POPULAR_MOVIES_ERROR_REDUCER: {
      return state.getIn(["popular", "error"]);
    }

    case SET_POPULAR_MOVIES_ERROR_REDUCER: {
      return state.setIn(["popular", "error"], action.error);
    }

    //Top Rated

    case GET_TOP_RATED_MOVIES_REDUCER:
      return state.get("topRated");

    case SET_TOP_RATED_MOVIES_REDUCER: {
      return state
        .setIn(["topRated", "data"], action.data)
        .setIn(["topRated", "error"], "");
    }

    case GET_TOP_RATED_MOVIES_PAGE_REDUCER: {
      return state.getIn(["topRated", "page"]);
    }

    case SET_TOP_RATED_MOVIES_PAGE_REDUCER: {
      return state.setIn(["topRated", "page"], action.page);
    }

    case GET_TOP_RATED_MOVIES_TOTAL_PAGES_REDUCER: {
      return state.getIn(["topRated", "totalPages"]);
    }

    case SET_TOP_RATED_MOVIES_TOTAL_PAGES_REDUCER: {
      return state.setIn(["topRated", "totalPages"], action.totalPages);
    }
    case GET_TOP_RATED_MOVIES_ERROR_REDUCER: {
      return state.getIn(["topRated", "error"]);
    }

    case SET_TOP_RATED_MOVIES_ERROR_REDUCER: {
      return state.setIn(["topRated", "error"], action.error);
    }

    /* 
      Now Playing
    */

    case GET_NOW_PLAYING_MOVIES_REDUCER:
      return state.get("nowPlaying");

    case SET_NOW_PLAYING_MOVIES_REDUCER: {
      return state
        .setIn(["nowPlaying", "data"], action.data)
        .setIn(["nowPlaying", "error"], "");
    }

    case GET_NOW_PLAYING_MOVIES_PAGE_REDUCER: {
      return state.getIn(["nowPlaying", "page"]);
    }

    case SET_NOW_PLAYING_MOVIES_PAGE_REDUCER: {
      return state.setIn(["nowPlaying", "page"], action.page);
    }

    case GET_NOW_PLAYING_MOVIES_TOTAL_PAGES_REDUCER: {
      return state.getIn(["nowPlaying", "totalPages"]);
    }

    case SET_NOW_PLAYING_MOVIES_TOTAL_PAGES_REDUCER: {
      return state.setIn(["nowPlaying", "totalPages"], action.totalPages);
    }
    case GET_NOW_PLAYING_MOVIES_ERROR_REDUCER: {
      return state.getIn(["nowPlaying", "error"]);
    }

    case SET_NOW_PLAYING_MOVIES_ERROR_REDUCER: {
      return state.setIn(["nowPlaying", "error"], action.error);
    }

    /* 
      Upcoming
    */

    case GET_UPCOMING_MOVIES_REDUCER:
      return state.get("upComing");

    case SET_UPCOMING_MOVIES_REDUCER: {
      return state
        .setIn(["upComing", "data"], action.data)
        .setIn(["upComing", "error"], "");
    }

    case GET_UPCOMING_MOVIES_PAGE_REDUCER: {
      return state.getIn(["upComing", "page"]);
    }

    case SET_UPCOMING_MOVIES_PAGE_REDUCER: {
      return state.setIn(["upComing", "page"], action.page);
    }

    case GET_UPCOMING_MOVIES_TOTAL_PAGES_REDUCER: {
      return state.getIn(["upComing", "totalPages"]);
    }

    case SET_UPCOMING_MOVIES_TOTAL_PAGES_REDUCER: {
      return state.setIn(["upComing", "totalPages"], action.totalPages);
    }
    case GET_UPCOMING_MOVIES_ERROR_REDUCER: {
      return state.getIn(["upComing", "error"]);
    }

    case SET_UPCOMING_MOVIES_ERROR_REDUCER: {
      return state.setIn(["upComing", "error"], action.error);
    }

    default:
      return state;
  }
};

export default moviesReducer;
