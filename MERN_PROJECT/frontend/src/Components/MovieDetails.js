import { useMoviesContext } from '../Hooks/useMovieContext';

const MovieDetails = ({ movie }) => {
  const { dispatch } = useMoviesContext();

  const handleClick = async () => {
    const response = await fetch(`/api/movies/${movie._id}`, {
      method: 'DELETE'
    });
    const json = await response.json();
  
    if (response.ok) {
      dispatch({ type: 'DELETE_MOVIE', payload: json });
    } else {
      console.error('Delete failed:', json.error);
    }
  };
  
  return (
    <div className="movie-details">
      <h1 className="titleRecord">{movie.title}</h1>
      <p><strong>Genre: </strong>{movie.genre}</p>
      <p><strong>Release Date: </strong>{new Date(movie.releaseDate).toLocaleDateString()}</p>
      <p><strong>Rating: </strong>{movie.rating}/10</p>
      <p><strong>Duration: </strong>{movie.duration} min</p>
      <button className="delete-btn" onClick={handleClick}>Delete</button>
    </div>
  );
};

export default MovieDetails;
