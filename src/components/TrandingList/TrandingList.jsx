
export const TrandingList = (movies) => {
    return <ul>
        {movies.map(movie => <li key={movie.id}>{movie.id}</li>)}
    </ul>
}