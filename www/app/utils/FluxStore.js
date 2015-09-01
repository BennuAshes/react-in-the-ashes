// TODO: actually implement this

import EventEmitter from 'node-event-emitter';

class FluxStore extends EventEmitter {
    constructor(data) {
        super();
        this.data = data;
        this.eventTypes = [];
    }
    addChangeListener(eventType) {
        this.eventTypes.push(eventType);
        super.on(Constants.types.RESOURCE_CHANGE,callback);
        //super.on(Constants.types.RESOURCE_CHANGE,callback);
    }
    removeChangeListener() {
        // super.off(
    }
    get() {
        return data;
    }
}

export default FluxStore;