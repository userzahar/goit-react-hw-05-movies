import { getProductById } from "apiService/apiService";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
const IMAGE_NONE = "https://via.placeholder.com/200x300";
const IMAGE_DEFAULT = "https://image.tmdb.org/t/p/w200";
export const MovieDetails = () => {
    const [movie, setMovie] = useState({});
    const { id } = useParams();
    useEffect(() => {
        getProductById(id)
            .then(refs => {
                setMovie(refs.data)
            })
        .catch(er => console.log(er));
    }, [])
  return (
      <>
          <NavLink to='/'>{`<-`}go Back</NavLink>
          <img src={movie.poster_path ? (IMAGE_DEFAULT+movie.poster_path) : IMAGE_NONE } alt="" />
      <section>
        <h1>
            {movie.title}
        </h1>
        <p>
          User score: {movie.vote_average}
              </p>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <p>{movie?.genres?.map(gen => {
        return gen.name;
    }).join(' ')}</p>
          </section>
          <section>
              <p>Additional information</p>
              <ul>
                <li><NavLink>Cast</NavLink></li>
                <li><NavLink>Reviews</NavLink></li>
              </ul>
          </section>
    </>
  );
};