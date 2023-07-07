import Object from "@/components/canvas/Objects/Object";

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
    constructor(x, y, color) {
        super();
        this.x = x;
        this.y = y;
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
    drawObj(ctx) {
        let text = "1.00";
        const mesure = ctx.measureText(text);
        let textWidth = mesure.width;
        let textHeight =
            mesure.actualBoundingBoxAscent + mesure.actualBoundingBoxDescent;
        ctx.font = "48px serif";
        ctx.fillStyle = this.color;
        ctx.fillText(text, this.x - textWidth / 2, this.y + textHeight/2);
    }
}

export default Text;
