import AppDispatcher from "app/AppDispatcher";
import FluxStore from "app/utils/FluxStore";
import Constants from "app/constants/Constants";
import Stat from "app/utils/Stat";
import ResourceAPI from "app/utils/ResourceAPI";

let resources = {};

// TODO: Move to store class
import EventEmitter from "node-event-emitter";
// assign, extend, or param. but for now...just kinda stashing it in the module
var eventEmitter = new EventEmitter();

// the actual store, which can only retrieve data
let ResourceStore = {
    get: () => {
        return resources;
    },
    getNames: () => {
        var names = [];
        for(let key in resources) {
            names.push(key);
        }
        
        return names;
    },
    addChangeListener: (callback) => {
        eventEmitter.on(Constants.types.RESOURCE_CHANGE,callback);
    },
    removeChangeListener: () => {
        eventEmitter.off(Constants.types.RESOURCE_CHANGE,callback);
    }
};

//let CharacterStore = new FluxStore();

AppDispatcher.register(function(payload) {
    var action = payload.action;
    console.log('delivered payload to charStore',payload);
    switch(action.actionType) {
        // TODO: is this good practice?
        case Constants.types.RESOURCE_ACTIVATE:
            // TODO: could emit request submitted?
            ResourceAPI.get().then((apiResponse) => {
                resources = apiResponse;            
                eventEmitter.emit(Constants.types.RESOURCE_CHANGE);
            });            
        break;       
        case Constants.types.RESOURCE_CHANGE:
            console.log('ResourceStore CHANGE HAPPENING:',action);
            if(!resources.hasOwnProperty(action.data.resourceType)) {
                let stat = new Stat(action.data.resourceType,action.data.resourceType,0)
                //stat.key = stat.name;
                resources[action.data.resourceType] = stat;
            }
            resources[action.data.resourceType].inc(action.data.amount);
            
            eventEmitter.emit(Constants.types.RESOURCE_CHANGE);
        break;        
       
    }
});

export default ResourceStore;