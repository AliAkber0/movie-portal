import { put, takeLatest, call, select } from "redux-saga/effects";
import { GET_DETAILS, GET_DETAILS_REVIEWS } from "../action-types/action-types";
import { detailsActions } from "../actions";
import {
  getMovieDetails,
  getPeopleDetails,
  getReviewsOfMoviesOrTvShows,
  getTvShowDetails,
} from "../services/axios/axios";

export function* handleGetDetails({ titleId, tag }) {
  let response;

  if (tag === "movies") {
    response = yield call(getMovieDetails, titleId);
  } else if (tag === "tv") {
    response = yield call(getTvShowDetails, titleId);
  } else {
    response = yield call(getPeopleDetails, titleId);
  }

  if (response?.data) {
    yield put(detailsActions.setDetails(response.data));
  } else {
    yield put(detailsActions.setDetailsError(response.message));
  }
}

export function* handleGetDetailsReviews({ titleId, tag }) {
  const state = yield select();
  const { reviewsPage, reviews } = state.details.toJS().details;

  let reviewResponse;

  if (tag === "movies") {
    reviewResponse = yield call(
      getReviewsOfMoviesOrTvShows,
      "movie",
      titleId,
      reviewsPage + 1
    );
  } else if (tag === "tv") {
    reviewResponse = yield call(
      getReviewsOfMoviesOrTvShows,
      "movie",
      titleId,
      reviewsPage + 1
    );
  }

  if (reviewResponse?.data) {
    let newdata = reviewResponse.data.results;
    if (reviewsPage > 1) {
      newdata = reviews.concat(reviewResponse.data.results);
    }
    yield put(detailsActions.setDetailsReviews(newdata));
    yield put(detailsActions.setDetailsReviewsPage(reviewResponse.data.page));
    yield put(
      detailsActions.setDetailsReviewsTotalPage(reviewResponse.data.total_pages)
    );
  } else {
    yield put(detailsActions.setDetailsReviewsError(reviewResponse.message));
  }
}

export function* detailsSaga() {
  yield takeLatest(GET_DETAILS, handleGetDetails);
  yield takeLatest(GET_DETAILS_REVIEWS, handleGetDetailsReviews);
}
