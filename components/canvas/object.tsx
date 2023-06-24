class Object {
    id: number;
    constructor() {
        this.id=0
    }
    Square(x, y, size,color) {
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

    Circle(x,y,r,color,strokeColor) {
        this.id++;
        let circleObject = {
            id: this.id,
            shape: "circle",
            x: x,
            y: y,
            r: r,
            color: color,
            strokeColor: strokeColor,
        };
        return circleObject;
    }
}

export default Object