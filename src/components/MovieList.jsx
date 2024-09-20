import React from "react";
import Movie from "./movie";

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.length > 0 ? (
        movies.map((movie) => <Movie key={movie.id} movie={movie} />)
      ) : (
        <p>Loading Movies</p>
      )}
    </div>
  );
};

export default MovieList;
