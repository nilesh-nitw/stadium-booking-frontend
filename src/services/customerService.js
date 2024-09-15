// src/services/customerService.js

import api, { setAuthHeader } from './api';

// Ensure authorization header is set before making requests
export const getAllCustomers = async () => {
  try {
    setAuthHeader(); // Ensure token is set
    console.log('setAuthHeader();  ',setAuthHeader());
    const response = await api.get('/api/v1/customer');
    console.log('response',response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCustomerById = async (customerID) => {
  try {
    setAuthHeader(); // Ensure token is set
    console.log('setAuthHeader();  ',setAuthHeader());
    const response = await api.get(`/api/v1/customer/${customerID}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const editCustomer = async (customerID, data) => {
  try {
    setAuthHeader(); // Ensure token is set
    const response = await api.put(`/api/v1/customer/${customerID}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteCustomer = async (customerID) => {
  try {
    setAuthHeader(); // Ensure token is set
    await api.delete(`/v1/customer/${customerID}`);
  } catch (error) {
    throw error;
  }
};
