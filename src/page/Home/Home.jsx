import { getPopularMovies } from "apiService/apiService"
import { MovieList } from "components/TrandingList/TrandingList";
import { useEffect, useState } from "react";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    getPopularMovies(page)
        .then(res => {
            console.log("🚀 ~ res:", res)
        setMovies(res.data.results);
      })
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  }, [page]);

  return (
    <main>
      <h2>Tranding today</h2>
      <MovieList movies={movies} />
    </main>
  );
};
// !поставити заглушку isLoading