import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../styles/LandingPage.module.css';

function LandingPage() {
    return (
        <Container>
            <div className={styles.HeroImage}></div>
        </Container>
    )
}

export default LandingPage;