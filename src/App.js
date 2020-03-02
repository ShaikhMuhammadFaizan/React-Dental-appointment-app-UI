import React, { Component } from 'react';
import Navbar from './NavBar';
import AppointmentBooking from './AppointmentBooking';
import TargetCustomer from './TargetCustomer';
import DenstistInfo from './DenstistInfo';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Navbar />
        <AppointmentBooking />
        <TargetCustomer />
        <DenstistInfo />
      </div>
    );
  }
}

export default App;
