class Square {
    static idCounter = 1;

    constructor(x, y, size, color) {
        this.id = Square.idCounter++;
        this.x = x
        this.y=y
        this.color=color
        this.data = {
            id: this.id,
            shape: "cube",
            x: x,
            y: y,
            color: color,
        };
    }
    move(x, y) {

        this.data = {
            id: this.id,
            shape: "cube",
            x: this.x,
            y: this.y,
            goalX: x,
            goalY: y,
            color: this.color,
        };

        return this
    }


    // Circle(x,y,r,color,strokeColor) {
    //     this.id++;
    //     let circleObject = {
    //         id: this.id,
    //         shape: "circle",
    //         x: x,
    //         y: y,
    //         r: r,
    //         color: color,
    //         strokeColor: strokeColor,
    //     };
    //     return circleObject;
    // }
}

export default Square;