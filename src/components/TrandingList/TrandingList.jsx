import { Link, useLocation } from "react-router-dom"

export function MovieList({ movies}) {
    const location = useLocation();
    let url = 'movies/';
    if (location.pathname === "/movies") {
    url= ''
}
    return <ul>
        {movies.map(movie => <li key={movie.id}>
            <Link to={`${url}${movie.id}`} state={{ from:location}}>
            {movie.title}
        </Link>
        </li>)}
    </ul>
}