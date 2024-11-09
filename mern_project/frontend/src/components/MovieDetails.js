import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/movies/${id}`)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.error('Error fetching movie:', error);
      });
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h1>{movie.name}</h1>
      <p>Genre: {movie.genre}</p>
      <p>Release Date: {new Date(movie.releaseDate).toDateString()}</p>
      <p>Rating: {movie.rating}</p>
      <p>Duration: {movie.duration} minutes</p>
    </div>
  );
}

export default MovieDetails;