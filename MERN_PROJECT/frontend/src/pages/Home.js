import { useEffect } from 'react';
import { useMoviesContext } from '../Hooks/useMovieContext';
import MovieDetails from '../Components/MovieDetails';
import MovieForm from '../Components/MovieForm';

const Home = () => {
  const { movies, dispatch } = useMoviesContext();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch('/api/movies');
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: 'SET_MOVIES', payload: json });
      }
    };

    fetchMovies();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="movies">
        {movies && movies.map((movie) => (
          <MovieDetails key={movie._id} movie={movie} />
        ))}
      </div>
      <MovieForm />
    </div>
  );
}

export default Home;
