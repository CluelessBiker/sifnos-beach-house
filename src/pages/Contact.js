import React from 'react';
import { Row } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';
import RentalPrices from '../components/RentalPrices';

import SinglePagePDF from "../components/SinglePagePDF";
import samplePDF from "../assets/documents/leasecontract.pdf";

function Contact() {

    return (
        <div>
            <br />
            <Row>
                <ContactForm />
                <RentalPrices />
            </Row>
            <SinglePagePDF pdf={samplePDF} />
        </div>
    );
}

export default Contact;