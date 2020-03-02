import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';



import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer color-white-text text-center d-flex justify-content-center align-items-center" >
                <div className="seprator white-bg"></div>
                <p className="Big-heading-text">Clear Value for Your Target Customer</p>
                <p className="sub-desc-text">A few sentences about your project. How it helps to solve clients problem. It should convinces the cutomers.</p>
                <Form className="book-now-footer-form white-bg d-flex justify-content-between align-items-center">
                    <Form.Control className="footer-text-box text-center" type="email" placeholder="Email" />
                    <Form.Control className="footer-text-box text-center" type="password" placeholder="Password" />
                    <Button variant="primary" type="submit" className="book-appointment-btn footer-btn"> Book now </Button>
                </Form>
            </div>
        );
    }
}

export default Footer;
