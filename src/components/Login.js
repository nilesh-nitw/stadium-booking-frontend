import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginService } from '../services/authService'; // Assuming you have a login service
import '../style/Login.css';

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State for storing error message
  const navigate = useNavigate(); // Initialize navigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginService({ email, password });
      const token = response.data.token; // Adjust based on your API response
      localStorage.setItem('authToken', token);
      setIsLoggedIn(true); // Set the login state to true
      navigate('/'); // Redirect to the home page
    } catch (error) {
      setError('Login failed. Please check your credentials and try again.'); // Set error message
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>} {/* Display error message */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            className="input-field"
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
