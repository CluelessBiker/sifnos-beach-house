import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from '../styles/Amenities.module.css';

function Amenities() {
    return (
        <div>
            <h3>AMENITIES</h3>
            <br />
            <Row className={styles.AmenitiesLists}>
                <Col xs={6} sm={4} md={3} className={styles.ListColumns}>
                    <h4><i className="fa-solid fa-mountain-sun" /><strong> Scenic Views</strong></h4>
                    <p>Beach view</p>
                    <p>Sea view</p>
                    <p>Mountain view</p>
                </Col>

                <Col xs={6} sm={4} md={3} className={styles.ListColumns}>
                    <h4><i className="fa-solid fa-fan" /><strong> Heating & Cooling</strong></h4>
                    <p>Air conditioning</p>
                    <p>Heating</p>
                    <p>Ceiling fans</p>
                </Col>

                <Col xs={6} sm={4} md={3} className={styles.ListColumns}>
                    <h4><i className="fa-solid fa-wifi" /><strong> Internet & Office</strong></h4>
                    <p>WiFi</p>
                    {/* <p>Landline</p> */}
                </Col>

                <Col xs={6} sm={4} md={3} className={styles.ListColumns}>
                    <h4><i className="fa-solid fa-cloud-sun" /><strong> Outdoor</strong></h4>
                    <p>Private patio & balcony</p>
                    <p>Beach towels</p>
                </Col>

                <Col xs={6} sm={4} md={3} className={styles.ListColumns}>
                    <h4><i className="fa-solid fa-baby" /><strong> Family</strong></h4>
                    <p>Crib</p>
                </Col>

                <Col xs={6} sm={4} md={3} className={styles.ListColumns}>
                    <h4><i className="fa-solid fa-car" /><strong> Parking</strong></h4>
                    <p>Free street parking</p>
                </Col>

                <Col xs={6} sm={4} md={3} className={styles.ListColumns}>
                    <h4><i className="fa-solid fa-fire-extinguisher" /><strong> Home Safety</strong></h4>
                    <p>Fire extinguisher</p>
                </Col>

                <Col xs={6} sm={4} md={3} className={styles.ListColumns}>
                    <h4><i className="fa-solid fa-suitcase" /><strong> Services</strong></h4>
                    <p>Luggage dropoff allowed</p>
                    <p>Long-term stays allowed</p>
                </Col>

                <Col xs={6} sm={4} md={3} className={styles.ListColumns}>
                    <h4><i className="fa-solid fa-sink" /><strong> Bathroom</strong></h4>
                    <p>3 Bathrooms - open floor shower</p>
                    <p>Hair dryer</p>
                    <p>Shampoo</p>
                    <p>Shower gel</p>
                    <p>Toilet paper</p>
                    <p>Outdoor shower</p>
                    <p>Hot water</p>
                </Col>

                <Col xs={6} sm={4} md={3} className={styles.ListColumns}>
                    <h4><i className="fa-solid fa-bed" /><strong> Bedroom & Laundry</strong></h4>
                    <p>4 Bedrooms</p>
                    <p>4 Queen size beds - COCOMAT</p>
                    <p>Bed Linens - 100% cotton</p>
                    <p>Extra pillows & blankets</p>
                    {/* <p>Room-darkening shades</p> */}
                    <p>Clothing storage</p>
                    <p>Hangers</p>
                    <p>Towels</p>
                    <p>Laundry rack</p>
                    <p>Washing machine</p>
                    <p>Safe</p>
                </Col>

                <Col xs={6} sm={4} md={3} className={styles.ListColumns}>
                    <h4><i className="fa-solid fa-kitchen-set" /><strong> Kitchen & Dining</strong></h4>
                    <p>Refridgerator</p>
                    <p>Stove top</p>
                    <p>Oven</p>
                    <p>Coffee machine</p>
                    <p>Kettle</p>
                    <p>Cooking utensils & pots</p>
                    <p>Dishes & silverware</p>
                    <p>Wine glasses</p>
                    <p>Dining table</p>
                </Col>

                <Col xs={6} sm={4} md={3} className={styles.ListColumns}>
                    <h4><i className="fa-solid fa-location-dot" /><strong> Location & Features</strong></h4>
                    <p>Waterfront</p>
                    <p>Beach access</p>
                    <p>Private entrance</p>
                    {/* <p>Resort access</p> */}
                    <p>Restaurants</p>
                    <p>Cocktail bars</p>
                    <p>Coffee shops</p>
                </Col>

            </Row>
        </div>
    )
}

export default Amenities;