import api from './api';
import { getErrorMessage } from '../utils/errorHandler';


export const loginService = async (credentials) => {
  try {
    console.log('Sending login request with:', credentials);
    const response = await api.post('/api/v1/auth/authenticate', credentials, {
      headers: { 'Authorization': undefined } // Explicitly remove authorization header
    });
    console.log('response  ', response);
    return response;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    console.error('Login error:', errorMessage);
    throw new Error(errorMessage); // Throw user-friendly error message
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
    const errorMessage = "please check the api";
    console.error('Signup error:', errorMessage);
    throw new Error(errorMessage); // Throw user-friendly error message
  }
};
