import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MoviesList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/movies')
      .then(response => {
        setMovies(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  return (
    <div>
      <h1>Movies List</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie._id}>{movie.name} - {movie.genre}</li>
        ))}
      </ul>
    </div>
  );
}

export default MoviesList;