import moviesReducer from "./movies.reducer";
import peopleReducer from "./people.reducer";
import tvShowsReducer from "./tv-shows.reducer";

import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "../sagas";
import trendingReducer from "./trending.reducer";
import searchReducer from "./search.reducer";
import detailsReducer from "./details.reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleWare = createSagaMiddleware();
const middleWare = [sagaMiddleWare];

const rootReducer = combineReducers({
  movies: moviesReducer,
  people: peopleReducer,
  tvShows: tvShowsReducer,
  trending: trendingReducer,
  search: searchReducer,
  details: detailsReducer,
});

const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(...middleWare))
);

sagaMiddleWare.run(rootSaga);
export default store;
