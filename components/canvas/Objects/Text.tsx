import Object from "@/components/canvas/Objects/Object";
import { easeInOutCubic } from "../easing/easeInOutCubic";

class Text extends Object {
    x: any;
    y: any;
    goalX: number;
    goalY: number;
    color: any;
    animateTime: number;
    id: any;
    isShow: string;
    firstAnime: number;
    size: any;
    text: any;
    constructor(
        x: number,
        y: number,
        text: number | string= 1.0,
        size: number,
        color: string
    ) {
        super();
        this.x = x;
        this.y = y;
        this.text = text;
        this.size = size;
        this.goalX = 0;
        this.goalY = 0;
        this.color = color;
        this.animateTime = 60;
        this.data = {
            id: this.id,
            shape: "text",
            x: x,
            y: y,
            color: color,
        };
        this.isShow = "hide";
        this.firstAnime = 0;
    }
    drawObj(ctx: {
        fillStyle: any;
        font: string;
        measureText: (arg0: any) => any;
        fillText: (arg0: any, arg1: number, arg2: any) => void;
    }) {
        let animationTime = 60;
        ctx.fillStyle = this.color;

        let t = this.firstAnime / animationTime;
        let fontSize = easeInOutCubic(t) * this.size;
        ctx.font = `${fontSize}px serif`;
        let mesure = ctx.measureText(this.text);
        let textWidth = mesure.width;
        let textHeight =
            mesure.actualBoundingBoxAscent + mesure.actualBoundingBoxDescent;

        ctx.fillText(
            this.text,
            this.x - textWidth / 2,
            this.y + textHeight / 2
        );
    }
}

export default Text;
