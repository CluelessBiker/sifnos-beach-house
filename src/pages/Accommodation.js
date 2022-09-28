import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Amenities from '../components/Amenities';
import HouseRules from '../components/HouseRules';

function Accommodation(){
    return(
        <div>
            <Row>
                <Col md={6}>
                    <div></div>
                </Col>
                <Col md={6}>
                    <Row>
                        <div></div>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div></div>
                        </Col>
                        <Col md={6}>
                            <div></div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Amenities />
            <HouseRules />
        </div>
    )
}

export default Accommodation;