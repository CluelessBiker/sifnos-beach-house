import React from 'react'

const TableHead = (props) => {
    return (
        <tr>
            <th colSpan="2"><h3>{props.heading}</h3></th>
        </tr>
    )
}

export default TableHead