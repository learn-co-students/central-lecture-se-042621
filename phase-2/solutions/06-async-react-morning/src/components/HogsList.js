import React, { Component } from "react";
import Hog from './Hog';

class HogsList extends Component {
  
  createHogs() {
    return this.props.hogs.map(hogObject => (
      <Hog key={hogObject.id} hogObject={hogObject} />
    ));
  }
  
  render() {
    return (
      <div>
        {this.createHogs()}
      </div>
    );
  }
}

export default HogsList;
