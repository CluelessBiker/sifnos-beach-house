import React from 'react';
import { Col, Row } from 'react-bootstrap';

function HouseRules() {
    return (
        <div>
            <h3>Things to know</h3>
            <Row>
                <Col xs={12} sm={4}>
                    <h4>House Rules:</h4>
                    <p><i className="fa-regular fa-clock" /> Check-in: After 11:00</p>
                    <p><i className="fa-regular fa-clock" /> Check-out: Before 13:00</p>
                    <p><i className="fa-solid fa-ban-smoking" /> No Smoking</p>
                    <p><i className="fa-solid fa-paw" /> No Pets</p>
                    <p><i className="fa-solid fa-champagne-glasses" /> No parties/events</p>
                </Col>

                <Col xs={12} sm={4}>
                    <h4>Health & Safety:</h4>
                    <p><i className="fa-solid fa-circle-exclamation" /> Carbon Monoxide Detector: No</p>
                    <p><i className="fa-solid fa-circle-exclamation" /> Smoke Alarm: No</p>
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