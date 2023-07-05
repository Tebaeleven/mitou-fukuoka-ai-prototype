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
    color: undefined;

    constructor(x1: number, y1: number, x2: number=x1, y2: number=y1,color: String="white") {
        super();
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;

        this.goalX1 = x1;
        this.goalX2 = x2;
        this.goalY1 = y1;
        this.goalY2 = y2;
        this.color=color
        this.data = {
            id: this.id,
            shape: "line",
            x1: this.x1,
            y1: this.y1,
            x2: this.x2,
            y2: this.y2,
        };
    }
    drawObj(ctx, obj) {
        //線の描画
        ctx.beginPath();
        ctx.moveTo(obj.x1, obj.y1);
        ctx.lineTo(obj.x2, obj.y2);
        ctx.lineWidth = 5;
        ctx.strokeStyle = this.color;
        ctx.stroke();

        // //1つ目の点
        // ctx.fillStyle = "rgba(256, 256, 256, 0.5)";
        // ctx.strokeStyle = "white";
        // ctx.beginPath();
        // ctx.arc(obj.x1, obj.y1, 5, 0, 2 * Math.PI);
        // ctx.fill();
        // ctx.lineWidth = 3;
        // ctx.stroke();

        // //2つ目の点
        // ctx.fillStyle = "rgba(256, 256, 256, 0.5)";
        // ctx.strokeStyle = "white";
        // ctx.beginPath();
        // ctx.arc(obj.x2, obj.y2, 5, 0, 2 * Math.PI);
        // ctx.fill();
        // ctx.lineWidth = 3;
        // ctx.stroke();
    }
    move1(x1: number, y1: number) {
        this.goalX1 = x1;
        this.goalY1 = y1;
        this.setData();
        return this;
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
