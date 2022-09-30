import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from '../styles/Accommodation.module.css';

function Gallery() {
    return (
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

            <Row>
                
                <Col md={6}>
                <Row>
                    <Col md={6} className={styles.ImageCol}>
                        <div className={styles.ImageSM}></div>
                    </Col>
                    <Col md={6} className={styles.ImageCol}>
                        <div className={styles.ImageSM}></div>
                    </Col>
                    </Row>
                    <Row>
                        <Col md={12} className={styles.ImageCol}>
                            <div className={styles.ImageMD}></div>
                        </Col>
                    </Row>
                </Col>
                <Col md={6} className={styles.ImageCol}>
                    <div className={styles.ImageLG}></div>
                </Col>
            </Row>

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
            <br />
            <br />
            <br />
            <br />
            <br />
            
        </div>
    )
}

export default Gallery;