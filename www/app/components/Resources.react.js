import React from 'react';

import Resource from "app/components/Resource.react";
import ResourceStore from 'app/stores/ResourceStore';
import ResourceActionCreator from 'app/actions/ResourceActionCreator';

class Resources extends React.Component {
    constructor(props) {      
        super(props);                
    }   
    
    render() {
        var resources = [];
        for(let key in this.props.resources) {
            resources.push(this.props.resources[key]);
        }
        return (
            <ul>
                {resources.map(function(resource) { 
                    return (<Resource resource={resource} />);
                })}
            </ul>
        );
    }
}


export default Resources;