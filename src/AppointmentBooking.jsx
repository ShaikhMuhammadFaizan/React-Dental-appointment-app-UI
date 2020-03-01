import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faFlask, faTooth } from '@fortawesome/free-solid-svg-icons'

import './AppointmentBooking.css';

class Appointmentbooking extends Component {

    targetCustomerSection = () => {
        return (
            <div>
                <h3>
                    Clear Value for Your Target Customer
                </h3>
                <h5>
                    This is sample text here
                </h5>
                <div>
                    
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="header color-white-text d-flex justify-content-center align-items-center">
                <div className="header-element d-flex justify-content-between align-items-center">
                    <div className="text-area">
                        <p className="heading-text">The Complete</p>
                        <p className="heading-text">Dental Examination</p>
                        <p className="desc-text">A few sentences about your project. How it helps to solve clients problem. It should convinces the cutomers.</p>
                        <div className="row benefit-area d-flex justify-content-between align-items-center text-center color-black-text">
                            <div className="mt-10 benefit-box ">
                                <FontAwesomeIcon icon={faFlask} size="2x" color="#43a4d7" />
                                <p className="sub-heading-text">Benefit No.1 </p>
                                <p className="sub-desc-text">A few sentences about your project. How it helps to solve clients problem.</p>
                            </div>
                            <div className="benefit-box ">
                                <FontAwesomeIcon icon={faFlask} size="2x" color="#43a4d7" />

                                <p className="sub-heading-text">Benefit No.1 </p>
                                <p className="sub-desc-text">A few sentences about your project. How it helps to solve clients problem.</p>
                            </div>
                        </div>
                    </div>
                    <div className="form-area color-black-text">
                        <FontAwesomeIcon icon={faTooth} size="3x" color="#43a4d7" /> <br /><br />
                        <h5 >Book an Appointment</h5><br />
                        <Form>
                            <Form.Group controlId="formBasicText">
                                <Form.Control className="text-box text-center" type="text" placeholder="Name" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Control className="text-box text-center" type="email" placeholder="Email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control className="text-box text-center" type="password" placeholder="Password" />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="book-appointment-btn"> Book now </Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Appointmentbooking;
