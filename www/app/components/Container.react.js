// View-Controller
import React from 'react';


import ResourceStore from "app/stores/ResourceStore";
import GeneratorStore from "app/stores/GeneratorStore";

import Resources from './Resources.react';
import GeneratorCreate from "./GeneratorCreate.react";
import Generators from "./Generators.react";
import ResourceCreate from "./ResourceCreate.react";
import ResourceUpdate from "./ResourceUpdate.react";

import ResourceActionCreator from 'app/actions/ResourceActionCreator';
import Constants from "app/constants/Constants";

import mui from 'material-ui';
var RaisedButton = mui.RaisedButton;
var ThemeManager = new mui.Styles.ThemeManager();


class Container extends React.Component {
    render() {
        
        return (
            <div>
                <Resources resources={this.state.resources} />
                <ResourceUpdate resourceNames={this.state.resourceNames} />
                <ResourceCreate />
                <GeneratorCreate resourceNames={this.state.resourceNames} />
                <Generators generators={this.state.generators} />
            </div>
        );
    }
    constructor(props) {      
        super(props);                
        
        this.state = this.getState();        
        
        this.onChange = this.onChange.bind(this);
        
        ResourceStore.addChangeListener(this.onChange);        
        ResourceActionCreator.activate(); // sets some initial resources        
    }   
    componentWillUnmount() {
        ResourceStore.removeChangeListener(this.onChange);
    }
  
    
    
    getState() {
        return {
            resources: ResourceStore.get(),
            resourceNames: ResourceStore.getNames(),
            generators: GeneratorStore.get()
        };
    }    
    
    onChange() {
        this.setState(this.getState());
    }
    
    // material-ui
    getChildContext() {
        return {
          muiTheme: ThemeManager.getCurrentTheme()
        };
    }
}

// static properties not supported
// TODO: try a get/set with this name
// that returns a module-level object?
Container.childContextTypes = {
    muiTheme: React.PropTypes.object
};

export default Container;