import { getProductById } from "apiService/apiService";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";

export const MovieDetails = () => {
    const [movie, setMovie] = useState({});
    const { id } = useParams();
    console.log("💚 ~ id:", id)
    useEffect(() => {
        const product = getProductById(id)
            .then(refs => {
                console.log(refs.data)
                console.log("🚀 ~ product:", refs.data)
                setMovie(refs.data)
                // movie.genres.map(gen => {
                 
            //   })
            })
        .catch(er => console.log(er));
    }, [])
    console.log("💦", movie?.genres?.map(gen => {
        return gen.name;
    }).join());
  return (
      <main>
          <NavLink to='/'>{`<-`}go Back</NavLink>
      <img src="https://via.placeholder.com/960x240" alt="" />
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
    </main>
  );
};