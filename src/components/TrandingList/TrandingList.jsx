import { useEffect } from "react"

export function TrandingList({ movies }) {
console.log("🚀 ~ movies:", movies)

    return <ul>
        {movies.map(movie => <li key={movie.id}>{movie.id}</li>)}
    </ul>
}