import AppDispatcher from 'app/AppDispatcher';
import EventEmitter from 'node-event-emitter';
// import 

import GeneratorConstants from 'app/constants/GeneratorConstants';

var eventEmitter = new EventEmitter();
var data = {energy:0}; // get from server with API and promises?

// EnergyAPI.get().then(function(response) { data.energy = response.energy });

var EnergyStore = {
    get: () => {
        return data;
    },
    addChangeListener: (callback) => {
        eventEmitter.on(GeneratorConstants.types.ENERGY_CHANGE,callback);
    },
    removeChangeListener: () => {
        eventEmitter.off(GeneratorConstants.types.ENERGY_CHANGE,callback);
    }
};

// This seems to form a whole secondary module
// - some kind of EnergyStoreDispatcher, maybe moved to a dispatchIndex referenced in another sample

var energyInterval;

function startGenerator() {
    if(!energyInterval) {
        //clearInterval(this.energyInterval);
        energyInterval = setInterval(() => {
            increaseEnergy();
        },1000);
        
        eventEmitter.emit(GeneratorConstants.types.START_GENERATOR);
    }
    
}

function stopGenerator() {
    clearInterval(energyInterval);
    eventEmitter.emit(GeneratorConstants.types.STOP_GENERATOR);
}

function increaseEnergy() {
    data.energy++;
    // emitter.emit();
    eventEmitter.emit(GeneratorConstants.types.ENERGY_CHANGE);
}

AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.actionType) {
        case GeneratorConstants.types.ENERGY_CHANGE:
            increaseEnergy();
        break;        
        case GeneratorConstants.types.START_GENERATOR:
            startGenerator();
            
        break;        
        case GeneratorConstants.types.STOP_GENERATOR:
            stopGenerator();            
        break;
    }
});

export default EnergyStore;