import React from 'react';
import Painting from './Painting';

class PaintingsList extends React.Component{

  render(){
    // Show what is being passed through "match" via 'routerProps'
    // console.log(this.props.match);

    return(
      <div>
        <h1>Paintings</h1>
          {
            this.props.paintings.map(painting => (
              <div>
                <Painting key={painting.id} painting={painting} />
              </div>
            ))
          }
      </div>
    );
  }
}

export default PaintingsList;
