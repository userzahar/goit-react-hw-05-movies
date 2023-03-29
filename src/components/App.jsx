import { getSearchMovies } from "apiService/apiService";
import { Home } from "page/Home/Home";
import { MovieDetails } from "page/MovieDetails/MovieDetails";
import { Movies } from "page/Movies/Movies";
import { NavLink, Route, Routes } from "react-router-dom";
import { Credits } from "./Credits/Credits";
import { Reviews } from "./Reviews/Reviews";

export const App = () => {
  return (
    <div>
      <header>
          <nav>
              <NavLink to="/" end>
                Home
              </NavLink>
              <NavLink to="/movies">
                Movies
              </NavLink>
          </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />} >
                  <Route path="cast" element={<Credits/>}/>
                  <Route path="reviews" element={<Reviews/>}/>
          </Route>
        </Routes>
      </main>
      <button onClick={() => getSearchMovies("cat",1)}>Search</button>
    </div>
  );
};


