import { put, call, debounce } from "redux-saga/effects";
import { GET_SEARCH } from "../action-types/action-types";
import { searchActions } from "../actions";
import { getSearchMoviesTvShowsPeople } from "../services/axios/axios";

function* handleGetSearch({ searchValue }) {
  if (searchValue) {
    const response = yield call(getSearchMoviesTvShowsPeople, searchValue, 1);
    if (response.data) {
      let newResults = response.data.results;

      yield put(searchActions.setSearchResult(newResults));
      yield put(searchActions.setSearchResultPage(response.data.page));
      yield put(
        searchActions.setSearchResultTotalPages(response.data["total_pages"])
      );
    } else {
      yield put(searchActions.setSearchResultError(response.message));
    }
  }
}

export function* searchSaga() {
  yield debounce(3000, GET_SEARCH, handleGetSearch);
}
