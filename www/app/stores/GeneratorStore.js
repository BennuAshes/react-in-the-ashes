import AppDispatcher from "app/AppDispatcher";
import FluxStore from "app/utils/FluxStore";
import Constants from "app/constants/Constants";
import Stat from "app/utils/Stat";
import GeneratorAPI from "app/utils/GeneratorAPI";
import Generator from "app/utils/Generator";

// TODO: move to API
var generators = [];

import EventEmitter from "node-event-emitter";
// assign, extend, or param. but for now...just kinda stashing it in the module
var eventEmitter = new EventEmitter();



// the actual store, which can only retrieve data
let GeneratorStore = {
    get: () => {
        return generators;
    },
    addChangeListener: (callback) => {
        eventEmitter.on(Constants.types.GENERATOR_CHANGE,callback);
    },
    removeChangeListener: () => {
        eventEmitter.off(Constants.types.GENERATOR_CHANGE);
    }
};

AppDispatcher.register(function(payload) {
    var action = payload.action;
    console.log('delivered payload to charStore',payload);
    switch(action.actionType) {
        // TODO: is this good practice?
        case Constants.types.GENERATOR_ACTIVATE:
            // TODO: could emit request submitted?
            eventEmitter.emit(Constants.types.GENERATOR_CHANGE);
            
        break;       
        case Constants.types.GENERATOR_CREATE:
            
        
            console.log('GeneratorStore CHANGE HAPPENING:',action);
            if(!generators.hasOwnProperty(action.data.resourceType)) {
                // create costs based on 
                let costs = [];
                let generator = new Generator(action.data.resourceType,costs,0.1);
                //stat.key = stat.name;
                generators.push(generator);
                generator.start();
            }
            
            
            eventEmitter.emit(Constants.types.GENERATOR_CHANGE);
        break;        
       
    }
});

export default GeneratorStore;