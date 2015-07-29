import React from 'react';

import mui from 'material-ui';
var RaisedButton = mui.RaisedButton;
var ThemeManager = new mui.Styles.ThemeManager();

import EnergyStore from 'app/stores/EnergyStore';
import GeneratorActions from 'app/actions/GeneratorActions';
class Generator extends React.Component {
    render() {
        return <div>
            energy: {this.state.energy}
            <RaisedButton label="start" onClick={this.start} />
            <RaisedButton label="stop" onClick={this.stop} />
            <RaisedButton label="inc" onClick={this.inc} />
        </div>
    }
    constructor(props) {
      
        super(props);
        
        this.state = this.getGeneratorState();
        // required by ES6 classes in all class methods NOT
        // normally apart of the React.Component
        // To reiterate: this is not standard ES6 and is not needed for normal ES6 classes
        // This is referred to as a "stopgap" - https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.onChange = this.onChange.bind(this);
        // this.getChildContext = this.getChildContext.bind(this);
        //this.childContextTypes = this.childContextTypes.bind(this);
    }    
    componentWillMount() {
        // this.setState({energy:0});
        EnergyStore.addChangeListener(this.onChange);
    }
    componentWillUnmount() {
        if(this.energyInterval)
            clearInterval(this.energyInterval);
        
        EnergyStore.removeChangeListener(this.onChange);
    }
    
    
    
    // TODO: GeneratorActions.increaseEnergy()
    start () {
        GeneratorActions.startGenerator();
    }
    stop () {
        GeneratorActions.stopGenerator();
    }
    inc() {
        GeneratorActions.increaseEnergy();
    }
    getGeneratorState() {
        return {
            energy: EnergyStore.get()
        }
    }
    onChange() {
        this.setState(this.getGeneratorState());
    }
    
    
    getChildContext() {
        return {
          muiTheme: ThemeManager.getCurrentTheme()
        };
    }
}

// static properties not supported
// TODO: try a get/set with this name
// that returns a module-level object?
Generator.childContextTypes = {
    muiTheme: React.PropTypes.object
};

export default Generator;