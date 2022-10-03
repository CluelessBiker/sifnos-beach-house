import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from '../styles/RentalPrices.module.css';
import pdf from '../assets/documents/leasecontract.pdf';
import { Link } from 'react-router-dom';

// const RentalPrices = () => {
function RentalPrices() {
    // const onButtonClick = () => {
    //     fetch(pdf).then(response => {
    //         response.blob().then(blob => {
    //             const fileURL = window.URL.createObject
    //             let alink = document.createElement('a')
    //             alink.href = fileURL;
    //             alink.download = 'leasecontract.pdf';
    //             alink.click();
    //         })
    //     })
    // }

    return (
        <Col sm={12} md={4} className={styles.Fees}>
            <div className={styles.FeesBox}>
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
                {/* <a
                    href={pdf}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Rental contract"
                    className={styles.RentalLease}
                >
                    <i className="fa-solid fa-download" aria-hidden="true" /> Rental Contract
                </a> */}
                {/* <button onClick={onButtonClick}>
                    <i className="fa-solid fa-download" aria-hidden="true" /> Download Rental Contract
                </button> */}
                <Link to={pdf} target="_blank">Download</Link>
            </div>
        </Col>
    );
}

export default RentalPrices;