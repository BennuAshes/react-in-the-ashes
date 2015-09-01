import React from 'react';

class Resource extends React.Component {
    
    constructor(props) {      
        super(props);        
        console.log("resource.react props",props);
    }   
   render() {
        return (
        
            <li>{this.props.resource.label}: {this.props.resource.value}</li>
        );
    }
}

export default Resource;