import { getSearchMovies, getPopularMovies } from "apiService/apiService";
import { Home } from "page/Home/Home";
import { Movies } from "page/Movies/Movies";
import { NavLink, Route, Routes } from "react-router-dom";

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>

      <button onClick={() => getSearchMovies("cat")}>Search</button>
      <button onClick={()=>getPopularMovies("cat")}>Popularity</button>
    </div>
  );
};
