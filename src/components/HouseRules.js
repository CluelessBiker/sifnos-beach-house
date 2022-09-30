import React from 'react';
import { Col, Row } from 'react-bootstrap';

function HouseRules() {
    return (
        <div>
            <h3>Things to know</h3>
            <Row>
                <Col xs={12} sm={4}>
                    <h4><strong>House Rules:</strong></h4>
                    <p><i className="fa-regular fa-clock" /> Check-in: 16:00 to 21:00</p>
                    <p><i className="fa-regular fa-clock" /> Check-out: 10:00</p>
                    <p><i className="fa-solid fa-ban-smoking" /> No Smoking</p>
                    <p><i className="fa-solid fa-paw" /> No Pets</p>
                    <p><i className="fa-solid fa-champagne-glasses" /> No parties/events</p>
                </Col>

                <Col xs={12} sm={4}>
                    <h4><strong>Health & Safety:</strong></h4>
                    <p><i className="fa-solid fa-circle-exclamation" /> Carbon Monoxide Detector: No</p>
                    <p><i className="fa-solid fa-circle-exclamation" /> Smoke Alarm: No</p>
                </Col>

                <Col xs={12} sm={4}>
                    <h4><strong>Cancellation Policy:</strong></h4>
                    <p>Full refund within 48h from the time the reservation was made.</p>
                    <p>+ 30 days: 50% refund</p>
                    <p>30 days or less: No refund.</p>
                </Col>
            </Row>
        </div>
    )
}

export default HouseRules;