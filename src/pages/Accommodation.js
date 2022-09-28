import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Amenities from '../components/Amenities';
import HouseRules from '../components/HouseRules';
import styles from '../styles/Accommodation.module.css'

function Accommodation(){
    return(
        <div>
            <Row>
                <Col md={6} className={styles.ImageCol}>
                    <div className={styles.ImageLG}></div>
                </Col>
                <Col md={6}>
                    <Row>
                        <Col md={12} className={styles.ImageCol}>
                            <div className={styles.ImageMD}></div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className={styles.ImageCol}>
                            <div className={styles.ImageSM}></div>
                        </Col>
                        <Col md={6} className={styles.ImageCol}>
                            <div className={styles.ImageSM}></div>
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