import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import ToggleCollapse from '../hooks/ToggleCollapse';
import styles from '../styles/NavBar.module.css';

/**
 * Navigation bar.
 */
function NavBar() {
    const { expanded, setExpanded, ref } = ToggleCollapse();

    return (
        <Container className={styles.NavContainer}>
            <Navbar
                expand="sm"
                expanded={expanded}
                sticky="top"
            >
                <Link to="/" className={styles.Header}>
                    <Navbar.Brand>
                        <h1>Sifnos Beach House</h1>
                    </Navbar.Brand>
                </Link>

                <Navbar.Toggle
                    ref={ref}
                    onClick={() => setExpanded(!expanded)}
                />

                <Navbar.Collapse>
                    <Nav className={styles.PageTitles}>
                        <NavLink
                            exact
                            to="/"
                            className={styles.NavLink}
                            activeClassName={styles.Active}
                            aria-label="home page"
                            rel="noreferrer"
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/experience"
                            className={styles.NavLink}
                            activeClassName={styles.Active}
                            aria-label="events"
                            rel="noreferrer"
                        >
                            Experience
                        </NavLink>

                        <NavLink
                            to="/neighborhood"
                            className={styles.NavLink}
                            activeClassName={styles.Active}
                            aria-label="user posts"
                            rel="noreferrer"
                        >
                            Neighborhood
                        </NavLink>

                        <NavLink
                            to="/gallery"
                            className={styles.NavLink}
                            activeClassName={styles.Active}
                            aria-label="about page"
                            rel="noreferrer"
                        >
                            Gallery
                        </NavLink>

                        <NavLink
                            to="/contact"
                            className={styles.NavLink}
                            activeClassName={styles.Active}
                            aria-label="about page"
                            rel="noreferrer"
                        >
                            Contact
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default NavBar;