import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MovieShow from "./MovieShow.js";
import MoviesList from "./MoviesList.js";

function MoviesPage({ movies }) {
  const match = useRouteMatch();
  console.log(movies);

  return (
    <div>
      <MoviesList movies={movies} />

      <Route exact path={match.url}>
        <h3>Choose a movie from the list above</h3>
      </Route>

      <Route path={`${match.url}/:movieId`}>
        <MovieShow movies={movies} />
      </Route>
    </div>
  );
}

export default MoviesPage;
