import React, { Component } from 'react';
import { Container, Image } from 'react-bootstrap';

import mob1 from './Assets/map4.jpg'


import './WorldRepresentation.css';

class WorldRepresentation extends Component {
    render() {
        return (
            <Container className="target-customer color-black-text text-center d-flex justify-content-between align-items-center">
                <div className="seprator"></div>
                <p className="Big-heading-text">Clear Value for Your Target Customer</p>
                <p className="sub-desc-text">A few sentences about your project. How it helps to solve clients problem. It should convinces the cutomers.</p>
                <Image className="world-rep-image img-fluid" src={mob1} />
            </Container>
        );
    }
}

export default WorldRepresentation;
