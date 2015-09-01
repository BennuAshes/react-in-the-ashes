/* A cost for a generator. It requires [amount] of [resourceType] to create this generator */

// what resource type it produces
// what it costs to make a new one?
// what was used to make this generator
// how much has been generated

class Cost {
    constructor(resourceType,amount) {
        this.resourceType = resourceType;
        this.amount = amount;
    }    
}

export default Cost;