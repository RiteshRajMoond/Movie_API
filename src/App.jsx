import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from './components/MovieList';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_MOVIE_API_URL);
        setMovies(response.data);

      } catch (error) {
        setError('Error fetching movies');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="App">
      <h1>Movie Database</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default App;