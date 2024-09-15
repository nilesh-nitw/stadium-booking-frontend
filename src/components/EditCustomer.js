import React, { useState } from 'react';
import { editCustomer } from '../services/customerService';

const EditCustomer = ({ customerID, onEditComplete }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editCustomer({ firstName, lastName });
      alert('Customer updated successfully');
      onEditComplete(); // Notify the parent component to refresh or exit edit mode
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
            required
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update Customer</button>
      </form>
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default EditCustomer;
