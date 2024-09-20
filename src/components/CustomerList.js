import React, { useEffect, useState } from 'react';
import { getAllBooking, getCustomerById } from '../services/customerService';
import { getAllEvents } from '../services/EventService';
 import '../style/CustomerList.css';
 import Spinner from './Spinner';

const CustomerList = () => {
  const [customers, setCustomers] = useState(null);
  const [booking, setBooking] = useState([]);
  const [event, setEvent] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const customerData = await getCustomerById();
        const bookingData = await getAllBooking();
        const events= await (getAllEvents());
        setCustomers(customerData);
        setBooking(bookingData);
        setEvent(events);
        console.log('events ',events);
      } catch (error) {
        setError(error.message); // Use the error message from the service
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!customers) {
    return <Spinner />; 
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
