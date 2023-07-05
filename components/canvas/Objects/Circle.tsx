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
    isShow: string;
    firstAnime: number;
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
        this.isShow = "hide";
        this.firstAnime=0
    }
    drawObj(ctx) {
        let animationTime = 60;
        ctx.fillStyle = "#888888";
        ctx.strokeStyle = "white";
        ctx.beginPath();
        let t = this.firstAnime / animationTime;
        ctx.arc(
            this.x,
            this.y,
            this.r,
            0,
            easeInOutCubic(t) * 2 * Math.PI
        );
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