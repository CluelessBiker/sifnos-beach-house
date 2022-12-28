/* eslint-disable */
import React from 'react';
import styles from '../styles/Buttons.module.css';

const Buttons = (props) => {
    return (
        <button
            type={props.type}
            className={styles.Btn}
            value={props.value}
            >
            {props.text}
        </button>
    )
}

export default Buttons