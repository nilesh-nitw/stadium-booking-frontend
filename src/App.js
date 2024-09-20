import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup';
import EditCustomer from './components/EditCustomer';
import AboutUs from './components/AboutUs';
import Profile from './components/Profile'; 
import HomeComponent from './components/HomeComponent';
import EventDetails from './components/EventDetails';
import Footer from './components/Footer'; 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token); // Set initial login state
  }, []);

  return (
    <Router>
      <div className="App">
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<HomeComponent />} />
          <Route path="/event/:eventId" element={<EventDetails />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/edit-customer/:id" element={<EditCustomer />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
