import {
  GET_TRENDING_TODAY,
  GET_TRENDING_TODAY_ERROR_REDUCER,
  GET_TRENDING_TODAY_PAGE_REDUCER,
  GET_TRENDING_TODAY_TOTAL_PAGES_REDUCER,
  SET_TRENDING_TODAY_ERROR_REDUCER,
  SET_TRENDING_TODAY_PAGE_REDUCER,
  SET_TRENDING_TODAY_REDUCER,
  SET_TRENDING_TODAY_TOTAL_PAGES_REDUCER,
  GET_TRENDING_WEEK,
  GET_TRENDING_WEEK_ERROR_REDUCER,
  GET_TRENDING_WEEK_PAGE_REDUCER,
  GET_TRENDING_WEEK_TOTAL_PAGES_REDUCER,
  SET_TRENDING_WEEK_ERROR_REDUCER,
  SET_TRENDING_WEEK_PAGE_REDUCER,
  SET_TRENDING_WEEK_REDUCER,
  SET_TRENDING_WEEK_TOTAL_PAGES_REDUCER,
} from "../action-types/action-types";

/* 
    TODAY
*/
export const getTrendingToday = () => ({ type: GET_TRENDING_TODAY });

export const setTrendingToday = (data) => ({
  type: SET_TRENDING_TODAY_REDUCER,
  data: data,
});

export const getTrendingTodayPage = () => ({
  type: GET_TRENDING_TODAY_PAGE_REDUCER,
});

export const setTrendingTodayPage = (pageNumber) => ({
  type: SET_TRENDING_TODAY_PAGE_REDUCER,
  page: pageNumber,
});

export const getTrendingTodayTotalPages = () => ({
  type: GET_TRENDING_TODAY_TOTAL_PAGES_REDUCER,
});

export const setTrendingTodayTotalPages = (totalPages) => ({
  type: SET_TRENDING_TODAY_TOTAL_PAGES_REDUCER,
  totalPages,
});

export const getTrendingTodayError = () => ({
  type: GET_TRENDING_TODAY_ERROR_REDUCER,
});

export const setTrendingTodayError = (error) => ({
  type: SET_TRENDING_TODAY_ERROR_REDUCER,
  error,
});

/* 
    WEEK
*/

export const getTrendingWeek = () => ({ type: GET_TRENDING_WEEK });

export const setTrendingWeek = (data) => ({
  type: SET_TRENDING_WEEK_REDUCER,
  data: data,
});

export const getTrendingWeekPage = () => ({
  type: GET_TRENDING_WEEK_PAGE_REDUCER,
});

export const setTrendingWeekPage = (pageNumber) => ({
  type: SET_TRENDING_WEEK_PAGE_REDUCER,
  page: pageNumber,
});

export const getTrendingWeekTotalPages = () => ({
  type: GET_TRENDING_WEEK_TOTAL_PAGES_REDUCER,
});

export const setTrendingWeekTotalPages = (totalPages) => ({
  type: SET_TRENDING_WEEK_TOTAL_PAGES_REDUCER,
  totalPages,
});

export const getTrendingWeekError = () => ({
  type: GET_TRENDING_WEEK_ERROR_REDUCER,
});

export const setTrendingWeekError = (error) => ({
  type: SET_TRENDING_WEEK_ERROR_REDUCER,
  error,
});
