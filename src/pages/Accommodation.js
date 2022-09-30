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
            <br />
            <h3>The Space</h3>
            <p>With ocean views, this tranquil beach house is new, clean and simple with all the comforts you may need, and only 50 steps from the magnificent sand beach of Plati Yialos. You can be barefoot all day long, if you wish, and never step foot in a car! Two bedrooms on the main level share a long terrace and bathroom, while the two bedrooms on the lower level share a bathroom. (stays a lot cooler than the main level if you prefer to sleep without air conditioning). The top level has the kitchen, dining area that seats 4, living room, and a bathroom, with a veranda overlooking the Aegean Sea on one side, and olive groves and terraced hills on the other. Air conditioning/heating units are in each bedroom/living room. The house sleeps 8 people very comfortably but can feel tight if all 8 are inside the living area at the same time. The veranda has seating for 10 people. The interior space of the house is 107 square meters or 1085 square feet.</p>
            <Amenities />
            <br />
            <HouseRules />
        </div>
    )
}

export default Accommodation;