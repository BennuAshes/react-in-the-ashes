import React from 'react';
import Generator from './Generator.react';

class Container extends React.Component {
    constructor(props) {      
        super(props);
    }    
    
    componentWillMount() {
        // this.setState({energy:0});
    }
    
    componentWillUnmount() {
     
    }
    
    render() {
        return <Generator />
    }
}


export default Container;