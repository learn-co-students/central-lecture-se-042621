import React, { Component } from "react";

class Hog extends Component {
  constructor() {
    super();

    this.state = {
      specialty: ''
    }

    // bind click behavior
    this.showSpecialty = this.showSpecialty.bind(this);
  }

  async showSpecialty() {
    try {
      const promise = await fetch(`http://localhost:5000/hogs/${this.props.hogObject.id}`);
      const json = await promise.json();
      
      this.setState({
        specialty: json.specialty,
      });

    } catch (err) {
        console.log(err);
    }
  }

  render() {
    return (
      <div>
          <button onClick={this.showSpecialty}>
            Click to See Specialty
          </button>
          <br />
          <br />
          <p>{this.props.hogObject.name}</p>
          <p>{this.state.specialty}</p>
          <br />
      </div>
    );
  }
}

export default Hog;
