import React from 'react';

var energyInterval;

class Generator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            energy:0
        };
        // required by ES6 classes in all class methods NOT
        // normally apart of the React.Component
        // To reiterate: this is not standard ES6 and is not needed for normal ES6 classes
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
    }
    
    /*componentWillMount() {
        
    }*/
    render() {
        return <div>
            energy: {this.state.energy}
            <button onClick={this.start}>start</button>
            <button onClick={this.stop}>stop</button>
        </div>
    }
    
    // needs constructor() bound. some people use a _ to prefix this
    start() {
        this.energyInterval = setInterval(() => {
            this.setState({
                energy: this.state.energy + 1
            });
        },1000);
             
        
    }
    stop() {
        if(this.energyInterval)
            this.energyInterval.cancel();
    }
}

export default Generator;