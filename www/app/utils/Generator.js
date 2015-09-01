class Generator {    
    constructor(resourceType,costs,amount) {
        this.resourceType = resourceType;
        this.costs = costs;
        this.amount = amount; // incremental amount
        this.tickInterval;
        this.storage = 0; // of type this.resourceType
    }    
    
    start() {
        this.stop();
        
        this.tickInterval = setInterval(() => {
            this.storage += this.amount;
        },6000);
    }
    
    stop() {
        clearInterval(this.tickInterval);
    }
    
    getStorage(amount) {
        if(this.storage - amount  <= 0) {
            amount = 0;
        }
        this.storage -= amount;
        
        return amount;
    }
}

export default Generator;