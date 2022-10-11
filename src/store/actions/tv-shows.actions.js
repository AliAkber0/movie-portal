import {
  GET_AIRING_TODAY_TV_SHOWS,
  GET_AIRING_TODAY_TV_SHOWS_ERROR_REDUCER,
  GET_AIRING_TODAY_TV_SHOWS_PAGE_REDUCER,
  GET_AIRING_TODAY_TV_SHOWS_TOTAL_PAGES_REDUCER,
  GET_ON_AIRED_TV_SHOWS,
  GET_ON_AIRED_TV_SHOWS_ERROR_REDUCER,
  GET_ON_AIRED_TV_SHOWS_PAGE_REDUCER,
  GET_ON_AIRED_TV_SHOWS_TOTAL_PAGES_REDUCER,
  GET_POPULAR_TV_SHOWS,
  GET_POPULAR_TV_SHOWS_ERROR_REDUCER,
  GET_POPULAR_TV_SHOWS_PAGE_REDUCER,
  GET_POPULAR_TV_SHOWS_TOTAL_PAGES_REDUCER,
  GET_TOP_RATED_TV_SHOWS,
  GET_TOP_RATED_TV_SHOWS_ERROR_REDUCER,
  GET_TOP_RATED_TV_SHOWS_PAGE_REDUCER,
  GET_TOP_RATED_TV_SHOWS_TOTAL_PAGES_REDUCER,
  SET_AIRING_TODAY_TV_SHOWS_ERROR_REDUCER,
  SET_AIRING_TODAY_TV_SHOWS_PAGE_REDUCER,
  SET_AIRING_TODAY_TV_SHOWS_REDUCER,
  SET_AIRING_TODAY_TV_SHOWS_TOTAL_PAGES_REDUCER,
  SET_ON_AIRED_TV_SHOWS_ERROR_REDUCER,
  SET_ON_AIRED_TV_SHOWS_PAGE_REDUCER,
  SET_ON_AIRED_TV_SHOWS_REDUCER,
  SET_ON_AIRED_TV_SHOWS_TOTAL_PAGES_REDUCER,
  SET_POPULAR_TV_SHOWS_ERROR_REDUCER,
  SET_POPULAR_TV_SHOWS_PAGE_REDUCER,
  SET_POPULAR_TV_SHOWS_REDUCER,
  SET_POPULAR_TV_SHOWS_TOTAL_PAGES_REDUCER,
  SET_TOP_RATED_TV_SHOWS_ERROR_REDUCER,
  SET_TOP_RATED_TV_SHOWS_PAGE_REDUCER,
  SET_TOP_RATED_TV_SHOWS_REDUCER,
  SET_TOP_RATED_TV_SHOWS_TOTAL_PAGES_REDUCER,
} from "../action-types/action-types";

/* 
    Popular Tv Shows
*/

export const getPopularTvShows = () => ({ type: GET_POPULAR_TV_SHOWS });

export const setPopularTvShows = (data) => ({
  type: SET_POPULAR_TV_SHOWS_REDUCER,
  data: data,
});

export const getPopularTvShowsPage = () => ({
  type: GET_POPULAR_TV_SHOWS_PAGE_REDUCER,
});

export const setPopularTvShowsPage = (pageNumber) => ({
  type: SET_POPULAR_TV_SHOWS_PAGE_REDUCER,
  page: pageNumber,
});

export const getPopularTvShowsTotalPages = () => ({
  type: GET_POPULAR_TV_SHOWS_TOTAL_PAGES_REDUCER,
});

export const setPopularTvShowsTotalPages = (totalPages) => ({
  type: SET_POPULAR_TV_SHOWS_TOTAL_PAGES_REDUCER,
  totalPages,
});

export const getPopularTvShowsError = () => ({
  type: GET_POPULAR_TV_SHOWS_ERROR_REDUCER,
});

export const setPopularTvShowsError = (error) => ({
  type: SET_POPULAR_TV_SHOWS_ERROR_REDUCER,
  error,
});

/* 
    Top Rated Tv Shows
*/

export const getTopRatedTvShows = () => ({ type: GET_TOP_RATED_TV_SHOWS });

export const setTopRatedTvShows = (data) => ({
  type: SET_TOP_RATED_TV_SHOWS_REDUCER,
  data: data,
});
export const getTopRatedTvShowsPage = () => ({
  type: GET_TOP_RATED_TV_SHOWS_PAGE_REDUCER,
});

export const setTopRatedTvShowsPage = (pageNumber) => ({
  type: SET_TOP_RATED_TV_SHOWS_PAGE_REDUCER,
  page: pageNumber,
});
export const getTopRatedTvShowsTotalPages = () => ({
  type: GET_TOP_RATED_TV_SHOWS_TOTAL_PAGES_REDUCER,
});

export const setTopRatedTvShowsTotalPages = (totalPages) => ({
  type: SET_TOP_RATED_TV_SHOWS_TOTAL_PAGES_REDUCER,
  totalPages,
});

export const getTopRatedTvShowsError = () => ({
  type: GET_TOP_RATED_TV_SHOWS_ERROR_REDUCER,
});

export const setTopRatedTvShowsError = (error) => ({
  type: SET_TOP_RATED_TV_SHOWS_ERROR_REDUCER,
  error,
});

/* 
    On Aired Tv Shows
*/

export const getOnAiredTvShows = () => ({ type: GET_ON_AIRED_TV_SHOWS });

export const setOnAiredTvShows = (data) => ({
  type: SET_ON_AIRED_TV_SHOWS_REDUCER,
  data: data,
});

export const getOnAiredTvShowsPage = () => ({
  type: GET_ON_AIRED_TV_SHOWS_PAGE_REDUCER,
});

export const setOnAiredTvShowsPage = (pageNumber) => ({
  type: SET_ON_AIRED_TV_SHOWS_PAGE_REDUCER,
  page: pageNumber,
});

export const getOnAiredTvShowsTotalPages = () => ({
  type: GET_ON_AIRED_TV_SHOWS_TOTAL_PAGES_REDUCER,
});

export const setOnAiredTvShowsTotalPages = (totalPages) => ({
  type: SET_ON_AIRED_TV_SHOWS_TOTAL_PAGES_REDUCER,
  totalPages,
});

export const getOnAiredTvShowsError = () => ({
  type: GET_ON_AIRED_TV_SHOWS_ERROR_REDUCER,
});

export const setOnAiredTvShowsError = (error) => ({
  type: SET_ON_AIRED_TV_SHOWS_ERROR_REDUCER,
  error,
});

/* 
    Airing Today
*/

export const getAiringTodayTvShows = () => ({
  type: GET_AIRING_TODAY_TV_SHOWS,
});

export const setAiringTodayTvShows = (data) => ({
  type: SET_AIRING_TODAY_TV_SHOWS_REDUCER,
  data: data,
});

export const getAiringTodayTvShowsPage = () => ({
  type: GET_AIRING_TODAY_TV_SHOWS_PAGE_REDUCER,
});

export const setAiringTodayTvShowsPage = (pageNumber) => ({
  type: SET_AIRING_TODAY_TV_SHOWS_PAGE_REDUCER,
  page: pageNumber,
});

export const getAiringTodayTvShowsTotalPages = () => ({
  type: GET_AIRING_TODAY_TV_SHOWS_TOTAL_PAGES_REDUCER,
});

export const setAiringTodayTvShowsTotalPages = (totalPages) => ({
  type: SET_AIRING_TODAY_TV_SHOWS_TOTAL_PAGES_REDUCER,
  totalPages,
});

export const getAiringTodayTvShowsError = () => ({
  type: GET_AIRING_TODAY_TV_SHOWS_ERROR_REDUCER,
});

export const setAiringTodayTvShowsError = (error) => ({
  type: SET_AIRING_TODAY_TV_SHOWS_ERROR_REDUCER,
  error,
});
