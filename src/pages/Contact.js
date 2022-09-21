import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Col, Container, Row } from 'react-bootstrap';
import styles from '../styles/Contact.module.css';
import { useHistory } from 'react-router-dom';

export const Contact = () => {
    const form = useRef();
    const history = useHistory();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log(result.text); 
        }, (error) => {
            console.log(error.text);
        });
        history.push('/');
    };

    return (
        <Container className={styles.ContactForm}>
            <h3 className="contact-heading uppercase text-center">Get in touch</h3>

            <Row>
                <Col className={styles.Form}>
                    <form ref={form} onSubmit={sendEmail}>
                        <input
                            type="text"
                            name="from_name"
                            placeholder="full name*"
                            required
                        />

                        <input
                            type="email"
                            name="from_email"
                            placeholder="email*"
                            required
                        />
                        <input
                            type="tel"
                            name="from_number"
                            placeholder="phone number*"
                            required
                        />
                        <input
                            type="date"
                            name="arrival_date"
                            placeholder="arrival"
                        />
                        <input
                            type="date"
                            name="departure_date"
                            placeholder="departure"
                        />
                        <input
                            type="number"
                            name="number_of_guests"
                            placeholder="number of guests"
                        />
                        <textarea
                            rows="5"
                            name="message"
                            id="projectsummary"
                            className="form-control"
                            placeholder="message"
                            required
                        ></textarea>
                        <Col>
                            <button
                                type="submit"
                                className="btn btn-secondary"
                                value="send"
                            >Send</button>
                        </Col>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;