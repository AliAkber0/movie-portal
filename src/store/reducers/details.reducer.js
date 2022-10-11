import { fromJS } from "immutable";
import {
  CLEAR_DETAILS_REDUCER,
  GET_DETAILS_ERROR_REDUCER,
  GET_DETAILS_REDUCER,
  GET_DETAILS_REVIEWS_ERROR_REDUCER,
  GET_DETAILS_REVIEWS_PAGE_REDUCER,
  GET_DETAILS_REVIEWS_REDUCER,
  GET_DETAILS_REVIEWS_TOTAL_PAGES_REDUCER,
  SET_DETAILS_ERROR_REDUCER,
  SET_DETAILS_REDUCER,
  SET_DETAILS_REVIEWS_ERROR_REDUCER,
  SET_DETAILS_REVIEWS_PAGE_REDUCER,
  SET_DETAILS_REVIEWS_REDUCER,
  SET_DETAILS_REVIEWS_TOTAL_PAGES_REDUCER,
} from "../action-types/action-types";

const detailsInitialState = fromJS({
  details: {
    data: {},
    error: "",
    reviews: [],
    reviewsPage: 0,
    reviewsTotalPage: 0,
    reviewsError: "",
  },
});

const detailsReducer = (state = detailsInitialState, action) => {
  switch (action.type) {
    case GET_DETAILS_REDUCER:
      return state.get("details");

    case SET_DETAILS_REDUCER: {
      return state
        .setIn(["details", "data"], action.data)
        .setIn(["details", "error"], "");
    }

    case GET_DETAILS_ERROR_REDUCER: {
      return state.getIn(["details", "error"]);
    }

    case SET_DETAILS_ERROR_REDUCER: {
      return state.setIn(["details", "error"], action.error);
    }

    case CLEAR_DETAILS_REDUCER: {
      return detailsInitialState;
    }

    case GET_DETAILS_REVIEWS_REDUCER: {
      return state.getIn(["details", "reviews"]);
    }

    case SET_DETAILS_REVIEWS_REDUCER: {
      return state
        .setIn(["details", "reviews"], action.reviews)
        .setIn(["details", "reviewsError"], "");
    }

    case GET_DETAILS_REVIEWS_PAGE_REDUCER: {
      return state.getIn(["details", "reviewsPage"]);
    }

    case SET_DETAILS_REVIEWS_PAGE_REDUCER: {
      return state.setIn(["details", "reviewsPage"], action.reviewsPage);
    }

    case GET_DETAILS_REVIEWS_TOTAL_PAGES_REDUCER: {
      return state.getIn(["details", "reviewsTotalPage"]);
    }

    case SET_DETAILS_REVIEWS_TOTAL_PAGES_REDUCER: {
      return state.setIn(
        ["details", "reviewsTotalPage"],
        action.reviewsTotalPage
      );
    }

    case GET_DETAILS_REVIEWS_ERROR_REDUCER: {
      return state.getIn(["details", "reviewsError"]);
    }

    case SET_DETAILS_REVIEWS_ERROR_REDUCER: {
      return state.setIn(["details", "reviewsError"], action.reviewsError);
    }

    default:
      return state;
  }
};
export default detailsReducer;
