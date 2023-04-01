import { NavLink, useParams } from "react-router-dom"

export function MovieList({ movies, url }) {
    console.log("🚀 ~ movies:", movies)
    // const [lol] = useParams();
    return <ul>
        {movies.map(movie => <li key={movie.id}>
            <NavLink to={`movies/${movie.id}`}>
            {movie.title}
        </NavLink>
        </li>)}
    </ul>
}