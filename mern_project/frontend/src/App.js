// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import AddMovie from './components/AddMovie';
import MovieDetail from './components/MovieDetail';
import UpdateMovie from './components/UpdateMovie';
import DeleteMovie from './components/DeleteMovie';

function App() {
    return (
        <Router>
            <div>
                <header>
                    <h1>Movie Collection</h1>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/add-movie">Add Movie</Link>
                    </nav>
                </header>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add-movie" element={<AddMovie />} />
                    <Route path="/movies/:id" element={<MovieDetail />} />
                    <Route path="/movies/:id/edit" element={<UpdateMovie />} />
                    <Route path="/movies/:id/delete" element={<DeleteMovie />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
