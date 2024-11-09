import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddMovie from './components/AddMovie';
import MovieDetails from './components/MovieDetails';
import MoviesList from './components/MovieList';


import './App.css'; // Assuming you have some basic styles

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add">Add Movie</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<MoviesList />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/add" element={<AddMovie />} />
          {/* You might want to add routes for editing and deleting movies */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;