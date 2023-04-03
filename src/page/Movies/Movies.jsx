import { getSearchMovies } from "apiService/apiService";
import { MovieList } from "components/TrandingList/TrandingList";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom"

export const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';
    const [movies, setMovies] = useState([]);
    const hendleSubmit = (e) => {
        e.preventDefault();
        console.dir(e.currentTarget.elements.search.value);
        e.currentTarget.elements.search.value.length !== 0
        ? setSearchParams({ query: e.currentTarget.elements.search.value })
        : setSearchParams({});
        getSearchMovies(query).then(res => {
            console.log("🚀 ~ res:", res.data.results)
            setMovies(res.data.results)
        }).catch(er => console.log(er))
    }
    useEffect(() => {
        if (query !== '') {
            getSearchMovies(query).then(res => {
                console.log("🚀 ~ res:", res.data.results)
                setMovies(res.data.results)
            }).catch(er => console.log(er))
            
        }
    }, [query]);
    return <> <form onSubmit={hendleSubmit}> <label><input
        type="text"
        name='search'
    />
    </label>
        <button type='submit' >Search</button>
    </form>
    <MovieList movies={movies} /></>
}
