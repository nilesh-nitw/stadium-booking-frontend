import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup';
import CustomerList from './components/CustomerList';
import EditCustomer from './components/EditCustomer';
import AboutUs from './components/AboutUs';
import Profile from './components/Profile'; 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token); // Set initial login state
  }, []);

  return (
    <Router>
      <div className="App">
        {/* Pass isLoggedIn and setIsLoggedIn as props */}
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<CustomerList />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/edit-customer/:id" element={<EditCustomer />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
