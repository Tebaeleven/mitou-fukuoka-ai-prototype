import Object from "@/components/canvas/Objects/Object";
import { easeInOutCubic } from "@/components/canvas/easing/easeInOutCubic";

class Circle extends Object {
    x: any;
    y: any;
    r: any;
    goalX: number;
    goalY: number;
    color: any;
    animateTime: number;
    data: { id: any; shape: string; x: any; y: any; r: any; color: any };
    id: any;
    firstAnimationFrame: number;
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
        this.firstAnimationFrame = 0;
    }
    firstDraw(ctx) {
        let frame=0
        const loop = () => {
            ctx.fillStyle = "#888888";
            ctx.strokeStyle = "white";
            ctx.beginPath();
            frame++
            let t = frame / 60;
            ctx.arc(this.x, this.y, this.r, 0, easeInOutCubic(t)*2 * Math.PI);
            ctx.fill();
            ctx.lineWidth = 3;
            ctx.stroke();
            if (frame<60) {
                requestAnimationFrame(loop);
                
            }

        }
        requestAnimationFrame(loop)
    }
    drawObj(ctx) {
        ctx.fillStyle = "#888888";
        ctx.strokeStyle = "white";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
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