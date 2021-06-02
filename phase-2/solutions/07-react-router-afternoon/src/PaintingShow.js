import React from 'react';
import Painting from './Painting';

// add 'match' to the parameters so we can access the path information 
// in 'routerProps' that is passed from PaintingsPage 
const PaintingShow = ({match, paintings}) => {
    
    // use console.log to check parameters that are being passed

    // console.log(match.params.paintingId);
    // console.log(paintings);

    // search through "paintings" to find one that matches "paintingId" param
    const matchingPainting = paintings.find(painting => painting.id === match.params.paintingId);

    return (
        <div>
            {/* use id and matchingPainting object to dynamically render Painting
            based upon URL */}
            <Painting
                key={matchingPainting.id}
                painting={matchingPainting}
            />
        </div>
    );
};

export default PaintingShow;