import React, { Component } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

import Logo from './logo.svg'

import './NavBar.css';

class NavbarComp extends Component {
    render() {
        return (
            <Navbar bg="light" className="navbar justify-content-around">
                <div className="row navbar-inner justify-content-around">
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        Dentist
            </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="nav-custom justify-content-between">
                            <a href="#appointments" className="link">Appointments</a>
                            <a href="#aboutus" className="link">About Us</a>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        );
    }
}

export default NavbarComp;
