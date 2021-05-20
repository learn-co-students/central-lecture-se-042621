import logo from './logo.svg';
import './App.css';
import userList from './userList';

// Import our Visible and Invisible components
// import Visible from './components/Visible'
// import Invisible from './components/Invisible'

// Import our createComponent function
import createComponent from './createComponent'

function App() {
  // Use a reference point for our conditional below
  // const isVisible = false;
  
  // if (isVisible) {
  //   return (
  //     <div className="App">
  //       <Visible />
  //     </div>
  //   )
  // } else {
  //   return (
  //     <div className="App">
  //       <Invisible name="Louis" />
  //     </div>
  //   )
  // }

  return (
    <div className="App">

      {/* BREAKOUT #1 - POSSIBLE SOLUTION */}
      {/* { isVisible ? <Visible /> : <Invisible /> } */}

      {/* Loop through JSON data from "data.js" */}
      {/* {data.content.body.map(block => block.component)} */}

      {/* Creating dynamic components using props */}
      {/* Map over each userProfile object within userList and
          pass it down to the First and Second components
          as we create them */}
      {userList.map(userProfile => createComponent(userProfile))}
    </div>
  );
}

export default App;
