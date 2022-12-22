/* eslint-disable */
import React from 'react';
import styles from '../styles/ImageTiles.module.css';

export const ImageTilesLeft = (props) => {
    return (
        <div className={styles.AlignItems}>
            <div className={`${styles.ImageLG} ${styles.ImageContainer} ${styles.ImageCol} ${styles.BoxWidths}`} style={{backgroundImage: `url(${props.large})`}}></div>

            <div className={`${styles.BoxWidths}`}>
                <div className={`${styles.ImageMD} ${styles.ImageContainer} ${styles.ImageCol}`} style={{backgroundImage: `url(${props.medium})`}}></div>
                
                <div className={`${styles.AlignItems}`}>
                    <div className={`${styles.ImageCol} ${styles.BoxWidths} ${styles.ImageSM} ${styles.ImageContainer}`} style={{backgroundImage: `url(${props.small1})`}}></div>
                    <div className={`${styles.ImageCol} ${styles.BoxWidths} ${styles.ImageSM} ${styles.ImageContainer}`} style={{backgroundImage: `url(${props.small2})`}}></div>
                </div>
            </div>
        </div>
    )
}

export const ImageTilesRight = (props) => {
    return (
        <div className={styles.AlignItems}>
            <div className={`${styles.BoxWidths}`}>
                <div className={`${styles.ImageMD} ${styles.ImageContainer} ${styles.ImageCol}`} style={{backgroundImage: `url(${props.medium})`}}></div>
                
                <div className={`${styles.AlignItems}`}>
                    <div className={`${styles.ImageCol} ${styles.BoxWidths} ${styles.ImageSM} ${styles.ImageContainer}`} style={{backgroundImage: `url(${props.small1})`}}></div>
                    <div className={`${styles.ImageCol} ${styles.BoxWidths} ${styles.ImageSM} ${styles.ImageContainer}`} style={{backgroundImage: `url(${props.small2})`}}></div>
                </div>
            </div>
            <div className={`${styles.ImageLG} ${styles.ImageContainer} ${styles.ImageCol} ${styles.BoxWidths}`} style={{backgroundImage: `url(${props.large})`}}></div>
        </div>
    )
  }
