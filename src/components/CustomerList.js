import React, { useEffect, useState } from 'react';
import { getAllBooking, getCustomerById } from '../services/customerService';

const CustomerList = () => {
  const [customers, setCustomers] = useState(null);
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const customerData = await getCustomerById();
        const bookingData = await getAllBooking();
        console.log('Customer data:', customerData);
        console.log('Booking data:', bookingData);
        setCustomers(customerData);
        setBooking(bookingData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!customers) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Customer List</h1>
      <div>
        <h2>Customer Details</h2>
        <p>{customers.firstName} {customers.lastName}</p>
        <p>{customers.address}</p>
      </div>
      <div>
        <h2>Booking Information</h2>
        {booking.map((bookingItem, index) => (
          <div key={index}>
            <p>Event ID: {bookingItem.eventID}</p>
            <p>Seat ID: {bookingItem.seatID}</p>
            <p>Booking Date: {new Date(bookingItem.bookingDate).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerList;
