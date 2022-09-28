import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from '../styles/Amenities.module.css';
import hairdryer from '../assets/icons/hairdryer.png';

function Amenities() {
    return (
        <div>
            <h3>AMENITIES</h3>

            <Row className={styles.AmenitiesLists}>
                <Col xs={6} sm={4} md={3} lg={1}>
                    <h4>Scenic Views</h4>
                    <p>Beach view</p>
                    <p>Sea view</p>
                    <p>Mountain view</p>
                </Col>

                <Col xs={6} sm={4} md={3} lg={1}>
                    <h4>Bathroom</h4>
                    <Row>
                        <img src={hairdryer} alt="hairdryer" className={styles.Icons} />
                        <p>Hair dryer</p>
                    </Row>
                    <p>Shampoo</p>
                    <p>Shower gel</p>
                    <p>Outdoor shower</p>
                    <p>Hot water</p>
                </Col>

                <Col xs={6} sm={4} md={3} lg={1}>
                    <h4>Bedroom & Laundry</h4>
                    <p>Bed Linens</p>
                    <p>Extra pillows & blankets</p>
                    <p>Room-darkening shades</p>
                    <p>Clothin storage</p>
                    <p>Hangers</p>
                    <p>Towels</p>
                    <p>Laundry rack</p>
                    <p>Washing machine</p>
                    <p>Safe</p>
                </Col>

                <Col xs={6} sm={4} md={3} lg={1}>
                    <h4>Family</h4>
                    <p>Crib</p>
                </Col>

                <Col xs={6} sm={4} md={3} lg={1}>
                    <h4>Heating & Cooling</h4>
                    <p>Air conditioning</p>
                    <p>Heating</p>
                    <p>Ceiling fans</p>
                </Col>

                <Col xs={6} sm={4} md={3} lg={1}>
                    <h4>Home Safety</h4>
                    <p>Fire extinguisher</p>
                </Col>

                <Col xs={6} sm={4} md={3} lg={1}>
                    <h4>Internet & Office</h4>
                    <p>WiFi</p>
                    <p>Landline</p>
                </Col>

                <Col xs={6} sm={4} md={3} lg={1}>
                    <h4>Kitchen & Dining</h4>
                    <p>Kitchen</p>
                    <p>Refridgerator</p>
                    <p>Oven</p>
                    <p>Coffee machine</p>
                    <p>Kettle</p>
                    <p>Cooking utensils & pots</p>
                    <p>Dishes & silverware</p>
                    <p>Wine glasses</p>
                    <p>Dining table</p>
                </Col>

                <Col xs={6} sm={4} md={3} lg={1}>
                    <h4>Location & Features</h4>
                    <p>Waterfront</p>
                    <p>Beach access</p>
                    <p>Private entrance</p>
                    <p>Resort access</p>
                    <p>Local dining, cocktails & coffee shops</p>
                </Col>

                <Col xs={6} sm={4} md={3} lg={1}>
                    <h4>Outdoor</h4>
                    <p>Private patio & balcony</p>
                    <p>Beach towels</p>
                </Col>

                <Col xs={6} sm={4} md={3} lg={1}>
                    <h4>Parking</h4>
                    <p>Free street parking</p>
                </Col>

                <Col xs={6} sm={4} md={3} lg={1}>
                    <h4>Services</h4>
                    <p>Luggage dropoff allowed</p>
                    <p>Long-term stays allowed</p>
                </Col>

            </Row>
        </div>
    )
}

export default Amenities;