import React, { useEffect, useState } from 'react';
import CustomerList from './CustomerList';
import EventList from './EventList';

const HomeComponent = () => {
 
  return (
    <div>
        <EventList/>
        {/* <CustomerList /> */}
      </div>
  );
};

export default HomeComponent;
