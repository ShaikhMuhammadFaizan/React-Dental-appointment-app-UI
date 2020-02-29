import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import './AppointmentBooking.css';

class Appointmentbooking extends Component {
    render() {
        return (
            <div className="header color-white-text">
                <div className="text-left">
                    <p className="heading-text">The Complete</p>
                    <p className="heading-text">Dental Examination</p>
                    <p className="desc-text">A few sentences about your project. How it helps to solve clients problem. It should convinces the cutomers.</p>
                    <div className="row benefit-area d-flex justify-content-between align-items-center text-center">
                        <div className="benefit-box">
                            <p className="sub-heading-text">Benefit No.1 </p>
                            <p className="sub-desc-text">A few sentences about your project. How it helps to solve clients problem.</p>
                        </div>
                        <div className="benefit-box">
                            <p className="sub-heading-text">Benefit No.1 </p>
                            <p className="sub-desc-text">A few sentences about your project. How it helps to solve clients problem.</p>
                        </div>
                    </div>
                </div>
                <div>
                    {/* form area */}
                </div>
            </div>
        );
    }
}

export default Appointmentbooking;
