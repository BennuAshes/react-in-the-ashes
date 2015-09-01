import React from 'react';

import Generator from "app/components/Generator.react";
import GeneratorStore from 'app/stores/GeneratorStore';
import GeneratorActionCreator from 'app/actions/GeneratorActionCreator';

class Generators extends React.Component {
    constructor(props) {      
        super(props);                
    }   
    
    render() {
        return (
            <div>
                <h2>generators</h2>
                <ul>
                    {this.props.generators.map((generator) => { 
                        return (<Generator generator={generator} />);
                    })}
                </ul>
            </div>
        );
    }
}


export default Generators;


/*<div>
                    <h2>generators</h2>
                    <ul>
                        {this.state.generators.map((generator) => {
                            return (
                                <li>{generator}</li>
                            );                        
                        })}
                    </ul>
                </div>*/