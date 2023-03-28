import { getPopularMovies } from "apiService/apiService"
import { TrandingList } from "components/TrandingList/TrandingList";
import { useEffect, useState } from "react";

export const Home = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getPopularMovies(1).then(res => {
            const { results } = res.data;
            setMovies(prev => {
                if(prev===results)
            return [...prev, ...results];
          });
         }).catch(error => console.log(error));
    },[])

    return <main>
        <h2>Tranding today</h2>
        <TrandingList movies={movies} />
    </main>
    // !поставити заглушку isLoading
}