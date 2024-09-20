// src/utils/errorHandler.js

export const getErrorMessage = (error) => {
    // Extract error message from the error object
    if (error.response && error.response.data && error.response.data.message) {
      return error.response.data.message;
    }
    return 'An unexpected error occurred Please try later ';
  };
  