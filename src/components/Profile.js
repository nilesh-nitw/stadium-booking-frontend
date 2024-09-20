import React, { useEffect, useState } from 'react';
import { getCustomerById } from '../services/customerService'; // Import the functions
import '../style/Profile.css'; // Import CSS for styling
import EditCustomer from './EditCustomer'; // Import the EditCustomer component

const Profile = () => {
  const [customer, setCustomer] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const data = await getCustomerById();
        setCustomer(data);
      } catch (error) {
        console.error('Error fetching customer:', error);
      }
    };

    fetchCustomer();
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    // Optionally, refetch customer data to reflect changes
    const fetchCustomer = async () => {
      try {
        const data = await getCustomerById();
        setCustomer(data);
      } catch (error) {
        console.error('Error fetching customer:', error);
      }
    };

    fetchCustomer();
  };

  if (!customer) return <p>Loading...</p>;

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      {isEditing ? (
        <div>
          <EditCustomer 
            customerID={localStorage.getItem('customerId')} 
            onEditComplete={() => setIsEditing(false)} 
            onCancelEdit={handleCancelEdit} // Pass cancel handler
          />
        </div>
      ) : (
        <div className="profile-info">
          <p><strong>First Name:</strong> {customer.firstName}</p>
          <p><strong>Last Name:</strong> {customer.lastName}</p>
          <p><strong>Email:</strong> {customer.email}</p>
          <p><strong>Date of Birth:</strong> {customer.dateOfBirth}</p>
          <p><strong>Phone Number:</strong> {customer.phoneNumber}</p>
          <p><strong>Address:</strong> {customer.address}</p>
          <button onClick={handleEditClick} className="edit-button">Edit</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
