import { getPopularMovies } from "apiService/apiService"
import { MovieList } from "components/TrandingList/TrandingList";
import { useEffect, useState } from "react";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  console.log("🚀 ~ setPage:", setPage);
  console.log("🚀 ~ isLoading:", isLoading);

  useEffect(() => {
    setIsLoading(true);
    getPopularMovies(page)
        .then(res => {
        setMovies(res.data.results);
      })
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  }, [page]);

  return (
    <>
      <h2>Tranding today</h2>
      <MovieList movies={movies} />
    </>
  );
};