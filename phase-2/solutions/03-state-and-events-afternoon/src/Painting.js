import Toggle from './Toggle';

const Painting = props => {
  // let state = {
  //   hidePainting: false
  // }
  
  // if (state.hidePainting) {
  //   return (
  //     <h1>Painting has been stolen!</h1>
  //   );
  // } else {
    const savePainting = () => {
      console.log("Painting was saved!");
    }

    return (
      <div>
        <img src={props.painting.image} />
        <h4>
          "{props.painting.title}" by {props.painting.artist.name}
        </h4>
        <p>Year: {props.painting.date}</p>
        <p>
          Dimensions: {props.painting.dimensions.width} in. x {props.painting.dimensions.height} in.
        </p>
        <Toggle type="heart"/>
        <Toggle type="add"/>
      </div>   
    );
  // }
};

export default Painting;
