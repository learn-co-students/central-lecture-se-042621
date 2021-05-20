import React from 'react';
import Painting from './Painting';

// const PaintingsList = (props) => {

//   return (
//     <div>
//       <h1>Paintings</h1>
//       {
//       props.paintings.map(painting => (
//         <Painting
//           key={painting.id}
//           painting={painting}
//         />
//       ))
//       }
//     </div>
//   );
// };

// Class Component

class PaintingsList extends React.Component{
  // this approach to setting state is better
  // when you want to somehow incorporate props
  // into your state

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     title: 'Paintings List'
  //   }
  // }

  // better if we simply want to hard code the
  // state for our component

  state = {
    hideList: false
  }
  
  render(){

    if (this.state.hideList) {
      return (
        <h1>List is Hidden!</h1>
      )
    } else {
      return (
        <div>
          <h1>Paintings</h1>

          {
            this.props.paintings.map(painting => (
              <Painting
                key={painting.id}
                painting={painting}
              />
            ))
          }
        </div>
      )
    }
  }
}

export default PaintingsList;
