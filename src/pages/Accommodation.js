import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Amenities from '../components/Amenities';
import HouseRules from '../components/HouseRules';
import styles from '../styles/Accommodation.module.css'

function Accommodation(){
    return(
        <div>
            <Row>
                <Col md={6}>
                    <div className={styles.Image}></div>
                </Col>
                <Col md={6}>
                    <Row>
                        <div className={styles.Image}></div>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div className={styles.Image}></div>
                        </Col>
                        <Col md={6}>
                            <div className={styles.Image}></div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Amenities />
            <HouseRules />
        </div>
    )
}

export default Accommodation;