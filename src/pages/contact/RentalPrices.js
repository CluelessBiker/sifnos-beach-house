/* eslint-disable */
import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../../styles/RentalPrices.module.css';
import pricingdata from '../../assets/data/pricingdata';
import Table from '../../components/Table';
import TableHead from '../../components/TableHead';
import TableRow from '../../components/TableRow';

const rows = pricingdata;
    
const createData = (row) => {
    return [row.service, row.amount];
};

function RentalPrices() {
    return (
        <Col sm={12} md={4} className={styles.Fees}>
            <div className={styles.FeesBox}>
                <Table>
                    <TableHead heading={"Pricing"}/>
                    {rows.map(row => (
                        <TableRow
                            rowCells={createData(row)}
                        />
                    ))}
                </Table> 
              

                <p>*5 night minimum</p>

                <Link to="/lease" target="_blank"><i className="fa-solid fa-download" aria-hidden="true" /> Rental Contract</Link>
            </div>
        </Col>
    );
}

export default RentalPrices;