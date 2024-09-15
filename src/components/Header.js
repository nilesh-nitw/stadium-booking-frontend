import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'; // Optional: CSS for styling

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any authentication tokens or session data
    localStorage.removeItem('authToken');
    setIsLoggedIn(false); // Update state
    console.log("Logged out");
    // Redirect to login after logging out
    navigate('/login');
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <h1>Stadium Booking</h1>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/events">Events</Link></li>
          {!isLoggedIn ? (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </>
          ) : (
            <li onClick={handleLogout} style={{ cursor: 'pointer' }}>Logout</li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
