import React from 'react';
import '../style/AboutUs.css'; // Import CSS for styling

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <header className="about-us-header">
        <h1>About Us</h1>
        <p>Your premier destination for stadium booking and event management!</p>
      </header>
      
      <section className="about-us-section">
        <h2>Our Stadium</h2>
        <p>
          Welcome to My Stadium, the ultimate venue for sports and entertainment. Our state-of-the-art stadium offers a world-class experience for every event. Whether you’re looking to book a seat for an exhilarating match or organize a large-scale event, we provide top-notch facilities and services to meet your needs.
        </p>
        {/* <img src="https://www.pexels.com/photo/green-football-field-399187/" alt="Stadium" className="about-us-image" /> */}
      </section>
      
      <section className="about-us-section">
        <h2>Our Services</h2>
        <ul>
          <li>Seat Booking: Reserve your spot for various events and games.</li>
          <li>Event Management: Organize and manage your events seamlessly.</li>
          <li>Customer Support: Dedicated support to assist you with any inquiries.</li>
        </ul>
      </section>
      
      <section className="about-us-section">
        <h2>Contact Us</h2>
        <p>
          <strong>Address:</strong> 123 Stadium Road, Sports City, SC 45678<br />
          <strong>Phone:</strong> +1 (123) 456-7890<br />
          <strong>Email:</strong> <a href="mailto:support@stadiumbooking.com">support@stadiumbooking.com</a>
        </p>
      </section>
      
      <section className="about-us-section">
        <h2>Follow Us</h2>
        <p>
          Stay updated with the latest news and events by following us on social media:
        </p>
        <ul className="social-links">
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;
