import { getProductById } from "apiService/apiService";
import { useRef } from "react";
import { useEffect } from "react";

import { useState } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
const IMAGE_NONE = "https://via.placeholder.com/200x300";
const IMAGE_DEFAULT = "https://image.tmdb.org/t/p/w200";
export const MovieDetails = () => {
    const [movie, setMovie] = useState({});
    const { id } = useParams();
    const location = useLocation();
    const backLinkLocation = useRef(location.state?.from.pathname ?? '/')
    console.log("🚀 ~ location.state?.from.pathname:", location.state?.from.pathname)
    console.log("🚀 ~ backLinkLocation:", backLinkLocation)
    useEffect(() => {
        getProductById(id)
            .then(refs => {
                console.log("🔻🔹 ~ refs:", refs)
                
                setMovie(refs.data)
            })
        .catch(er => console.log(er));
    }, [id])

  return (
      <>
          <NavLink to={backLinkLocation.current}>{`<-`}go Back</NavLink>
          <img src={movie.poster_path ? (IMAGE_DEFAULT+movie.poster_path) : IMAGE_NONE } alt="" />
      <section>
        <h1>
            {movie.title}
        </h1>
        <p>
          User score: {Math.round(movie.vote_average)*10}%
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
                <li><NavLink to="cast" state={{ from:location}}>Cast</NavLink></li>
                <li><NavLink to='reviews' state={{ from:location}}>Reviews</NavLink></li>
              </ul>
             <Outlet />
          </section>
    </>
  );
};