/* eslint-disable */
import React from 'react';
import { Col } from 'react-bootstrap';
import styles from '../../../styles/RentalPrices.module.css';
import pricingdata from '../../../assets/data/pricingdata';
import Table from '../../../components/tables/Table';
import TableHead from '../../../components/tables/TableHead';
import TableRow from '../../../components/tables/TableRow';
import { ExternalLinks } from '../../../components/SiteLinks';
import pdf from '../../../assets/documents/leasecontract.pdf';

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
                        key={row.id}
                        rowCells={createData(row)}
                        />
                        ))}
                </Table> 
              

                <p>*5 night minimum</p>

                <ExternalLinks
                    href={ pdf }
                    title="Rental Contract"
                >
                    <i className="fa-solid fa-download" aria-hidden="true" />
                </ExternalLinks>
            </div>
        </Col>
    );
}

export default RentalPrices;