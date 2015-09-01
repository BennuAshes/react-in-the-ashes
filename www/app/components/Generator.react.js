import React from 'react';

class Generator extends React.Component {
    
    constructor(props) {      
        super(props);
    }   
   render() {
        var costs = [];        
        
        return (
            <div>        
                <h3>Generator({this.props.generator.resourceType})</h3>
                
                <ul>                    
                    {this.props.generator.costs.map((cost) => {
                        return (
                            <li>{cost}</li>
                        );                
                    })}
                </ul>
            </div>
        );
    }
}

export default Generator;