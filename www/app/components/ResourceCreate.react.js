import React from "react";

import ResourceActionCreator from "app/actions/ResourceActionCreator";
import ResourceStore from "app/stores/ResourceStore";
import mui from 'material-ui';
var RaisedButton = mui.RaisedButton;
var ThemeManager = new mui.Styles.ThemeManager();

let ResourceCreateStore = {
    newResourceType: ""
};

class ResourceCreate extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        ResourceStore.addChangeListener(this.onChange);
        this.newResourceTypeChanged = this.newResourceTypeChanged.bind(this);
        this.newResource = this.newResource.bind(this);
    }
    render() {
        return (
            <div>
                <h2>new resource</h2>
                <RaisedButton label="new resource" onClick={this.newResource} />
                <input onChange={this.newResourceTypeChanged} type="text" placeholder="new resource" />
            </div>

        );
    }    
    newResourceTypeChanged(event) {
        ResourceCreateStore.newResourceType = event.target.value;
        
        this.onChange();
    }
    getState() {
        return {
            newResourceType:ResourceCreateStore.newResourceType
        }
    }
    onChange() {
        this.setState(this.getState());
    }
    newResource(event) {
        ResourceActionCreator.updateResource(this.state.newResourceType,0);        
        ResourceCreateStore.newResourceType
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