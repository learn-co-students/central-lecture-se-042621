import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
// import hogs from "../porkers_data";
import HogsList from "./HogsList";

//  1.  begin with importing data and console.log to confirm
//      - explain how we have already been passing PURE JS data
//        directly via props, now we will do it via "fetch" using
//        JSON
//      - i have converted "porkers_data.js" to "porkers_data.JSON"
//        to show the syntax changes that we need to make
//      - after running "npm install", we should have json-server +
//        Material UI available to use within our apps


// 

class App extends Component {
  
  // if you don’t initialize state and you don’t bind methods, 
  // you don’t need to implement a constructor for your React 
  // component
  constructor() {
    super();

    // set states that we will use for componentDidMount()
    this.state = {
      // error: null,
      // isLoaded: false,
      hogs: []
    };
  }

  //  forces return type to be Promise<void> and allows
  //  us to use "await" keywords inside method 
  //
  //  async/await are syntactical sugar over Promises
  async componentDidMount() {

    try {
      const jsonPromise = await fetch('http://localhost:5000/hogs');
      this.setState({
        hogs: await jsonPromise.json(),
      });
    } catch (err) {
        console.log(err);
    }

    // OLD STYLE

    // fetch("http://localhost:5000/porkers_data.js")
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       this.setState({
    //         isLoaded: true,
    //         pigs: result.hogs
    //       });
    //     },
    //     // Note: it's important to handle errors here
    //     // instead of a catch() block so that we don't swallow
    //     // exceptions from actual bugs in components.
    //     (error) => {
    //       this.setState({
    //         isLoaded: true,
    //         error
    //       });
    //     }
    //   )
  }
  
  render() {
    return (
      <div className="App">
        <Nav />
        <HogsList hogs={this.state.hogs}/>
      </div>
    );
  }
}

export default App;
