import {
  GET_NOW_PLAYING_MOVIES,
  GET_POPULAR_MOVIES,
  GET_TOP_RATED_MOVIES,
  GET_UPCOMING_MOVIES,
} from "../action-types/action-types";
import { call, takeLatest, put, select } from "redux-saga/effects";
import {
  getNowPlaying,
  getPopularMoviesOrTVShow,
  getTopRatedMoviesOrTVShow,
  getUpcomingMovies,
} from "../services/axios/axios";
import { moviesActions } from "../actions";

function* handleGetPopularMovies() {
  const state = yield select();
  const { page, data } = state.movies.toJS().popular;
  const response = yield call(getPopularMoviesOrTVShow, "movie", `${page + 1}`);

  if (response.data) {
    let newResults = response.data.results;
    if (page > 0) {
      newResults = data.concat(response.data.results);
    }
    yield put(moviesActions.setPopularMovies(newResults));
    yield put(moviesActions.setPopularMoviesPage(response.data.page));
    yield put(
      moviesActions.setPopularMoviesTotalPages(response.data["total_pages"])
    );
  } else {
    yield put(moviesActions.setPopularMoviesError(response.message));
  }
}

function* handleGetTopRatedMovies() {
  const state = yield select();
  const { page, data } = state.movies.toJS().topRated;
  const response = yield call(
    getTopRatedMoviesOrTVShow,
    "movie",
    `${page + 1}`
  );

  if (response.data) {
    let newResults = response.data.results;
    if (page > 0) {
      newResults = data.concat(response.data.results);
    }
    yield put(moviesActions.setTopRatedMovies(newResults));
    yield put(moviesActions.setTopRatedMoviesPage(response.data.page));
    yield put(
      moviesActions.setTopRatedMoviesTotalPage(response.data["total_pages"])
    );
  } else {
    yield put(moviesActions.setTopRatedMoviesError(response.message));
  }
}

function* handleGetUpcomingMovies() {
  const state = yield select();
  const { page, data } = state.movies.toJS().upComing;
  const response = yield call(getUpcomingMovies, `${page + 1}`);

  if (response.data) {
    let newResults = response.data.results;
    if (page > 0) {
      newResults = data.concat(response.data.results);
    }
    yield put(moviesActions.setUpcomingMovies(newResults));
    yield put(moviesActions.setUpcomingMoviesPage(response.data.page));
    yield put(
      moviesActions.setUpcomingTotalPages(response.data["total_pages"])
    );
  } else {
    yield put(moviesActions.setUpcomingMoviesError(response.message));
  }
}

function* handleGetNowPlayingMovies() {
  const state = yield select();
  const { page, data } = state.movies.toJS().nowPlaying;
  const response = yield call(getNowPlaying, `${page + 1}`);

  if (response.data) {
    let newResults = response.data.results;
    if (page > 0) {
      newResults = data.concat(response.data.results);
    }
    yield put(moviesActions.setNowPlayingMovies(newResults));
    yield put(moviesActions.setNowPlayingMoviesPage(response.data.page));
    yield put(
      moviesActions.setNowPlayingMoviesTotalPage(response.data["total_pages"])
    );
  } else {
    yield put(moviesActions.setNowPlayingMoviesError(response.message));
  }
}

export function* moviesSaga() {
  yield takeLatest(GET_POPULAR_MOVIES, handleGetPopularMovies);
  yield takeLatest(GET_TOP_RATED_MOVIES, handleGetTopRatedMovies);
  yield takeLatest(GET_UPCOMING_MOVIES, handleGetUpcomingMovies);
  yield takeLatest(GET_NOW_PLAYING_MOVIES, handleGetNowPlayingMovies);
}
