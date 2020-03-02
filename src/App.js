import React, { Component } from 'react';
import Navbar from './NavBar';
import AppointmentBooking from './AppointmentBooking';
import TargetCustomer from './TargetCustomer';
import DenstistInfo from './DenstistInfo';
import WorldRepresentation from './WorldRepresentation';
import TotalAchievements from './TotalAchievements';
import OtherDentists from './OtherDentists';
import Footer from './Footer';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Navbar />
        <AppointmentBooking />
        <TargetCustomer />
        <DenstistInfo />
        <WorldRepresentation />
        <TotalAchievements />
        <OtherDentists />
        <Footer />
      </div>
    );
  }
}

export default App;
