import {
  GET_DETAILS,
  GET_DETAILS_ERROR_REDUCER,
  SET_DETAILS_ERROR_REDUCER,
  SET_DETAILS_REDUCER,
  CLEAR_DETAILS_REDUCER,
  SET_DETAILS_REVIEWS_REDUCER,
  SET_DETAILS_REVIEWS_PAGE_REDUCER,
  GET_DETAILS_REVIEWS_PAGE_REDUCER,
  GET_DETAILS_REVIEWS_TOTAL_PAGES_REDUCER,
  SET_DETAILS_REVIEWS_TOTAL_PAGES_REDUCER,
  GET_DETAILS_REVIEWS_ERROR_REDUCER,
  GET_DETAILS_REVIEWS,
} from "../action-types/action-types";

export const getDetails = (titleId, tag) => ({
  type: GET_DETAILS,
  titleId,
  tag,
});

export const setDetails = (data) => ({
  type: SET_DETAILS_REDUCER,
  data: data,
});

export const getDetailsError = () => ({
  type: GET_DETAILS_ERROR_REDUCER,
});

export const setDetailsError = (error) => ({
  type: SET_DETAILS_ERROR_REDUCER,
  error,
});

export const getDetailsReviews = (titleId, tag) => ({
  type: GET_DETAILS_REVIEWS,
  titleId,
  tag,
});

export const setDetailsReviews = (reviews) => ({
  type: SET_DETAILS_REVIEWS_REDUCER,
  reviews,
});

export const getDetailsReviewsPage = () => ({
  type: GET_DETAILS_REVIEWS_PAGE_REDUCER,
});

export const setDetailsReviewsPage = (page) => ({
  type: SET_DETAILS_REVIEWS_PAGE_REDUCER,
  reviewsPage: page,
});

export const getDetailsReviewsTotalPage = () => ({
  type: GET_DETAILS_REVIEWS_TOTAL_PAGES_REDUCER,
});

export const setDetailsReviewsTotalPage = (totalpage) => ({
  type: SET_DETAILS_REVIEWS_TOTAL_PAGES_REDUCER,
  reviewsTotalPage: totalpage,
});

export const getDetailsReviewsError = () => ({
  type: GET_DETAILS_REVIEWS_ERROR_REDUCER,
});

export const setDetailsReviewsError = (reviewsError) => ({
  type: SET_DETAILS_REVIEWS_REDUCER,
  reviewsError,
});

export const clearDetails = () => ({
  type: CLEAR_DETAILS_REDUCER,
});
