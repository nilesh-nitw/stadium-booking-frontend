import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup';
import CustomerList from './components/CustomerList';
import EditCustomer from './components/EditCustomer';
import Events from './components/Events';

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
          <Route path="/events" element={<Events />} />
          <Route path="/edit-customer/:id" element={<EditCustomer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
