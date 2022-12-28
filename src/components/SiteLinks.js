/* eslint-disable */
import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from '../styles/SiteLinks.module.css';

export const NavbarLinks = (props, ...rest) => {
    return (
        <NavLink
            exact
            to={props.path}
            className={styles.NavLink}
            activeClassName={styles.Active}
            aria-label={props.page}
            rel="noreferrer"
        >
            {props.page}
        </NavLink>
    )
}

export const SocialLinks = (props, ...rest) => {
    return (
        <a
            href={props.link}
            target="_blank"
            rel="noreferrer"
            aria-label={`Visit our ${props.socialsite} page`}
        >
            {props.icon}
        </a>
    )
}

export const ExternalLinks = (props) => {
    return (
        <a
            className={styles.ExternalLinks}
            href={props.href}
            target="_blank"
        >
            {props.children}
            {' '}
            {props.title}
        </a>
    )
}