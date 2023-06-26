class Object{
    static counter = 1
    
    constructor() {
        this.id = Object.counter++;
    }
}

export default Object