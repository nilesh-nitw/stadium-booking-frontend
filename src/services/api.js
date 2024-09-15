// src/services/api.js

import axios from 'axios';

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
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};


export default api;
