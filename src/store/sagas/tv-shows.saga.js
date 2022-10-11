import {
  GET_AIRING_TODAY_TV_SHOWS,
  GET_ON_AIRED_TV_SHOWS,
  GET_POPULAR_TV_SHOWS,
  GET_TOP_RATED_TV_SHOWS,
} from "../action-types/action-types";
import { call, takeLatest, put, select } from "redux-saga/effects";
import {
  getAiringTodayTvShows,
  getOnAiredTvShows,
  getPopularMoviesOrTVShow,
  getTopRatedMoviesOrTVShow,
} from "../services/axios/axios";
import { tvShowsActions } from "../actions";

function* handleGetPopularTvShows() {
  const state = yield select();
  const { page, data } = state.tvShows.toJS().popular;
  const response = yield call(getPopularMoviesOrTVShow, "tv", `${page + 1}`);

  if (response.data) {
    let newResults = response.data.results;
    if (page > 0) {
      newResults = data.concat(response.data.results);
    }

    yield put(tvShowsActions.setPopularTvShows(newResults));
    yield put(tvShowsActions.setPopularTvShowsPage(response.data.page));
    yield put(
      tvShowsActions.setPopularTvShowsTotalPages(response.data.total_pages)
    );
  } else {
    yield put(tvShowsActions.setPopularTvShowsError(response.message));
  }
}

function* handleGetTopRatedTvShows() {
  const state = yield select();
  const { page, data } = state.tvShows.toJS().topRated;
  const response = yield call(getTopRatedMoviesOrTVShow, "tv", `${page + 1}`);

  if (response.data) {
    let newResults = response.data.results;
    if (page > 0) {
      newResults = data.concat(response.data.results);
    }
    yield put(tvShowsActions.setTopRatedTvShows(newResults));
    yield put(tvShowsActions.setTopRatedTvShowsPage(response.data.page));
    yield put(
      tvShowsActions.setTopRatedTvShowsTotalPages(response.data.total_pages)
    );
  } else {
    yield put(tvShowsActions.setTopRatedTvShowsError(response.message));
  }
}

function* handleGetOnAiredTvShows() {
  const state = yield select();
  const { page, data } = state.tvShows.toJS().onAired;
  const response = yield call(getOnAiredTvShows, `${page + 1}`);

  if (response.data) {
    let newResults = response.data.results;
    if (page > 0) {
      newResults = data.concat(response.data.results);
    }
    yield put(tvShowsActions.setOnAiredTvShows(newResults));
    yield put(tvShowsActions.setOnAiredTvShowsPage(response.data.page));
    yield put(
      tvShowsActions.setOnAiredTvShowsTotalPages(response.data.total_pages)
    );
  } else {
    yield put(tvShowsActions.setOnAiredTvShowsError(response.message));
  }
}

function* handleGetAiringTodayTvShows() {
  const state = yield select();
  const { page, data } = state.tvShows.toJS().airingToday;
  const response = yield call(getAiringTodayTvShows, `${page + 1}`);

  if (response.data) {
    let newResults = response.data.results;
    if (page > 0) {
      newResults = data.concat(response.data.results);
    }
    yield put(tvShowsActions.setAiringTodayTvShows(newResults));
    yield put(tvShowsActions.setAiringTodayTvShowsPage(response.data.page));
    yield put(
      tvShowsActions.setAiringTodayTvShowsTotalPages(response.data.total_pages)
    );
  } else {
    yield put(tvShowsActions.setAiringTodayTvShowsError(response.message));
  }
}

export function* tvShowsSaga() {
  yield takeLatest(GET_POPULAR_TV_SHOWS, handleGetPopularTvShows);
  yield takeLatest(GET_TOP_RATED_TV_SHOWS, handleGetTopRatedTvShows);
  yield takeLatest(GET_ON_AIRED_TV_SHOWS, handleGetOnAiredTvShows);
  yield takeLatest(GET_AIRING_TODAY_TV_SHOWS, handleGetAiringTodayTvShows);
}
