import { accessToken, baseURL, apiKey } from "../../app.constants";

const axiosClient = addInterceptorsInClient();

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
  const url = `/${categoryType}/popular?api_key=${apiKey}&language=en-US&page=${page}`;
  const response = await axiosClient
    .request({
      method: "GET",
      url: url,
    })
    .catch((e) => e);
  return response;
};

export const getTopRatedOrTVShow = async (categoryType, page) => {
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
  const url = `/person/popular?api_key=${apiKey}&language=en-US&page=${page}`;
  const response = await axiosClient
    .request({
      method: "GET",
      url: url,
    })
    .catch((e) => e);
  return response;
};
