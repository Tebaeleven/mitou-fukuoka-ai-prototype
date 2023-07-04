import Object from "@/components/canvas/Objects/Object";

class Circle extends Object {
    constructor(x, y, r, color) {
        super();
        this.x = x;
        this.y = y;
        this.r = r;
        this.goalX = 0;
        this.goalY = 0;
        this.color = color;
        this.animateTime = 60;
        this.data = {
            id: this.id,
            shape: "circle",
            x: x,
            y: y,
            r: r,
            color: color,
        };
    }
    drawObj(ctx, obj) {
        ctx.fillStyle = "rgba(256, 256, 256, 0.5)";
        ctx.strokeStyle = "white";
        ctx.beginPath();
        ctx.arc(obj.x, obj.y, obj.r, 0, 2 * Math.PI);
        ctx.fill();
        ctx.lineWidth = 3;
        ctx.stroke();
    }
    move(x, y) {
        this.goalX = x;
        this.goalY = y;
        this.setData();
        return this;
    }
    time(t) {
        this.animateTime = t;
        this.setData();
        this.animateTime = 60;
        return this;
    }
    setData() {
        this.data = {
            id: this.id,
            shape: "circle",
            x: this.x,
            y: this.y,
            r: this.r,
            goalX: this.goalX,
            goalY: this.goalY,
            color: this.color,
            animateTime: this.animateTime,
        };
    }
}

export default Circle;
