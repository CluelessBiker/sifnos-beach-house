import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../styles/RentalPrices.module.css';

function RentalPrices() {

    return (
        <Col sm={12} md={4} className={styles.Fees}>
            <div className={styles.FeesBox}>
                <h3>Pricing</h3> 
                <Row className={styles.ServiceCost}>
                    <p className={styles.Service}>€799 x 5 night</p>
                    <p className={styles.Cost}>€3,995</p>
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

                <Link to="/lease" target="_blank"><i className="fa-solid fa-download" aria-hidden="true" /> Rental Contract</Link>
            </div>
        </Col>
    );
}

export default RentalPrices;