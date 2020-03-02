import React, { Component } from 'react';
import { Button, Image } from 'react-bootstrap';

import mob1 from './Assets/dentist.jpg'


import './DenstistInfo.css';

class DenstistInfo extends Component {
    render() {
        return (
            <div className="denstist-info" >
                <div className="denstist-img-area" >
                    <Image className="denstist-img img-fluid" src={mob1} />
                </div>
                <div className="denstist-desc-area" >
                    <div className="denstist-desc" >
                        <p className="denstist-name">Amanda Baker</p>
                        <p className="sub-desc-text">A doctor is someone who is qualified in medicine and treats people who are ill. ... A doctor is someone who has been awarded the highest academic or honorary degree by a university.</p>
                        <Button variant="primary" type="submit" className="book-appointment-btn"> Book now </Button>

                    </div>
                </div>
            </div>
        );
    }
}

export default DenstistInfo;
