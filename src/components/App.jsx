
import { Home } from "page/Home/Home";
import { MovieDetails } from "page/MovieDetails/MovieDetails";
import { Movies } from "page/Movies/Movies";
import { Route, Routes } from "react-router-dom";
import { HeaderStyled, NavLinkStyle } from "./App.styled";
import { Credits } from "./Credits/Credits";
import { Reviews } from "./Reviews/Reviews";

export const App = () => {
  return (
    <div>
      <HeaderStyled>
          <nav>
              <NavLinkStyle to="/" end>
                Home
              </NavLinkStyle>
              <NavLinkStyle to="/movies">
                Movies
              </NavLinkStyle>
          </nav>
      </HeaderStyled>
      <main>
        <Routes>
          <Route path="/"  >
                <Route index element={<Home />} />
                <Route path="*" element={<Home />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/movies/:id" element={<MovieDetails />} >
                        <Route path="cast" element={<Credits/>}/>
                        <Route path="reviews" element={<Reviews/>}/>
                </Route>
          </Route>
        </Routes>
      </main>
    </div>
  );
};


