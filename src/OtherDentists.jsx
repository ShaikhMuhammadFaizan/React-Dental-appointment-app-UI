import React, { Component } from 'react';
import { Container, Image } from 'react-bootstrap';

import dentist1 from './Assets/dentist.jpg'

import './OtherDentists.css';

class OtherDentists extends Component {
    render() {
        return (
            <Container className="other-dentists-area color-black-text text-center d-flex justify-content-center align-items-center">
                <div className="seprator"></div>
                <p className="Big-heading-text">Clear Value for Your Target Customer</p>
                <p className="sub-desc-text">A few sentences about your project. How it helps to solve clients problem. It should convinces the cutomers.</p>

                <div className="other-dentists-elements d-flex justify-content-between align-items-center">
                    <div className="denstist color-gray-text">
                        <Image className="dentist-img" src={dentist1} roundedCircle />
                        <p className="denstist-name mb-0">Amanda Baker</p>
                        <p className="sub-desc-text">Senior Dentist</p>
                        <p className="sub-desc-text mt-10">A dentist, also known as a dental surgeon, is a surgeon who specializes in dentistry, the diagnosis, prevention, and treatment of diseases and conditions of the oral cavity.</p>
                    </div>
                    <div className="denstist">
                        <Image className="dentist-img" src={dentist1} roundedCircle />
                        <p className="denstist-name mb-0">Amanda Baker</p>
                        <p className="sub-desc-text">Senior Dentist</p>
                        <p className="sub-desc-text mt-10">A dentist, also known as a dental surgeon, is a surgeon who specializes in dentistry, the diagnosis, prevention, and treatment of diseases and conditions of the oral cavity.</p>
                    </div>
               
                </div>
            </Container>
        );
    }
}

export default OtherDentists;
