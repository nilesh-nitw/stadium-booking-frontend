// src/services/customerService.js

import api, { setAuthHeader } from './api';
import { getErrorMessage } from '../utils/errorHandler';
export const getAllCustomers = async () => {
  try {
    setAuthHeader(); // Ensure token is set
    const response = await api.get('/api/v1/customer');
    return response.data;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    console.error('Error getting customers:', errorMessage);
    throw new Error(errorMessage); // Or use a custom error handling strategy
  }
};

export const getCustomerById = async () => {
  try {
    setAuthHeader(); // Ensure token is set
    const customerID = localStorage.getItem('customerId');
    const response = await api.get(`/api/v1/customer/${customerID}`);
    return response.data;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    console.error('Error getting customer by ID:', errorMessage);
    throw new Error(errorMessage);
  }
};

export const editCustomer = async (data) => {
  try {
    setAuthHeader(); // Ensure token is set
    const customerID = localStorage.getItem('customerId');
    const response = await api.put(`/api/v1/customer/${customerID}`, data);
    return response.data;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    console.error('Error editing customer:', errorMessage);
    throw new Error(errorMessage);
  }
};

export const deleteCustomer = async (customerID) => {
  try {
    setAuthHeader(); // Ensure token is set
    await api.delete(`/api/v1/customer/${customerID}`);
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    console.error('Error deleting customer:', errorMessage);
    throw new Error(errorMessage);
  }
};

export const getAllBooking = async () => {
  try {
    setAuthHeader(); // Ensure token is set
    const response = await api.get('/api/v1/booking');
    return response.data;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    console.error('Error getting bookings:', errorMessage);
    throw new Error(errorMessage);
  }
};
