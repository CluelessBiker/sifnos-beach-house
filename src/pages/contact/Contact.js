import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ContactForm from './components/ContactForm';
import RentalPrices from './components/RentalPrices';

function Contact() {

    return (
        <div>
            <br />
            <Row>
                <Col sm={12} md={6}>
                    <ContactForm />
                </Col>

                <Col sm={12} md={6}>
                    <RentalPrices />
                </Col>
            </Row>
        </div>
    );
}

export default Contact;