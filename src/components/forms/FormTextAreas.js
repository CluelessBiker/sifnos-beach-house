/* eslint-disable */
import React from 'react';
import styles from '../../styles/FormTextAreas.module.css';

const FormTextAreas = (props) => {
  return (
    <textarea
        rows={props.rows}
        name={props.name}
        id={props.id}
        className={`form-control ${styles.TextArea}`}
        placeholder={props.placeholder}
        required
    >
    </textarea>
  )
}

export default FormTextAreas