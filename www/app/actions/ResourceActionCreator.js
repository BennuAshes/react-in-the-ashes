import AppDispatcher from 'app/AppDispatcher';
import Constants from 'app/constants/Constants';

let ResourceActionCreator = {    
    changeResource: (resourceType,amount) => {
        AppDispatcher.handleViewAction({
            actionType: Constants.types.RESOURCE_CHANGE,
            data: {resourceType:resourceType,amount:amount}            
        });
    },
    updateResource:(resourceType,amount) => {
        AppDispatcher.handleViewAction({
            actionType: Constants.types.RESOURCE_CHANGE,
            data: {resourceType:resourceType,amount:amount}            
        });
    },
    activate:() => {
        AppDispatcher.handleViewAction({
            actionType: Constants.types.RESOURCE_ACTIVATE
        });
    }
};


export default ResourceActionCreator;