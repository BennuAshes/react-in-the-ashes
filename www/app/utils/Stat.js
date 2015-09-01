
// TODO: move to own class
class Resource {
    constructor(name,label,value) {
        this.name = name;
        this.label = label;
        this.value = parseFloat(value);
    }
    inc(amount) {
        this.value += parseFloat(amount);
    }
    dec(amount) { 
        this.value -= parseFloat(amount);
    }
}

export default Resource;