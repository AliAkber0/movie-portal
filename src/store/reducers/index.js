import moviesReducer from "./movies.reducer";
import peopleReducer from "./people.reducer";
import tvShowsReducer from "./tv-shows.reducer";

import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "@redux-saga/core";
// import { watcher } from "../Saga/Watchers/Watchers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleWare = createSagaMiddleware();
const middleWare = [sagaMiddleWare];

const rootReducer = combineReducers({
  movies: moviesReducer,
  people: peopleReducer,
  tvShows: tvShowsReducer,
});

const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(...middleWare))
);

// sagaMiddleWare.run(watcher);
export default store;
