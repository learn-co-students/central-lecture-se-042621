import React from 'react'

// https://semantic-ui.com/
import 'semantic-ui-css/semantic.min.css';

import NavBar from './NavBar';
import PaintingsList from './PaintingsList';
import paintings from './painting_data'
import PaintingForm from './PaintingForm'


class App extends React.Component{

  constructor(){
    
    // ReferenceError: Must call super constructor in 
    // derived class before accessing 'this' or returning 
    // from derived constructor.
    super()

    this.state = {
      color: "red",
      paintings: paintings,
      formView: false
    }
  }

  // Create function to toggle form (toggleForm)
  // ...

  // Create function to change Parent's "color" state (changeColor)
  // ...

  render(){
    return (
      <div>
        <NavBar
          color={this.state.color}
          title="Paintr"
          icon="paint brush"
          description="an app we made"

          // Pass changeColor() as prop to NavBar
          // ...
        />

        {/* Add toggleForm click behavior */}
        <button>Show/Hide New Painting Form</button>

        {/* Render PaintingForm or PaintingsList Components based upon toggleForm */}
        {/* ... */}
      
        <PaintingsList paintings={this.state.paintings} />
      </div>
    );
  }
}

export default App;
