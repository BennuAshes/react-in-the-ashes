import React from 'react';
import mui from 'material-ui';
var RaisedButton = mui.RaisedButton;
//console.log('gen.js: ',mui,RaisedButton);
var ThemeManager = new mui.Styles.ThemeManager();

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
        // this.getChildContext = this.getChildContext.bind(this);
        //this.childContextTypes = this.childContextTypes.bind(this);
    }
    
    componentWillMount() {
        // this.setState({energy:0});
    }
    componentWillUnmount() {
        if(this.energyInterval)
            clearInterval(this.energyInterval);
    }
    
    getChildContext() {
        return {
          muiTheme: ThemeManager.getCurrentTheme()
        };
    }
    
    render() {
        return <div>
            energy: {this.state.energy}
            <RaisedButton label="start" onClick={this.start} />
            <RaisedButton label="stop" onClick={this.stop} />
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
            clearInterval(this.energyInterval);
    }
}

// static properties not supported
// TODO: try a get/set with this name
// that returns a module-level object?
Generator.childContextTypes = {
    muiTheme: React.PropTypes.object
};
export default Generator;