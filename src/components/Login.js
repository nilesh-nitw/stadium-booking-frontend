import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { loginService } from '../services/authService'; // Import your login function

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize navigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginService({ email, password });
      const token = response.data.token; // Adjust based on your API response
      localStorage.setItem('authToken', token); // Store token in local storage
      setIsLoggedIn(true); // Set the login state to true
      // After successful login, redirect to home
      navigate('/'); // Redirect to the home page
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login error (e.g., show error message to the user)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
