import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
// import hogs from "../porkers_data";
import HogsList from "./HogsList";

//  1.  introduction / explanation
//        - explain how we have already been passing PURE JS data
//          directly via props, now we will do it via "fetch" using
//          JSON
//        - i have converted "porkers_data.js" to "porkers_data.JSON"
//          to show the syntax changes that we need to make
//        - after running "npm install", we should have json-server +
//          Material UI available to use within our apps
//  2.  use componentDidMount() to invoke (fetch)
//        - App.js (modify)
//        - HogsList.js (create)
//        - Hog.js (create)
//  3.  Dissect fetch response and demonstrate good habits
//        - console.log the response, use .catch for error handling
//  4.  Set state with fetch response
//        - Hog.js (modify)
//  5.  Display data to DOM after componentDidMount() invocation
//  6.  Use DOM to trigger a fetch request
//        - Hog.js (modify)    
//          - Create event
//          - Pass callback
//          - Use callback to invoke fetch
//          - Do something with data returned

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
      const promise = await fetch('http://localhost:5000/hogs');
      const json = await promise.json();

      this.setState({
        hogs: json
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
