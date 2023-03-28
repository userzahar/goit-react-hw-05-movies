import { NavLink } from "react-router-dom"

export function MovieList({ movies }) {
    console.log("🚀 ~ movies:", movies)
    return <ul>
        {movies.map(movie => <li key={movie.id}>
            <NavLink to={`movies/${movie.id}`}>
            {movie.title}
        </NavLink>
        </li>)}
    </ul>
}