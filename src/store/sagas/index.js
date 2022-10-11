import { all, spawn } from "redux-saga/effects";
import { detailsSaga } from "./details.saga";
import { moviesSaga } from "./movies.saga";
import { peopleSaga } from "./people.saga";
import { searchSaga } from "./search.saga";
import { trendingSaga } from "./trending.saga";
import { tvShowsSaga } from "./tv-shows.saga";

function* rootSaga() {
  yield all([
    spawn(moviesSaga),
    spawn(tvShowsSaga),
    spawn(peopleSaga),
    spawn(trendingSaga),
    spawn(searchSaga),
    spawn(detailsSaga),
  ]);
}

export default rootSaga;
