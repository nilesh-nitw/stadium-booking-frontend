import React, { useState } from 'react';
import { editCustomer } from '../services/customerService';
import { useNavigate } from 'react-router-dom'; 
import '../style/EditCustomer.css'; 

const EditCustomer = ({ customerID, onEditComplete }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editCustomer({ firstName, lastName });
      alert('Customer updated successfully');
      navigate('/'); 
    } catch (err) {
      setError(err.message);
    }
  };

  const handleCancel = () => {
    navigate('/'); 
  };

  return (
    <div className="edit-customer-container">
      <h1>Edit Customer</h1>
      <form onSubmit={handleSubmit} className="edit-customer-form">
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-buttons">
          <button type="submit" className="submit-button">Update Customer</button>
          <button type="button" onClick={handleCancel} className="cancel-button">Cancel</button>
        </div>
      </form>
      {error && <p className="error-message">Error: {error}</p>}
    </div>
  );
};

export default EditCustomer;
