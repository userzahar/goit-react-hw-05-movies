import { getPopularMovies } from "apiService/apiService"
import { MovieList } from "components/TrandingList/TrandingList";
import { useEffect, useState } from "react";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  console.log("🚀 ~ setPage:", setPage);
  useEffect(() => {
    getPopularMovies(page)
      .then(res => {
        setMovies(res.data.results);
      })
      .catch(error => console.log(error));
  }, [page]);

  return (
    <>
      <h2>Tranding today</h2>
      <MovieList movies={movies} />
    </>
  );
};
export default Home