import { getPopularMovies } from "apiService/apiService"
import { TrandingList } from "components/TrandingList/TrandingList";
import { useEffect } from "react";
import { useState } from "react";


export const Home = () => {
    const [movies, setMovies] = useState()
    const trending = getPopularMovies();
    useEffect(()=>{},[])

    return <main>
        <h2>Tranding today</h2>
        <TrandingList movies={trending} />
        </main>
}