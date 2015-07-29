import AppDispatcher from 'app/AppDispatcher';
import GeneratorConstants from 'app/constants/GeneratorConstants';

let GeneratorActions = {
    increaseEnergy() {
        AppDispatcher.handleViewAction({
            actionType: GeneratorConstants.types.ENERGY_CHANGE
            //,data: {}            
        });
    },
    startGenerator() {
        AppDispatcher.handleViewAction({
            actionType: GeneratorConstants.types.START_GENERATOR
            //,data: {}            
        });
    },
    stopGenerator() {
        AppDispatcher.handleViewAction({
            actionType: GeneratorConstants.types.STOP_GENERATOR
            //,data: {}            
        });
    }
};


export default GeneratorActions;