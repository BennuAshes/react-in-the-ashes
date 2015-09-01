import React from "react";

import mui from 'material-ui';
var RaisedButton = mui.RaisedButton;
var ThemeManager = new mui.Styles.ThemeManager();

import ResourceActionCreator from "app/actions/ResourceActionCreator";
import ResourceStore from "app/stores/ResourceStore";

// component-only local variables 
let ResourceUpdateStore = {
    resourceType:"",
    amount: 0
};

class ResourceUpdate extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = this.getState();
        
        this.onChange = this.onChange.bind(this);
        this.resourceTypeChange = this.resourceTypeChange.bind(this);
        this.amountChanged = this.amountChanged.bind(this);
        this.updateResource = this.updateResource.bind(this);
    }
    render() {
        return (
            <div>
                <h2>update resource</h2>
                <RaisedButton label="update resource" onClick={this.updateResource} />                    
                <select onChange={this.resourceTypeChange}>
                    {this.props.resourceNames.map((resource)=>{
                        return (<option value={resource}>{resource}</option>);                    
                    })}
                </select>                
                <input onChange={this.amountChanged} type="number" placeholder="amount" />
            </div>

        );
    }    
    updateResource() {
        ResourceActionCreator.updateResource(this.state.resourceType,this.state.amount);
    }
    amountChanged(event) {
        ResourceUpdateStore.amount = event.target.value;
        // would normally be triggered by store update
        this.onChange();
    }
    getState() {
        // hack for default value :(
        if(typeof ResourceUpdateStore.resourceType === "undefined" || ResourceUpdateStore.resourceType == "") {
            ResourceUpdateStore.resourceType = this.props.resourceNames[0];
        }
        return {
            resourceType:ResourceUpdateStore.resourceType,
            amount: ResourceUpdateStore.amount
        }
    }
    
    onChange() {
        this.setState(this.getState());
    }
    resourceTypeChange(event) {
        ResourceUpdateStore.resourceType = event.target.value;
        // would normally be triggered by store update
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
ResourceUpdate.childContextTypes = {
    muiTheme: React.PropTypes.object
};

export default ResourceUpdate;