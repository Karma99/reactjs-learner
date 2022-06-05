import React from 'react';

export default class Toggle extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    
        // This binding is necessary to make `this` work in the callback    
        this.handleClick = this.handleClick.bind(this, new Date().toLocaleTimeString());  
    }
    
    handleClick(t) {    
        console.log(t);
        this.setState(prevState => ({ isToggleOn: !prevState.isToggleOn }));  
    }
    
    render() {
        return (
            <button onClick={this.handleClick} className="button-toggle">  
                <span>{this.state.isToggleOn ? 'On' : 'Off'}</span>
            </button>
        );
    }
}