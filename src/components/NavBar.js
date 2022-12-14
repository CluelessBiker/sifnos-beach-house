/* eslint-disable */
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ToggleCollapse from '../hooks/ToggleCollapse';
import styles from '../styles/NavBar.module.css';
import { NavbarLinks } from './SiteLinks';
import navdata from '../assets/data/navdata'

const navlinks = navdata;

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
                        {navlinks.map((navlink) => (
                            <NavbarLinks key={navlink.id} path={navlink.path} page={navlink.page} exact/>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;