import React from 'react';
import { Container, Row } from 'react-bootstrap';
import styles from '../styles/Footer.module.css';

function Footer() {
    return (
        <Container>
            <Row className={styles.SocialIconsAlign}>
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Visit our Facebook page (opens in a new tab)"
                >
                    <i className="fa-brands fa-facebook-f" />
                </a>

                <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Visit our Instagram page (opens in a new tab)"
                >
                    <i className="fa-brands fa-instagram" />
                </a>
            </Row>
        </Container>
    )
}

export default Footer;