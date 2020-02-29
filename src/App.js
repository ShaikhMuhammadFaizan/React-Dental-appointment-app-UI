import React, { Component } from 'react';
import Navbar from './NavBar';
import AppointmentBooking from './AppointmentBooking';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Navbar />
        <AppointmentBooking />
      </div>
    );
  }
}

export default App;
