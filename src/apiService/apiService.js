import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
// search / movie;
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
