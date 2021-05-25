import React, { Component } from "react";
import Hog from './Hog';

// class HelloWorld extends React.Component {
// export default class HogsList extends Component {
class HogsList extends Component {
    
    // abstract render logic to class function
    createHogs() {
        return this.props.hogs.map(hogObject => (
            <Hog key={hogObject.id} hogObject={hogObject} />
        ));
    }
  
    render() {
        // console.log(this.props.hogs);

        return (
            <div>
                {this.createHogs()}
            </div>
        );
    }
}

export default HogsList;
