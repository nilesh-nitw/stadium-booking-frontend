import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080', // Replace with your backend base URL
});

// Add a request interceptor to include the JWT token, but exclude certain paths
instance.interceptors.request.use(
  (config) => {
    // Exclude the token for public endpoints like signup
    if (!config.url.includes('/api/v1/auth/register') && !config.url.includes('/api/v1/auth/authenticate')) {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
