import React from 'react'
import 'semantic-ui-css/semantic.min.css';
import PaintingsPage from './PaintingsPage';
import NavBar from './NavBar';

// Add Router imports necessary for main Routes
import {  
  Switch, 
  Route
} from 'react-router-dom';

// Add placeholder components for Home and About
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};

// Breakout Activity One

const Paintings = () => {
  return (
    <div>
      <h1>Paintings</h1>
    </div>
  );
};

class App extends React.Component{

  constructor(){
    super()
    this.state = {
      color: "red",
      paintings: [],
      formView: false
    }
  }

  componentDidMount(){
    fetch("http://localhost:3001/paintings")
    .then(res => res.json())
    .then(paintings => this.setState({ paintings })) 
  }

  changeColor = () => {
    this.setState({color: "yellow"})
  }

  toggleForm = () => {
    this.setState({
      formView: !this.state.formView
    })
  }

  addPainting = (info) => {
    // console.log(info)

    const newPainting = {
      // id: this.state.paintings[this.state.paintings.length-1].id + 1, to get rid of "key" warning
      image: info.image,
      title: info.title,
      artist: {
        name: info.artist
      },
      date: info.date,
      dimensions: {
        width: info.width,
        height: info.height
      },
      votes: 0 //add initial votes for a painting
    } // to match painting data format

    this.setState({
      paintings: [...this.state.paintings, newPainting], 
      formView: !this.state.formView //to display paintings after adding a new painting info
    })


  }

  render(){
    return (
      <div>
        <NavBar
          color="red"
          title="Paintr"
          icon="paint brush"
          description="an app we made"
        />

        {/* Using "Route" with exact paths */}
        {/* <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} /> */}

        {/* Caution: Switch renders the first matching Route */}
        <Switch>
          {/* BREAKOUT ACTIVITY #1 */}
          {/* <Route path="/paintings" component={Paintings} /> */}
          
          {/* passing props to "PaintingsPage" container*/}
          <Route 
            path="/paintings" 
            render={routerProps => <PaintingsPage {...routerProps} paintings={this.state.paintings}/>} 
          />

          <Route path="/about" component={About} />
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    )
  }
}

export default App;
