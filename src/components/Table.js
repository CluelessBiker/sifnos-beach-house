/* eslint-disable */
import React from 'react'

const Table = (props) => {
    return (
        <>
        <table>
            <tr>
            {props.rowCells.map((cell, index) => (
                <td key={index}><p>{cell}</p></td>
            ))}
            </tr>
        </table>

        </>
    )
}

export default Table