import { accessToken, baseURL, apiKey } from "../../app.constants";
import axios from "axios";

const addInterceptorsInClient = () => {
  const client = axios.create({
    baseURL: baseURL,
  });

  client.interceptors.request.use((config) => {
    const nextConfig = config;
    nextConfig.headers.Authorization = accessToken;
    return nextConfig;
  });

  return client;
};

/* 
  Movies and TV show API's
*/

export const getPopularMoviesOrTVShow = async (categoryType, page) => {
  const axiosClient = addInterceptorsInClient();
  const url = `/${categoryType}/popular?api_key=${apiKey}&language=en-US&page=${page}`;
  const response = await axiosClient
    .request({
      method: "GET",
      url: url,
    })
    .catch((e) => e);
  return response;
};

export const getTopRatedMoviesOrTVShow = async (categoryType, page) => {
  const axiosClient = addInterceptorsInClient();
  const url = `/${categoryType}/top_rated?api_key=${apiKey}&language=en-US&page=${page}`;
  const response = await axiosClient
    .request({
      method: "GET",
      url: url,
    })
    .catch((e) => e);
  return response;
};

/**
 * Movies API's
 */
export const getNowPlaying = async (page) => {
  const axiosClient = addInterceptorsInClient();
  const url = `/movie/now_playing?api_key=${apiKey}&language=en-US&page=${page}`;
  const response = await axiosClient
    .request({
      method: "GET",
      url: url,
    })
    .catch((e) => e);
  return response;
};

export const getUpcomingMovies = async (page) => {
  const axiosClient = addInterceptorsInClient();
  const url = `/movie/upcoming?api_key=${apiKey}&language=en-US&page=${page}`;
  const response = await axiosClient
    .request({
      method: "GET",
      url: url,
    })
    .catch((e) => e);
  return response;
};

/* 
  TV Show API's
*/

export const getOnAiredTvShows = async (page) => {
  const axiosClient = addInterceptorsInClient();
  const url = `/tv/on_the_air?api_key=${apiKey}&language=en-US&page=${page}`;
  const response = await axiosClient
    .request({
      method: "GET",
      url: url,
    })
    .catch((e) => e);
  return response;
};

export const getAiringTodayTvShows = async (page) => {
  const axiosClient = addInterceptorsInClient();
  const url = `/tv/airing_today?api_key=${apiKey}&language=en-US&page=${page}`;
  const response = await axiosClient
    .request({
      method: "GET",
      url: url,
    })
    .catch((e) => e);
  return response;
};

export const getPopularPeople = async (page) => {
  const axiosClient = addInterceptorsInClient();
  const url = `/person/popular?api_key=${apiKey}&language=en-US&page=${page}`;
  const response = await axiosClient
    .request({
      method: "GET",
      url: url,
    })
    .catch((e) => e);
  return response;
};

export const getTrendingMovieOrTvShows = async (timeWindow, page) => {
  const axiosClient = addInterceptorsInClient();
  const url = `/trending/all/${timeWindow}?api_key=${apiKey}&language=en-US&page=${page}`;
  const response = await axiosClient
    .request({
      method: "GET",
      url: url,
    })
    .catch((e) => e);
  return response;
};

export const getSearchMoviesTvShowsPeople = async (query, page) => {
  const axiosClient = addInterceptorsInClient();
  const url = `/search/multi?api_key=${apiKey}&language=en-US&query=${query}&page=${page}&include_adult=false`;
  const response = await axiosClient
    .request({
      method: "GET",
      url: url,
    })
    .catch((e) => e);
  return response;
};

export const getMovieDetails = async (movieId) => {
  const axiosClient = addInterceptorsInClient();
  const url = `/movie/${movieId}?api_key=${apiKey}&language=en-US`;
  const response = await axiosClient
    .request({
      method: "GET",
      url: url,
    })
    .catch((e) => e);
  return response;
};

export const getTvShowDetails = async (tvId) => {
  const axiosClient = addInterceptorsInClient();
  const url = `/tv/${tvId}?api_key=${apiKey}&language=en-US`;
  const response = await axiosClient
    .request({
      method: "GET",
      url: url,
    })
    .catch((e) => e);
  return response;
};

export const getReviewsOfMoviesOrTvShows = async (tag, titleId, page) => {
  const axiosClient = addInterceptorsInClient();
  const url = `/${tag}/${titleId}/reviews?api_key=${apiKey}&language=en-US&page=${page}`;
  const response = await axiosClient
    .request({
      method: "GET",
      url: url,
    })
    .catch((e) => e);
  return response;
};

export const getPeopleDetails = async (id) => {
  const axiosClient = addInterceptorsInClient();
  const url = `/person/${id}?api_key=${apiKey}&language=en-US`;
  const response = await axiosClient
    .request({
      method: "GET",
      url: url,
    })
    .catch((e) => e);
  return response;
};
