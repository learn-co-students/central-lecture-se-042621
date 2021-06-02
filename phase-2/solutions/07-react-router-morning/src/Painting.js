import React from 'react';

// Import React Router components to conditionally render buttons based upon URL
import { Link, Switch, Route } from 'react-router-dom';

class Painting extends React.Component{

  constructor(props){
    super()
    this.state = {
      votes: props.painting.votes
    }
  }

  addVote = () => {
    this.setState({
      votes: this.state.votes + 1
    })
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.votes < this.state.votes){
      console.log("Painting got a new vote!")
    }
  } 

  render(){
    return (
      <div>
        <img src={this.props.painting.image} />
        <h4>
          "{this.props.painting.title}" by {this.props.painting.artist.name}
        </h4>
        <p>Year: {this.props.painting.date}</p>
        <p>
          Dimensions: {this.props.painting.dimensions.width} in. x {this.props.painting.dimensions.height} in.
        </p>

        <div className="ui labeled button" tabIndex="0">
          <div className="ui red button" onClick={this.addVote}>
            <i className="heart icon"></i> Add Vote
          </div>
          <a className="ui basic red left pointing label">
            {this.state.votes}
          </a>
        </div>

        {/* Add Switch to display different Links based upon current URL */}
        <Switch>
          <Route path={`/paintings/${this.props.painting.id}`}>
            <Link to='/paintings'>Go Back</Link>
          </Route>
          <Route path='/paintings'>
            <Link to={`/paintings/${this.props.painting.id}`}>
              View Painting
            </Link>
          </Route>
        </Switch>
      </div>
    );
  }
  
};

export default Painting;
