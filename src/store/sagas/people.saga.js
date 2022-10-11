import { put, takeLatest, call, select } from "redux-saga/effects";
import { GET_POPULAR_PEOPLE } from "../action-types/action-types";
import { peopleActions } from "../actions";
import { getPopularPeople } from "../services/axios/axios";

export function* handleGetPopularPeople() {
  const state = yield select();
  const { page, data } = state.people.toJS().popular;
  const response = yield call(getPopularPeople, `${page + 1}`);

  if (response.data) {
    let newResults = response.data.results;
    if (page > 0) {
      newResults = data.concat(response.data.results);
    }
    yield put(peopleActions.setPopularPeople(newResults));
    yield put(peopleActions.setPopularPeoplePage(response.data.page));
    yield put(
      peopleActions.setPopularPeopleTotalPages(response.data["total_pages"])
    );
  } else {
    yield put(peopleActions.setPopularPeopleError(response.message));
  }
}

export function* peopleSaga() {
  yield takeLatest(GET_POPULAR_PEOPLE, handleGetPopularPeople);
}
