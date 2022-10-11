import { put, takeLatest, call, select } from "redux-saga/effects";
import {
  GET_TRENDING_TODAY,
  GET_TRENDING_WEEK,
} from "../action-types/action-types";
import { trendingActions } from "../actions";
import { getTrendingMovieOrTvShows } from "../services/axios/axios";

export function* handleGetTrendingToday() {
  const state = yield select();

  const { page, data } = state.trending.toJS().today;
  const response = yield call(getTrendingMovieOrTvShows, "day", `${page + 1}`);

  if (response.data) {
    let newResults = response.data.results;
    if (page > 0) {
      newResults = data.concat(response.data.results);
    }
    yield put(trendingActions.setTrendingToday(newResults));
    yield put(trendingActions.setTrendingTodayPage(response.data.page));
    yield put(
      trendingActions.setTrendingTodayTotalPages(response.data["total_pages"])
    );
  } else {
    yield put(trendingActions.setTrendingTodayError(response.message));
  }
}
function* handleGetTrendingWeek() {
  const state = yield select();
  const { page, data } = state.trending.toJS().week;
  const response = yield call(getTrendingMovieOrTvShows, "week", `${page + 1}`);

  if (response.data) {
    let newResults = response.data.results;
    if (page > 0) {
      newResults = data.concat(response.data.results);
    }
    yield put(trendingActions.setTrendingWeek(newResults));
    yield put(trendingActions.setTrendingWeekPage(response.data.page));
    yield put(
      trendingActions.setTrendingWeekTotalPages(response.data["total_pages"])
    );
  } else {
    yield put(trendingActions.setTrendingWeekError(response.message));
  }
}

export function* trendingSaga() {
  yield takeLatest(GET_TRENDING_TODAY, handleGetTrendingToday);
  yield takeLatest(GET_TRENDING_WEEK, handleGetTrendingWeek);
}
