import {
  GET_POPULAR_MOVIES_ERROR_REDUCER,
  GET_POPULAR_MOVIES_PAGE_REDUCER,
  GET_POPULAR_MOVIES,
  SET_POPULAR_MOVIES_REDUCER,
  SET_POPULAR_MOVIES_ERROR_REDUCER,
  SET_POPULAR_MOVIES_PAGE_REDUCER,
  GET_UPCOMING_MOVIES,
  GET_UPCOMING_MOVIES_PAGE_REDUCER,
  GET_UPCOMING_MOVIES_ERROR_REDUCER,
  SET_UPCOMING_MOVIES_PAGE_REDUCER,
  SET_UPCOMING_MOVIES_ERROR_REDUCER,
  GET_TOP_RATED_MOVIES,
  GET_TOP_RATED_MOVIES_PAGE_REDUCER,
  GET_TOP_RATED_MOVIES_ERROR_REDUCER,
  SET_TOP_RATED_MOVIES_PAGE_REDUCER,
  SET_TOP_RATED_MOVIES_ERROR_REDUCER,
  GET_NOW_PLAYING_MOVIES,
  GET_NOW_PLAYING_MOVIES_PAGE_REDUCER,
  SET_NOW_PLAYING_MOVIES_PAGE_REDUCER,
  GET_NOW_PLAYING_MOVIES_ERROR_REDUCER,
  SET_NOW_PLAYING_MOVIES_ERROR_REDUCER,
  SET_UPCOMING_MOVIES_REDUCER,
  SET_TOP_RATED_MOVIES_REDUCER,
  SET_NOW_PLAYING_MOVIES_REDUCER,
  SET_NOW_PLAYING_MOVIES_TOTAL_PAGES_REDUCER,
  GET_NOW_PLAYING_MOVIES_TOTAL_PAGES_REDUCER,
  GET_TOP_RATED_MOVIES_TOTAL_PAGES_REDUCER,
  SET_TOP_RATED_MOVIES_TOTAL_PAGES_REDUCER,
  GET_UPCOMING_MOVIES_TOTAL_PAGES_REDUCER,
  SET_UPCOMING_MOVIES_TOTAL_PAGES_REDUCER,
  GET_POPULAR_MOVIES_TOTAL_PAGES_REDUCER,
  SET_POPULAR_MOVIES_TOTAL_PAGES_REDUCER,
} from "../action-types/action-types";

/* 
  Popular Movies
*/

export const getPopularMovies = () => ({ type: GET_POPULAR_MOVIES });

export const setPopularMovies = (data) => ({
  type: SET_POPULAR_MOVIES_REDUCER,
  data: data,
});

export const getPopularMoviesPage = () => ({
  type: GET_POPULAR_MOVIES_PAGE_REDUCER,
});

export const setPopularMoviesPage = (pageNumber) => ({
  type: SET_POPULAR_MOVIES_PAGE_REDUCER,
  page: pageNumber,
});

export const getPopularMoviesTotalPages = () => ({
  type: GET_POPULAR_MOVIES_TOTAL_PAGES_REDUCER,
});

export const setPopularMoviesTotalPages = (totalPages) => ({
  type: SET_POPULAR_MOVIES_TOTAL_PAGES_REDUCER,
  totalPages,
});

export const getPopularMoviesError = () => ({
  type: GET_POPULAR_MOVIES_ERROR_REDUCER,
});

export const setPopularMoviesError = (error) => ({
  type: SET_POPULAR_MOVIES_ERROR_REDUCER,
  error,
});

/* 
  Upcoming Movies
*/
// Todo

export const getUpcomingMovies = () => ({ type: GET_UPCOMING_MOVIES });

export const setUpcomingMovies = (data) => ({
  type: SET_UPCOMING_MOVIES_REDUCER,
  data: data,
});

export const getUpcomingMoviesPage = () => ({
  type: GET_UPCOMING_MOVIES_PAGE_REDUCER,
});

export const setUpcomingMoviesPage = (pageNumber) => ({
  type: SET_UPCOMING_MOVIES_PAGE_REDUCER,
  page: pageNumber,
});

export const getUpcomingMoviesTotalPage = () => ({
  type: GET_UPCOMING_MOVIES_TOTAL_PAGES_REDUCER,
});

export const setUpcomingTotalPages = (totalPages) => ({
  type: SET_UPCOMING_MOVIES_TOTAL_PAGES_REDUCER,
  totalPages,
});

export const getUpcomingMoviesError = () => ({
  type: GET_UPCOMING_MOVIES_ERROR_REDUCER,
});

export const setUpcomingMoviesError = (error) => ({
  type: SET_UPCOMING_MOVIES_ERROR_REDUCER,
  error,
});

/* 
  Top-Rated Movies  
*/

export const getTopRatedMovies = () => ({ type: GET_TOP_RATED_MOVIES });

export const setTopRatedMovies = (data) => ({
  type: SET_TOP_RATED_MOVIES_REDUCER,
  data: data,
});

export const getTopRatedMoviesPage = () => ({
  type: GET_TOP_RATED_MOVIES_PAGE_REDUCER,
});

export const setTopRatedMoviesPage = (pageNumber) => ({
  type: SET_TOP_RATED_MOVIES_PAGE_REDUCER,
  page: pageNumber,
});

export const getTopRatedMoviesTotalPage = () => ({
  type: GET_TOP_RATED_MOVIES_TOTAL_PAGES_REDUCER,
});

export const setTopRatedMoviesTotalPage = (totalPages) => ({
  type: SET_TOP_RATED_MOVIES_TOTAL_PAGES_REDUCER,
  totalPages,
});

export const getTopRatedMoviesError = () => ({
  type: GET_TOP_RATED_MOVIES_ERROR_REDUCER,
});

export const setTopRatedMoviesError = (error) => ({
  type: SET_TOP_RATED_MOVIES_ERROR_REDUCER,
  error,
});

/* 
  Now Playing Movies
*/
export const getNowPlayingMovies = () => ({ type: GET_NOW_PLAYING_MOVIES });

export const setNowPlayingMovies = (data) => ({
  type: SET_NOW_PLAYING_MOVIES_REDUCER,
  data: data,
});

export const getNowPlayingMoviesPage = () => ({
  type: GET_NOW_PLAYING_MOVIES_PAGE_REDUCER,
});

export const setNowPlayingMoviesPage = (pageNumber) => ({
  type: SET_NOW_PLAYING_MOVIES_PAGE_REDUCER,
  page: pageNumber,
});

export const getNowPlayingMoviesTotalPage = () => ({
  type: GET_NOW_PLAYING_MOVIES_TOTAL_PAGES_REDUCER,
});

export const setNowPlayingMoviesTotalPage = (totalPages) => ({
  type: SET_NOW_PLAYING_MOVIES_TOTAL_PAGES_REDUCER,
  totalPages,
});

export const getNowPlayingMoviesError = () => ({
  type: GET_NOW_PLAYING_MOVIES_ERROR_REDUCER,
});

export const setNowPlayingMoviesError = (error) => ({
  type: SET_NOW_PLAYING_MOVIES_ERROR_REDUCER,
  error,
});
