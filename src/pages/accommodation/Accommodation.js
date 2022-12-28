import React from 'react';
import { ImageTilesLeft } from '../../components/ImageTiles';
import Amenities from './components/Amenities';
import HouseRules from './components/HouseRules';
import image from '../../assets/images/random.jpg';

function Accommodation(){
    return(
        <div>
            <ImageTilesLeft
                large={image}
                medium={image}
                small1={image}
                small2={image}
            />
            <br />
            <h3>The Space</h3>
            <br />
            <p>With ocean views, this tranquil beach house is new, clean and simple with all the comforts you may need, and only 50 steps from the magnificent sand beach of Plati Yialos. You can be barefoot all day long, if you wish, and never step foot in a car! Two bedrooms on the main level share a long terrace and bathroom, while the two bedrooms on the lower level share a bathroom. (stays a lot cooler than the main level if you prefer to sleep without air conditioning). The top level has the kitchen, dining area that seats 4, living room, and a bathroom, with a veranda overlooking the Aegean Sea on one side, and olive groves and terraced hills on the other. Air conditioning/heating units are in each bedroom/living room. The house sleeps 8 people very comfortably but can feel tight if all 8 are inside the living area at the same time. The veranda has seating for 10 people. The interior space of the house is 107 square meters or 1085 square feet.</p>
            <br />
            <hr />
            <br />
            <Amenities />
            <br />
            <hr />
            <br />
            <HouseRules />
        </div>
    )
}

export default Accommodation;