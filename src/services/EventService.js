// src/services/EventService.js

import api, { setAuthHeader } from './api';
import { getErrorMessage } from '../utils/errorHandler';

export const getAllEvents = async () => {
  try {
    setAuthHeader(); // Ensure token is set
    const response = await api.get('/api/v1/event');
    return response.data;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    console.error('Error getting events:', errorMessage);
    throw new Error(errorMessage);
  }
};

// New function to fetch event details by ID
export const getEventById = async (eventId) => {
  try {
    setAuthHeader(); // Ensure token is set
    const response = await api.get(`/api/v1/event/${eventId}`);
    return response.data;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    console.error('Error getting event details:', errorMessage);
    throw new Error(errorMessage);
  }
};
