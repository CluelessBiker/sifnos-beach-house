import React from 'react';
import styles from '../styles/Neighborhood.module.css';

function Neighborhood () {
    return (
        <div>
            <iframe
                className={styles.GoogleMap}
                id="gmap"
                title="Platys Gialos, Syros"
                src="https://maps.google.com/maps?q=platys%20gialos%20sifnos&t=&z=15&ie=UTF8&iwloc=&output=embed"
            ></iframe>
        </div>

    )
}

export default Neighborhood;