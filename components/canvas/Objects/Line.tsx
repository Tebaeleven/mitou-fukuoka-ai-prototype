import Object from "@/components/canvas/Objects/Object";

class Line extends Object {
    x1: number;
    x2: number;
    y1: number;
    y2: number;
    goalX1: number;
    goalX2: number;
    goalY1: number;
    goalY2: number;
    data: {
        id: any;
        shape: string;
        x1: number;
        y1: number;
        x2: number;
        y2: number;
        goalX1: number;
        goalX2: number;
        goalY1: number;
        goalY2: number;
        animateTime: number;
    };

    constructor(x1: number, y1: number, x2: number, y2: number) {
        super();
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;

        this.goalX1 = 0;
        this.goalX2 = 0;
        this.goalY1 = 0;
        this.goalY2 = 0;
        this.data = {
            id: this.id,
            shape: "line",
            x1: this.x1,
            y1: this.y1,
            x2: this.x2,
            y2: this.y2,
        };
    }
    move1(x1: number, y1: number) {
        this.goalX1 = x1;
        this.goalY1 = y1;
        this.setData();
        return this
    }
    move2(x2: number, y2: number) {
        this.goalX2 = x2;
        this.goalY2 = y2;
        this.setData();
        return this;

    }

    setData() {
        this.data = {
            id: this.id,
            shape: "line",
            x1: this.x1,
            y1: this.y1,
            x2: this.x2,
            y2: this.y2,
            goalX1: this.goalX1,
            goalX2: this.goalX2,
            goalY1: this.goalY1,
            goalY2: this.goalY2,
            animateTime: 60,
        };
    }
}

export default Line;
