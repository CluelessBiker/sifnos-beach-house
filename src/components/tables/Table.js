/* eslint-disable */
import React from 'react';
import styles from '../../styles/Table.module.css';

const Table = (props) => {
    return (
        <table className={styles.PricingTable}>
            <tbody>
                {props.children}
            </tbody>
        </table>
    )
}

export default Table