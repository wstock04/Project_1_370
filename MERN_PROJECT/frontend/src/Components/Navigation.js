import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <header>
        <div className="container">
          <Link to="/">
            <h1>Movie Tracker</h1>
            <p>Please refresh after deleting record for it to take place.</p>
          </Link>
        </div>
      </header>
    );
}

export default Navbar;
