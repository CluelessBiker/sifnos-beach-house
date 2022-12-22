/* eslint-disable */
import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Table from '../../components/Table';
import styles from '../../styles/RentalPrices.module.css';
import pricingdata from '../../assets/data/pricingdata';

const rows = pricingdata;
    
const createData = (row) => {
    return [row.service, row.amount];
};

function RentalPrices() {
    
    

    return (
        <Col sm={12} md={4} className={styles.Fees}>
            <div className={styles.FeesBox}>
                <h3>Pricing</h3> 

                {rows.map(row => (
                    <Table
                        rowCells={createData(row)}
                    />
                ))}
                <p>*5 night minimum</p>

                <Link to="/lease" target="_blank"><i className="fa-solid fa-download" aria-hidden="true" /> Rental Contract</Link>
            </div>
        </Col>
    );
}

export default RentalPrices;