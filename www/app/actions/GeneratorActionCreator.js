import AppDispatcher from 'app/AppDispatcher';
import Constants from 'app/constants/Constants';

let GeneratorActionCreator = {    
    newGenerator:(resourceType) => {
        // before we can get a new generator, first need to get the current resources and waitFor the data for it,
        AppDispatcher.handleViewAction({
            actionType: Constants.types.GENERATOR_CREATE,
            data: {resourceType:resourceType}            
        });
    },
    activate:() => {
        // no idea how to organize
        GeneratorAPI.get().then((apiResponse) => {
            generators = apiResponse;            
            AppDispatcher.handleViewAction({
                actionType: Constants.types.GENERATOR_ACTIVATE
            });        
        });            
        
    }
};


export default GeneratorActionCreator;