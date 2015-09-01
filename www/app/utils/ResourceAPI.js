import Stat from 'app/utils/Stat';

var resources = {
    "gold": new Stat("gold","gold",5)
};

const ResourceAPI = {
    get: () => {
        // this is how the spec is written
        // I'd prefer defer.resolve
        let defer = Promise.resolve(resources);
        return defer;
    },    
    create: (name,value) => {
        resources[name] = new Stat(name,value)
    },
    remove: (name) => {
        throw "ResourceAPI.remove() not implemented";
    }
};

export default ResourceAPI;