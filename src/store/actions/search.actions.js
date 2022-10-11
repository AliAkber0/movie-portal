import {
  CLEAR_SEARCH_RESULT_REDUCER,
  GET_SEARCH,
  GET_SEARCH_RESULT_ERROR_REDUCER,
  GET_SEARCH_RESULT_PAGE_REDUCER,
  GET_SEARCH_RESULT_TOTAL_PAGES_REDUCER,
  SET_SEARCH_RESULT_ERROR_REDUCER,
  SET_SEARCH_RESULT_PAGE_REDUCER,
  SET_SEARCH_RESULT_REDUCER,
  SET_SEARCH_RESULT_TOTAL_PAGES_REDUCER,
} from "../action-types/action-types";

/* 
      TODAY
  */
export const getSearch = (searchValue) => ({ type: GET_SEARCH, searchValue });

export const setSearchResult = (data) => ({
  type: SET_SEARCH_RESULT_REDUCER,
  data: data,
});

export const getSearchResultPage = () => ({
  type: GET_SEARCH_RESULT_PAGE_REDUCER,
});

export const setSearchResultPage = (pageNumber) => ({
  type: SET_SEARCH_RESULT_PAGE_REDUCER,
  page: pageNumber,
});

export const getSearchResultTotalPages = () => ({
  type: GET_SEARCH_RESULT_TOTAL_PAGES_REDUCER,
});

export const setSearchResultTotalPages = (totalPages) => ({
  type: SET_SEARCH_RESULT_TOTAL_PAGES_REDUCER,
  totalPages,
});

export const getSearchResultError = () => ({
  type: GET_SEARCH_RESULT_ERROR_REDUCER,
});

export const setSearchResultError = (error) => ({
  type: SET_SEARCH_RESULT_ERROR_REDUCER,
  error,
});

export const clearSearchResult = () => ({
  type: CLEAR_SEARCH_RESULT_REDUCER,
});
