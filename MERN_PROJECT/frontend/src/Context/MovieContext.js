import { createContext, useReducer } from 'react';

// Create Movies Context
export const MoviesContext = createContext();

// Movies Reducer
const moviesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return { movies: action.payload };
    case 'CREATE_MOVIE':
      return { movies: [action.payload, ...state.movies] };
    case 'DELETE_MOVIE':
      return { 
        movies: state.movies.filter(m => m._id !== action.payload._id) 
      };
    default:
      return state;
  }
};


// Movies Context Provider
export const MoviesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(moviesReducer, { 
    movies: [] // Initialize as an empty array
  });
  
  return (
    <MoviesContext.Provider value={{ ...state, dispatch }}>
      { children }
    </MoviesContext.Provider>
  );
};
