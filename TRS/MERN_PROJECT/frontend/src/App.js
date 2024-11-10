import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './Components/Navigation';
import { MoviesContextProvider } from './Context/MovieContext'; 

function App() {
  return (
    <div className="App">
      <MoviesContextProvider> 
        <BrowserRouter>
          <Navbar />
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </BrowserRouter>
      </MoviesContextProvider>
    </div>
  );
}

export default App;
