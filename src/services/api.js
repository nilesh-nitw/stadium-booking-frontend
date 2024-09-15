// src/services/api.js

import axios from 'axios';
import { jwtDecode } from "jwt-decode";

const api = axios.create({
  baseURL: 'http://localhost:8080', // Base URL without /api
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to set the authorization header (optional for login/signup)
export const setAuthHeader = () => {
  const token = localStorage.getItem('authToken');
  console.log('token to set ',token);
  if (token) {
    const decodedToken = jwtDecode(token);
    console.log('decodedToken ',decodedToken);
    const userId = localStorage.getItem('customerId'); // Replace with the correct key based on your token structure
    console.log("User ID:", userId);
  }
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};


export default api;
