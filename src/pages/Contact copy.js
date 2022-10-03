import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Col, Row } from 'react-bootstrap';
import styles from '../styles/Contact.module.css';
import { useHistory } from 'react-router-dom';
import pdf from '../assets/documents/leasecontract.pdf';

 Contact = () => {
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
        <Row>
            <Col sm={12} md={8} className={styles.ContactForm}>
                <h3 className="contact-heading uppercase text-center">Get in touch</h3>
                <Row>
                    <Col className={styles.Form}>
                        <form ref={form} onSubmit={sendEmail}>
                            <Row>
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
                            <Row>
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
            <Col sm={12} md={4} className={styles.Fees}>
                <div className={styles.FeesBox}>
                    <Row className={styles.ServiceCost}>
                        <p className={styles.Service}>€799 x 5 night</p>
                        <p className={styles.Cost}>€2,500</p>
                    </Row>
                    <Row className={styles.ServiceCost}>
                        <p className={styles.Service}>Cleaning fee</p>
                        <p className={styles.Cost}>€195</p>
                    </Row>
                    <Row className={styles.ServiceCost}>
                        <p className={styles.Service}>Deposit</p>
                        <p className={styles.Cost}>€1,500</p>
                    </Row>
                    <hr />
                    <Row className={styles.ServiceCost}>
                        <strong><p className={styles.Service}>Total</p></strong>
                        <strong><p className={styles.Cost}>€5,690</p></strong>
                    </Row>
                    <p>*5 night minimum</p>
                    <a
                        href={pdf}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Rental contract"
                        className={styles.RentalLease}
                    >
                        <i className="fa-solid fa-download" aria-hidden="true" /> Rental Contract
                    </a>
                </div>
            </Col>
        </Row>
    );
};

export default Contact;