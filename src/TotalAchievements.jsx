import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlask, faTooth } from '@fortawesome/free-solid-svg-icons'

import Navbar from './NavBar';

import './TotalAchievements.css';

class TotalAchievements extends Component {
    render() {
        return (
            <div className="total-achievements color-white-text d-flex justify-content-between align-items-center">
                <div className="achievements d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faTooth} size="2x" color="#ffffff" />
                    <p className="heading-text">5500</p>
                    <p className="desc-text">Professional Dentists</p>
                </div>
                <div className="achievements d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faTooth} size="2x" color="#ffffff" />
                    <p className="heading-text">5500</p>
                    <p className="desc-text">Professional Dentists</p>
                </div>
                <div className="achievements d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faTooth} size="2x" color="#ffffff" />
                    <p className="heading-text">5500</p>
                    <p className="desc-text">Professional Dentists</p>
                </div>
                <div className="achievements d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faTooth} size="2x" color="#ffffff" />
                    <p className="heading-text">5500</p>
                    <p className="desc-text">Professional Dentists</p>
                </div>
            </div>
        );
    }
}

export default TotalAchievements;
