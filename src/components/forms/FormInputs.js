/* eslint-disable */
import React from 'react'
import styles from '../../styles/FormInputs.module.css'

const FormInputs = (props) => {
    return (
        <input
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            required
            className={styles.FormInputs}
        />
    )
}

export default FormInputs