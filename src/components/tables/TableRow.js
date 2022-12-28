/* eslint-disable */
import React from 'react'
import styles from '../../styles/Table.module.css';

const TableRow = (props) => {
    return (
        <tr>
            {props.rowCells.map((cell, index) => (
                <td key={index} className={styles.TabelCell}><p>{cell}</p></td>
            ))}
        </tr>
    )
}

export default TableRow