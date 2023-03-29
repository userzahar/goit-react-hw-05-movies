import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';               
const API_KEY = 'e0d0bd95ab125cae27be5d0523c1004f';

export function getSearchMovies(search, page) {
  return axios('search/movie', {
    params: {
      api_key: API_KEY,
      page,
      query: search,
    },
  });
}

export function getPopularMovies(page) {
  return axios('trending/movie/day', {
    params: {
      api_key: API_KEY,
      page,
    },
  });
}

export const getProductById = movieId => {
  return axios(`movie/${movieId}`, {
    params: {
      api_key: API_KEY,
    },
  });
};
// https://api.themoviedb.org/3/movie/{movie_id}/
// credits?api_key=<<api_key>>&language=en-US
export const getCast = movieId => {
  return axios(`movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
}
// /movie/{movie_id}/reviews
export const getReviews = movieId => {
  console.log("🚀 ~ movieId:", movieId)
  return axios(`movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
}