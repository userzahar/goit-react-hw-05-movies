// curl --request GET \
//   --url 'https://api.themoviedb.org/4/list/1' \
//   --header 'Authorization: Bearer <<access_token>>' \
//   --header 'Content-Type: application/json;charset=utf-8'
import axios from 'axios';
const apiKey = 'e0d0bd95ab125cae27be5d0523c1004f';
export async function getSearchMovies(search = '', page = 1) {
  const url = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${apiKey}&page=${page}`;
  try {
    const search = await axios.get(url);
    const onSearch = search.data;
    console.log(onSearch);
  } catch (error) {
    console.log(error.message);
  }
}

export async function getPopularMovies() {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity&include_adult=false&page=1`;
  try {
    const search = await axios.get(url);
    return search.data.results;
  } catch (error) {
    console.log(error.message);
  }
}

// export async function getImages(search, page) {
//   const url = `https://pixabay.com/api/?q=${search}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`;
//   try {
//     const request = await axios.get(url);
//     const response = JSON.parse(request.request.response);
//     const totalHits = response.totalHits;
//     const images = response.hits.map(hit => {
//       return {
//         id: hit.id,
//         src: hit.webformatURL,
//         srcLarge: hit.largeImageURL,
//         alt: hit.tags,
//       };
//     });
//     return { images, totalHits };
//   } catch (error) {
//     console.log(error.message);
//   }
// }
