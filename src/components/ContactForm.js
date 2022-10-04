import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Col, Row } from 'react-bootstrap';
import styles from '../styles/ContactForm.module.css';
import { useHistory } from 'react-router-dom';

export const ContactForm = () => {
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
        <Col sm={12} md={8} className={styles.ContactForm}>
            <h3 className="contact-heading uppercase text-center">Get in touch</h3>
            <Row>
                <Col className={styles.Form}>
                    <form ref={form} onSubmit={sendEmail}>
                        {/* <Row className={styles.FormRows}>
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
                        </Row>
                        <Row  className={styles.FormRows}>
                            <input
                                type="date"
                                name="arrival_date"
                                placeholder="arrival*"
                                required
                            />
                            <input
                                type="date"
                                name="departure_date"
                                placeholder="departure*"
                                required
                            />
                            <input
                                type="number"
                                name="number_of_guests"
                                placeholder="number of guests*"
                                required
                            />
                        </Row> */}

                        <Row>
                            <Col sm={6} md={4}>
                                <input
                                    type="text"
                                    name="from_name"
                                    placeholder="full name*"
                                    required
                                />
                            </Col>
                            <Col sm={6} md={4}>
                                <input
                                    type="email"
                                    name="from_email"
                                    placeholder="email*"
                                    required
                                />
                            </Col>
                            <Col sm={6} md={4}>
                                <input
                                    type="tel"
                                    name="from_number"
                                    placeholder="phone number*"
                                    required
                                />
                            </Col>
                            <Col sm={6} md={4}>
                                <input
                                    type="number"
                                    name="number_of_guests"
                                    placeholder="number of guests*"
                                    required
                                />
                            </Col>
                            <Col sm={6} md={4}>
                                <input
                                    type="date"
                                    name="arrival_date"
                                    placeholder="arrival*"
                                    required
                                />
                            </Col>
                            <Col sm={6} md={4}>
                                <input
                                    type="date"
                                    name="departure_date"
                                    placeholder="departure*"
                                    required
                                />
                            </Col>
                        </Row>
                            
                        <textarea
                            rows="5"
                            name="message"
                            id="projectsummary"
                            className="form-control"
                            placeholder="message*"
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
        </Col>
    );
};

export default ContactForm;