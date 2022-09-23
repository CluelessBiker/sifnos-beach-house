import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import ToggleCollapse from '../hooks/ToggleCollapse';
import styles from '../styles/NavBar.module.css';

/**
 * Navigation bar.
 */
function NavBar() {
    const { expanded, setExpanded, ref } = ToggleCollapse();

    return (
        <div>
            <Navbar
                expand="sm"
                expanded={expanded}
                // sticky="top"
                fixed="top"
                className={styles.NavContainer}
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
                    <Nav className={`${styles.PageTitles} ml-auto text-left`}>

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
                            to="/accommodation"
                            className={styles.NavLink}
                            activeClassName={styles.Active}
                            aria-label="events"
                            rel="noreferrer"
                        >
                            Accommodation
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
        </div>
    );
}

export default NavBar;