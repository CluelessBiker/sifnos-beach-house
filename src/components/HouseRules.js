import React from 'react';
import { Col, Row } from 'react-bootstrap';

function HouseRules() {
    return (
        <div>
            <h3>Things to know</h3>
            <Row>
                <Col xs={12} sm={4}>
                    <h4>House Rules:</h4>
                    <p>Check-in: After 11:00</p>
                    <p>Check-out: Before 13:00</p>
                    <p>No Smoking</p>
                    <p>No Pets</p>
                    <p>No parties/events</p>
                </Col>

                <Col xs={12} sm={4}>
                    <h4>Health & Safety:</h4>
                    <p>Carbon Monoxide Detector: No</p>
                    <p>Smoke Alarm: No</p>
                </Col>

                <Col xs={12} sm={4}>
                    <h4>Cancellation Policy:</h4>
                    <p>Full refund within 48h from the time the reservation was made.</p>
                    <p>50% refund with two weeks notice.</p>
                    <p>No refund.</p>
                </Col>
            </Row>
        </div>
    )
}

export default HouseRules;