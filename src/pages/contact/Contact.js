import React from 'react';
import { Row } from 'react-bootstrap';
import ContactForm from './ContactForm';
import RentalPrices from './RentalPrices';

function Contact() {

    return (
        <div>
            <br />
            <Row>
                <ContactForm />
                <RentalPrices />
            </Row>
        </div>
    );
}

export default Contact;