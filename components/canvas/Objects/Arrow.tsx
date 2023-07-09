import Object from "@/components/canvas/Objects/Object";

class Allow extends Object {
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
    width: any;

    constructor(
        x1: number,
        y1: number,
        x2: number = x1,
        y2: number = y1,
        color: String = "white"
    ) {
        super();
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;

        this.goalX1 = x1;
        this.goalX2 = x2;
        this.goalY1 = y1;
        this.goalY2 = y2;
        this.color = color;
        this.width=10
        this.data = {
            id: this.id,
            shape: "line",
            x1: this.x1,
            y1: this.y1,
            x2: this.x2,
            y2: this.y2,
        };
    }
    drawObj(ctx) {
        ctx.beginPath();

        let margin = 30;
        let availableLength = this.goalX2 - this.x1;
        let startX = this.x1 + margin;
        let endX =
            startX +
            ((this.x2 - this.x1) * (availableLength - margin * 2)) /
                availableLength;
        if (Math.floor(this.x2 - this.x1) >10) {
            //左
            ctx.moveTo(this.x1 + margin, this.y1 + 10); //最初の点の場所
            ctx.lineTo(this.x1 +10, this.y1); //2番目の点の場所
            ctx.lineTo(this.x1 + margin, this.y1 - 10);
            ctx.closePath();
            ctx.fillStyle = this.color;
            ctx.fill();

            ctx.moveTo(endX  , this.y2 + 10); //最初の点の場所
            ctx.lineTo(endX + 20, this.y2); //2番目の点の場所
            ctx.lineTo(endX  , this.y2 - 10);
            ctx.closePath();
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        

        ctx.moveTo(startX, this.y1);
        ctx.lineTo(endX, this.y2);

        ctx.lineWidth = this.width;
        ctx.strokeStyle = this.color;
        ctx.stroke();
        ctx.beginPath();
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
    set_color(color) {
        this.color = color;
        return this;
    }
    set_width(width) {
        this.width = width
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

export default Allow;
