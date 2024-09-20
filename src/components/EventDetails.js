import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEventById } from '../services/EventService';
import '../style/EventDetails.css';
import Spinner from './Spinner';

const EventDetails = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [error, setError] = useState('');
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventDetails = await getEventById(eventId);
        setEvent(eventDetails);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, [eventId]);

  const handleBookingClick = (seatIndex) => {
    // Navigate to the booking page or handle booking logic
    // For example: navigate(`/booking/${eventId}/${seatIndex}`);
    alert(`Booking seat ${seatIndex} for event ${eventId}`);
  };

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!event) {
    return <Spinner />;
  }

  const renderSeats = (availableSeats, totalSeats) => {
    const seats = [];
    for (let i = 0; i < totalSeats; i++) {
      seats.push(
        <div
          key={i}
          className={`seat-box ${i < availableSeats ? 'available' : 'booked'}`}
          onClick={() => i < availableSeats && handleBookingClick(i)} // Handle booking if seat is available
        >
          {i < availableSeats ? '' : ''}
        </div>
      );
    }
    return seats;
  };

  return (
    <div className="event-details-container">
      <h2>Event Details</h2>
      <p><span>Event ID:</span> {event.eventID}</p>
      <p><span>Seat ID:</span> {event.eventTime}</p>
      <p><span>Booking Date:</span> {event.eventDate}</p>
      <p><span>Event Title:</span> {event.eventTitle}</p>
      <p><span>Available Seats:</span> {event.availableSeats}</p>
      <p><span>Total Seats:</span> {event.totalSeats}</p>

      {/* Public ground image */}
      <img 
        src="https://img.freepik.com/free-photo/sports-stadium_1308-4848.jpg?t=st=1726554820~exp=1726555420~hmac=0e4b7387de0ec2f7de40fc9ae41920d6ac8efc67a02eddcf2872a7f99cfc6b89"
        alt="Public Ground"
        className="ground-image-details"
      />

      {/* Seat boxes */}
      <div className="seat-container-details">
        {renderSeats(event.availableSeats, event.totalSeats)}
      </div>
    </div>
  );
};

export default EventDetails;
