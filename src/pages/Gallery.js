import React from 'react';
import { ImageTilesLeft, ImageTilesRight } from '../components/ImageTiles';
import image from '../assets/images/random.jpg';

function Gallery() {
    return (
        <div>
            <ImageTilesLeft
                large={image}
                medium={image}
                small1={image}
                small2={image}
            />
            <ImageTilesRight
                large={image}
                medium={image}
                small1={image}
                small2={image}
            />
            <ImageTilesLeft
                large={image}
                medium={image}
                small1={image}
                small2={image}
            />
            <br />
            <br />
            <br />
            <br />
            <br />
            
        </div>
    )
}

export default Gallery;