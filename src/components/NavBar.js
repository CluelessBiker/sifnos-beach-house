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
        <Container>
            <Navbar expand="lg" expanded={expanded}>
                <Link to="/" className={styles.Header}>
                    <Navbar.Brand className={styles.Test}>
                        <h1>Sifnos Beach House</h1>
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                ref={ref}
                onClick={() => setExpanded(!expanded)}
                />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto text-left">
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
                            to="/location"
                            className={styles.NavLink}
                            activeClassName={styles.Active}
                            aria-label="user posts"
                            rel="noreferrer"
                        >
                            Location
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