import { NavLink, useLocation } from "react-router-dom"

export function MovieList({ movies}) {
    console.log("🚀 ~ movies:", movies)
    const location = useLocation();
    let url = 'movies/';
    console.log("💚 ~ location:", location)
    if (location.pathname === "/movies") {
    url= ''
}
    
    return <ul>
        {movies.map(movie => <li key={movie.id}>
            <NavLink to={`${url}${movie.id}`} state={{ from:location}}>
            {movie.title}
        </NavLink>
        </li>)}
    </ul>
}