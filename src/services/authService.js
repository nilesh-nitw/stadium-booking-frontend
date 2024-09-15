import api from './api';

export const loginService = async (credentials) => {
  try {
    console.log('Sending login request with:', credentials);
    console.log('api ',api);
    const response = await api.post('/api/v1/auth/authenticate', credentials, {
      headers: { 'Authorization': undefined } // Explicitly remove authorization header
    });
    console.log('response  ', response);
    return response;
  } catch (error) {
    console.error('Login error:', error.response ? error.response.data : error.message);
    throw error;
  }
};


export const signupService = async (userData) => {
  try {
    console.log('Attempting signup with user data:', userData);
    const response = await api.post('/api/v1/auth/register', userData, {
      headers: { 'Authorization': undefined } // Explicitly remove authorization header
    });
    console.log('response  ', response);
    return response;
  } catch (error) {
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error('Signup error response data:', error.response.data);
      console.error('Signup error response status:', error.response.status);
      console.error('Signup error response headers:', error.response.headers);
    } else if (error.request) {
      // No response was received
      console.error('Signup error request:', error.request);
    } else {
      // Something happened in setting up the request
      console.error('Signup error message:', error.message);
    }
    throw error;
  }
};


