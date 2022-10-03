import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from '../styles/RentalPrices.module.css';
import pdf from '../assets/documents/leasecontract.pdf';

function RentalPrices() {

    return (
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
    );
}

export default RentalPrices;