import Flux from 'flux';
let Dispatcher = Flux.Dispatcher;

let AppDispatcher = new Dispatcher();

AppDispatcher.handleViewAction = (action) => {
    console.log(action);
    return AppDispatcher.dispatch({
        action:action,
        source:'VIEW_ACTION'        
    });

}

export default AppDispatcher;