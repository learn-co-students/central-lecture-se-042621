import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
// import hogs from "../porkers_data";
// import HelloWorld from "./HelloWorld";
import HogsList from './HogsList';

class App extends Component {
  constructor() {
    super();

    // set "hogs" state to hold
    // all hog objects
    this.state = {
      hogs: []
    }
  }
  
  // create async func to fetch all hog objects
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

  async componentDidMount() {
    
    // try to retrieve hog info
    try {
      // if successful, store hog
      // info into "hogs" state
      const promise = await fetch('http://localhost:5000/hogs');
      const json = await promise.json();

      this.setState({
        hogs: json
      });
    } catch(err) {
      // if unsuccessful, throw
      // an error
      console.log(err);
    }
  }
  
  render() {
    // console.log(this.state.hogs);

    return (
      <div className="App">
        <Nav />
        {/* HogsList */}
        <HogsList hogs={this.state.hogs} />
      </div>
    );
  }
}

export default App;
