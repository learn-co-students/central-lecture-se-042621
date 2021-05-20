import React from 'react';

class Toggle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isToggleOn: false
        };
        
        // Set up binding for the event behavior
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        if (this.props.type == "heart") {
            return (
                <button onClick={ this.handleClick }>
                    { this.state.isToggleOn ? '❤️' : '♡' }
                </button>
            );
        } else {
            return (
                <button onClick={ this.handleClick }>
                    { this.state.isToggleOn ? 'Remove From Cart' : 'Add to Cart' }
                </button>
            );
        }
    }
}

export default Toggle;