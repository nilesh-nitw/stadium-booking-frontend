import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style/Header.css'; // Import CSS for styling

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
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <h1>Stadium Booking</h1>
        </div>
        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about-us" className="nav-link">About Us</Link></li>
          {!isLoggedIn ? (
            <>
              <li><Link to="/login" className="nav-link">Login</Link></li>
              <li><Link to="/signup" className="nav-link">Sign Up</Link></li>
            </>
          ) : (
            <li className="nav-link" onClick={handleLogout}>Logout</li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
