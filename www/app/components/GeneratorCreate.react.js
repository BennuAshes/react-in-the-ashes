import React from "react";

import ResourceActionCreator from "app/actions/ResourceActionCreator";
import ResourceStore from "app/stores/ResourceStore";
import GeneratorActionCreator from "app/actions/GeneratorActionCreator";

import mui from 'material-ui';
var RaisedButton = mui.RaisedButton;
var ThemeManager = new mui.Styles.ThemeManager();

let GeneratorCreateStore = {
    newResourceType: ""
};

class ResourceCreate extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        ResourceStore.addChangeListener(this.onChange);
        this.newResourceTypeChanged = this.newResourceTypeChanged.bind(this);
        this.newGenerator = this.newGenerator.bind(this);
    }
    render() {
        return (
           <div>
                <h2>new generator</h2>
                <RaisedButton label="new generator" onClick={this.newGenerator} />
                <select onChange={this.newResourceTypeChanged}>
                    {this.props.resourceNames.map((resource)=>{
                        return (<option value={resource}>{resource}</option>);                    
                    })}
                </select>                
            </div>

        );
    }    
    newResourceTypeChanged(event) {
        GeneratorCreateStore.newResourceType = event.target.value;
        
        this.onChange();
    }
    getState() {
        return {
            newResourceType:GeneratorCreateStore.newResourceType
        }
    }
    onChange() {
        this.setState(this.getState());
    }
    newGenerator(event) {
        GeneratorActionCreator.newGenerator(this.state.newResourceType,0);
        this.onChange();
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
ResourceCreate.childContextTypes = {
    muiTheme: React.PropTypes.object
};

export default ResourceCreate;