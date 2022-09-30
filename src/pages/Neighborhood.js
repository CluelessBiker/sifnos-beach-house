import React from 'react';
import styles from '../styles/Neighborhood.module.css';

function Neighborhood () {
    return (
        <div>
            <h3>Welcome to the Neighbourhood</h3>
            <p>Plati Yialos beach annually receives the European Union’s “Blue Flag” award given to the cleanest and safest coastal areas that protect the environment. Situated on the south side of the island, the surrounding hills of Plati Yialos break the prevailing northern summer winds, making it a sanctuary with calm waters on windy days. “Plati Yialos” means “wide seashore” in Greek and is considered one of the longer beaches of the Cyclades islands. Plati Yialos is one of the finest and sought after locations in Sifnos. The beach is your backyard and you will find anything you may need. There are many amenities in Plati Yialos: a wide array of quiet traditional and contemporary restaurants, coffee bars, seafood bars, mini food market, traditional bakery with cheese pies and custard pies, little shops for your beach or fashion needs, travel agent, pottery shops, beach chairs and umbrellas, water sports rentals on the beach, car rental agency, and sailing boat rentals at the marina and all this is just a short barefoot walk from the house. There are many hiking trails starting at Plati Yialos, providing ancient footpath access to the rest of the island: the best way to see the island. White-washed houses with traditional ceramic chimneys and small churches with blue domes, built on hills that lead to sandy beaches, this is Sifnos, the jewel of the Cyclades.</p>
            <iframe
                className={styles.GoogleMap}
                id="gmap"
                title="Platys Gialos, Syros"
                // src="https://maps.google.com/maps?q=platys%20gialos%20sifnos&t=&z=15&ie=UTF8&iwloc=&output=embed"
                src="https://maps.google.com/maps?q=platys%20gyalos%20sifnos&t=&z=15&ie=UTF8&iwloc=&output=embed"
            ></iframe>

         </div>
    )
}

export default Neighborhood;