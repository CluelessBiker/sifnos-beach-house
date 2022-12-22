import React from 'react';
import { Row } from 'react-bootstrap';
import styles from '../styles/Footer.module.css';
import { SocialLinks } from './SiteLinks';

function Footer() {
    return (
        <div className={styles.SocialIcons}>
            <Row className={styles.SocialIconsAlign}>
                <SocialLinks
                    link={"https://www.facebook.com"}
                    socialsite={"facebook"}
                    icon={<i className="fa-brands fa-facebook-f" />}
                />
                <SocialLinks
                    link={"https://www.instagram.com"}
                    socialsite={"Instagram"}
                    icon={<i className="fa-brands fa-instagram" />}
                />
            </Row>
        </div>
    )
}

export default Footer;