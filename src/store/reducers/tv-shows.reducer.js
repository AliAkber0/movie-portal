import { fromJS } from "immutable";
import {
  GET_AIRING_TODAY_TV_SHOWS_ERROR_REDUCER,
  GET_AIRING_TODAY_TV_SHOWS_PAGE_REDUCER,
  GET_AIRING_TODAY_TV_SHOWS_REDUCER,
  GET_AIRING_TODAY_TV_SHOWS_TOTAL_PAGES_REDUCER,
  GET_ON_AIRED_TV_SHOWS_ERROR_REDUCER,
  GET_ON_AIRED_TV_SHOWS_PAGE_REDUCER,
  GET_ON_AIRED_TV_SHOWS_REDUCER,
  GET_ON_AIRED_TV_SHOWS_TOTAL_PAGES_REDUCER,
  GET_POPULAR_TV_SHOWS_ERROR_REDUCER,
  GET_POPULAR_TV_SHOWS_PAGE_REDUCER,
  GET_POPULAR_TV_SHOWS_REDUCER,
  GET_POPULAR_TV_SHOWS_TOTAL_PAGES_REDUCER,
  GET_TOP_RATED_TV_SHOWS_ERROR_REDUCER,
  GET_TOP_RATED_TV_SHOWS_PAGE_REDUCER,
  GET_TOP_RATED_TV_SHOWS_REDUCER,
  GET_TOP_RATED_TV_SHOWS_TOTAL_PAGES_REDUCER,
  SET_AIRING_TODAY_TV_SHOWS_ERROR_REDUCER,
  SET_AIRING_TODAY_TV_SHOWS_PAGE_REDUCER,
  SET_AIRING_TODAY_TV_SHOWS_REDUCER,
  SET_AIRING_TODAY_TV_SHOWS_TOTAL_PAGES_REDUCER,
  SET_ON_AIRED_TV_SHOWS_ERROR_REDUCER,
  SET_ON_AIRED_TV_SHOWS_PAGE_REDUCER,
  SET_ON_AIRED_TV_SHOWS_REDUCER,
  SET_ON_AIRED_TV_SHOWS_TOTAL_PAGES_REDUCER,
  SET_POPULAR_TV_SHOWS_ERROR_REDUCER,
  SET_POPULAR_TV_SHOWS_PAGE_REDUCER,
  SET_POPULAR_TV_SHOWS_REDUCER,
  SET_POPULAR_TV_SHOWS_TOTAL_PAGES_REDUCER,
  SET_TOP_RATED_TV_SHOWS_ERROR_REDUCER,
  SET_TOP_RATED_TV_SHOWS_PAGE_REDUCER,
  SET_TOP_RATED_TV_SHOWS_REDUCER,
  SET_TOP_RATED_TV_SHOWS_TOTAL_PAGES_REDUCER,
} from "../action-types/action-types";

const tvShowsInitialState = fromJS({
  popular: { data: [], page: 0, error: "", totalPages: 0 },
  topRated: { data: [], page: 0, error: "", totalPages: 0 },
  airingToday: { data: [], page: 0, error: "", totalPages: 0 },
  onAired: { data: [], page: 0, error: "", totalPages: 0 },
});

const tvShowsReducer = (state = tvShowsInitialState, action) => {
  switch (action.type) {
    // Popular

    case GET_POPULAR_TV_SHOWS_REDUCER:
      return state.get("popular");

    case SET_POPULAR_TV_SHOWS_REDUCER: {
      return state
        .setIn(["popular", "data"], action.data)
        .setIn(["popular", "error"], "");
    }

    case GET_POPULAR_TV_SHOWS_PAGE_REDUCER: {
      return state.getIn(["popular", "page"]);
    }

    case SET_POPULAR_TV_SHOWS_PAGE_REDUCER: {
      return state.setIn(["popular", "page"], action.page);
    }

    case GET_POPULAR_TV_SHOWS_TOTAL_PAGES_REDUCER: {
      return state.getIn(["popular", "totalPages"]);
    }

    case SET_POPULAR_TV_SHOWS_TOTAL_PAGES_REDUCER: {
      return state.setIn(["popular", "totalPages"], action.totalPages);
    }

    case GET_POPULAR_TV_SHOWS_ERROR_REDUCER: {
      return state.getIn(["popular", "error"]);
    }

    case SET_POPULAR_TV_SHOWS_ERROR_REDUCER: {
      return state.setIn(["popular", "error"], action.error);
    }

    //Top Rated

    case GET_TOP_RATED_TV_SHOWS_REDUCER:
      return state.get("topRated");

    case SET_TOP_RATED_TV_SHOWS_REDUCER: {
      return state
        .setIn(["topRated", "data"], action.data)
        .setIn(["topRated", "error"], "");
    }

    case GET_TOP_RATED_TV_SHOWS_PAGE_REDUCER: {
      return state.getIn(["topRated", "page"]);
    }

    case SET_TOP_RATED_TV_SHOWS_PAGE_REDUCER: {
      return state.setIn(["topRated", "page"], action.page);
    }

    case GET_TOP_RATED_TV_SHOWS_TOTAL_PAGES_REDUCER: {
      return state.getIn(["topRated", "totalPages"]);
    }

    case SET_TOP_RATED_TV_SHOWS_TOTAL_PAGES_REDUCER: {
      return state.setIn(["topRated", "totalPages"], action.totalPages);
    }
    case GET_TOP_RATED_TV_SHOWS_ERROR_REDUCER: {
      return state.getIn(["topRated", "error"]);
    }

    case SET_TOP_RATED_TV_SHOWS_ERROR_REDUCER: {
      return state.setIn(["topRated", "error"], action.error);
    }

    /* 
      Airing Today
    */

    case GET_AIRING_TODAY_TV_SHOWS_REDUCER:
      return state.get("airingToday");

    case SET_AIRING_TODAY_TV_SHOWS_REDUCER: {
      return state
        .setIn(["airingToday", "data"], action.data)
        .setIn(["airingToday", "error"], "");
    }

    case GET_AIRING_TODAY_TV_SHOWS_PAGE_REDUCER: {
      return state.getIn(["nowPlaying", "page"]);
    }

    case SET_AIRING_TODAY_TV_SHOWS_PAGE_REDUCER: {
      return state.setIn(["airingToday", "page"], action.page);
    }

    case GET_AIRING_TODAY_TV_SHOWS_TOTAL_PAGES_REDUCER: {
      return state.getIn(["airingToday", "totalPages"]);
    }

    case SET_AIRING_TODAY_TV_SHOWS_TOTAL_PAGES_REDUCER: {
      return state.setIn(["airingToday", "totalPages"], action.totalPages);
    }
    case GET_AIRING_TODAY_TV_SHOWS_ERROR_REDUCER: {
      return state.getIn(["airingToday", "error"]);
    }

    case SET_AIRING_TODAY_TV_SHOWS_ERROR_REDUCER: {
      return state.setIn(["airingToday", "error"], action.error);
    }

    /* 
      onAired
    */

    case GET_ON_AIRED_TV_SHOWS_REDUCER:
      return state.get("onAired");

    case SET_ON_AIRED_TV_SHOWS_REDUCER: {
      return state
        .setIn(["onAired", "data"], action.data)
        .setIn(["onAired", "error"], "");
    }

    case GET_ON_AIRED_TV_SHOWS_PAGE_REDUCER: {
      return state.getIn(["onAired", "page"]);
    }

    case SET_ON_AIRED_TV_SHOWS_PAGE_REDUCER: {
      return state.setIn(["onAired", "page"], action.page);
    }

    case GET_ON_AIRED_TV_SHOWS_TOTAL_PAGES_REDUCER: {
      return state.getIn(["onAired", "totalPages"]);
    }

    case SET_ON_AIRED_TV_SHOWS_TOTAL_PAGES_REDUCER: {
      return state.setIn(["onAired", "totalPages"], action.totalPages);
    }
    case GET_ON_AIRED_TV_SHOWS_ERROR_REDUCER: {
      return state.getIn(["onAired", "error"]);
    }

    case SET_ON_AIRED_TV_SHOWS_ERROR_REDUCER: {
      return state.setIn(["onAired", "error"], action.error);
    }

    default:
      return state;
  }
};

export default tvShowsReducer;
