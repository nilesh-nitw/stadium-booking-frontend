// src/components/EditCustomer.js

import React, { useState } from 'react';
import { editCustomer } from '../services/customerService';

const EditCustomer = ({ customerID }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const customerID = localStorage.getItem('customerId');
      console.log('customerID  ----',customerID);
      await editCustomer( { firstName, lastName });
      alert('Customer updated successfully');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Edit Customer</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <button type="submit">Update Customer</button>
      </form>
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default EditCustomer;
