class Object {
    constructor() {
        this.id=0
    }
    Square(x, y, size,color) {
        var min = 1;
        var max = 10;
        // var id = Math.floor(Math.random() * (max + 1 - min)) + min;
        this.id++
        let cubeObj = {
            id: this.id,
            shape: "cube",
            x: x,
            y: y,
            color:color
        };
        return cubeObj;
    }
}

export default Object