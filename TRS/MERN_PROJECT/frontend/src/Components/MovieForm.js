import { useState } from 'react';
import { useMoviesContext } from '../Hooks/useMovieContext';

const MovieForm = () => {
  const { dispatch } = useMoviesContext();

  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [rating, setRating] = useState('');
  const [duration, setDuration] = useState('');
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const movie = { title, genre, releaseDate, rating, duration };

    const response = await fetch('/api/movies', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields || []);
    }
    if (response.ok) {
      setEmptyFields([]);
      setError(null);
      setTitle('');
      setGenre('');
      setReleaseDate('');
      setRating('');
      setDuration('');
      dispatch({ type: 'CREATE_MOVIE', payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Movie</h3>

      <label>Movie Title: </label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
        className={emptyFields.includes('title') ? 'error' : ''}
      />

      <label>Genre: </label>
      <input 
        type="text" 
        onChange={(e) => setGenre(e.target.value)} 
        value={genre}
        className={emptyFields.includes('genre') ? 'error' : ''}
      />

      <label>Release Date: </label>
      <input 
        type="date" 
        onChange={(e) => setReleaseDate(e.target.value)} 
        value={releaseDate}
        className={emptyFields.includes('releaseDate') ? 'error' : ''}
      />

      <label>Rating (0-10): </label>
      <input 
        type="number" 
        onChange={(e) => setRating(e.target.value)} 
        value={rating}
        className={emptyFields.includes('rating') ? 'error' : ''}
        min="0"
        max="10"
      />

      <label>Duration (in minutes): </label>
      <input 
        type="number" 
        onChange={(e) => setDuration(e.target.value)} 
        value={duration}
        className={emptyFields.includes('duration') ? 'error' : ''}
      />

    <button className="add-movie-btn">Add Movie</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default MovieForm;
