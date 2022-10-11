import {
  GET_POPULAR_PEOPLE,
  GET_POPULAR_PEOPLE_ERROR_REDUCER,
  GET_POPULAR_PEOPLE_PAGE_REDUCER,
  GET_POPULAR_PEOPLE_TOTAL_PAGES_REDUCER,
  SET_POPULAR_PEOPLE_ERROR_REDUCER,
  SET_POPULAR_PEOPLE_PAGE_REDUCER,
  SET_POPULAR_PEOPLE_REDUCER,
  SET_POPULAR_PEOPLE_TOTAL_PAGES_REDUCER,
} from "../action-types/action-types";

export const getPopularPeople = () => ({ type: GET_POPULAR_PEOPLE });

export const setPopularPeople = (data) => ({
  type: SET_POPULAR_PEOPLE_REDUCER,
  data: data,
});

export const getPopularPeoplePage = () => ({
  type: GET_POPULAR_PEOPLE_PAGE_REDUCER,
});

export const setPopularPeoplePage = (pageNumber) => ({
  type: SET_POPULAR_PEOPLE_PAGE_REDUCER,
  page: pageNumber,
});

export const getPopularPeopleTotalPages = () => ({
  type: GET_POPULAR_PEOPLE_TOTAL_PAGES_REDUCER,
});

export const setPopularPeopleTotalPages = (totalPages) => ({
  type: SET_POPULAR_PEOPLE_TOTAL_PAGES_REDUCER,
  totalPages,
});

export const getPopularPeopleError = () => ({
  type: GET_POPULAR_PEOPLE_ERROR_REDUCER,
});

export const setPopularPeopleError = (error) => ({
  type: SET_POPULAR_PEOPLE_ERROR_REDUCER,
  error,
});
