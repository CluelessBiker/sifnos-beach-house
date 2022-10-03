import React from 'react';
import { Row } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';
import RentalPrices from '../components/RentalPrices';

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