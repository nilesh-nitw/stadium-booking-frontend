import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllEvents } from '../services/EventService';
import '../style/Event.css';
import Spinner from './Spinner';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventList = await getAllEvents();
        setEvents(eventList);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  const handleEventClick = (eventId) => {
    navigate(`/event/${eventId}`); // Navigate to event details page
  };

  // Function to dynamically choose images based on event title or other logic
  const getDynamicImage = (eventTitle) => {
    const defaultImages = [
      'https://img.freepik.com/free-photo/sports-stadium_1308-4848.jpg',
      'https://img.freepik.com/free-photo/green-grass-sport-field-with-blue-sky_1150-12144.jpg',
      'https://img.freepik.com/free-photo/green-grass-sport-field-with-blue-sky_1150-12144.jpg'
    ];

    // Randomly choose an image or assign based on eventTitle (simple logic)
    const randomIndex = eventTitle.length % defaultImages.length;
    return defaultImages[randomIndex];
  };

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!events.length) {
    return <Spinner />;
  }

  return (
    <div className="event-list-container">
      <h2>Booking Available</h2>
      {events.map((event, index) => (
        <div className="event-card" key={index}>
          <img 
            src={getDynamicImage(event.eventTitle)}
            alt="Ground"
            className="ground-image"
          />
          <div className="event-content">
            <h3>{event.eventTitle}</h3>
            <p><strong>Location:</strong> Hyderabad</p>
            <p><strong>Offer:</strong> {event.offer || "No offers available"}</p>
            <p><strong>Features:</strong></p>
            <div className="features">
              <span>Pavilion</span>
              <span>Flood Lights</span>
              <span>Washroom</span>
            </div>
            <div className="event-action">
              <span className="slots-left">{event.availableSeats} slots left</span>
              <button onClick={() => handleEventClick(event.eventID)}>View Slots</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventList;
