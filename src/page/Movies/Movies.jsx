import { getSearchMovies } from "apiService/apiService";
import { MovieList } from "components/TrandingList/TrandingList";
import { useState } from "react";
import { useSearchParams } from "react-router-dom"

export const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';
    const [movies, setMovies] = useState([]);
    const updateQuery = (e) => {
        e.target.value.length !== 0
        ? setSearchParams({ query: e.target.value })
        : setSearchParams({})
    }
    const hendleSubmit = (e) => {
        e.preventDefault();

        getSearchMovies(query).then(res => {
            console.log("🚀 ~ res:", res.data.results)
            setMovies(res.data.results)
        }).catch(er=>console.log(er))
    }
    console.log("🚀 ~ query:", query)
    return <> <form onSubmit={hendleSubmit}> <label><input
        type="text"
        name={query}
        onChange={updateQuery}
        
    />
    </label>
        <button type='submit' >Search</button>
    </form>
    <MovieList movies={movies} /></>
}
