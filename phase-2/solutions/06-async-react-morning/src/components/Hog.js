import React, { Component } from "react";

class Hog extends Component {
    constructor() {
        super();

        this.state = {
            specialty: '',
            medal: ''
        }

        // bind showSpecialty / showMedal functions to 
        // the Component instance (context)
        this.showSpecialty = this.showSpecialty.bind(this);
        this.showMedal = this.showMedal.bind(this);
    }
  
    // define async function to handle "specialty" state
    async showSpecialty() {
        try {
            const promise = await fetch(`http://localhost:5000/hogs/${this.props.hogObject.id}`)
            const json = await promise.json();

            this.setState({
                specialty: json.specialty
            });
        } catch (err) {
            console.log(err);
        }
    }

    // define async function to handle "medal" state
    async showMedal() {
        try {
            const promise = await fetch(`http://localhost:5000/hogs/${this.props.hogObject.id}`)
            const json = await promise.json();

            this.setState({
                medal: json["highest medal achieved"]
            });
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        // console.log(this.state.specialty);
    
        return (
            <div>
                <br />
                <h2>{this.props.hogObject.name}</h2>
                <p>{this.state.specialty}</p>
                <button onClick={this.showSpecialty}>Show Hog Specialty</button>
                <br /><br />
                <p>{this.state.medal}</p>
                <button onClick={this.showMedal}>Show Hog Medal</button>
            </div>
        );
    }
}

export default Hog;
