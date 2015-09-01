/* 
Intent: Calls to connect to the data source for the Generator entity 

*/

import Generator from "app/utils/Generator";


var generators = [];

const GeneratorAPI = {
    get: () => {
        // this is how the spec is written
        // I'd prefer defer.resolve
        let defer = Promise.resolve(generators);
        return defer;
    },    
    create: (resourceType,costs,amount) => {
        generators.push(new Generator(resourceType,costs,amount));
    },
    remove: (name) => {
        throw "GeneratorAPI.remove() not implemented";
    }
};

export default GeneratorAPI;