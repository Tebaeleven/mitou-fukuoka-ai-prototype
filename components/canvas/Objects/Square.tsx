import Object from "@/components/canvas/Objects/Object"

class Square extends Object{

    constructor(x, y, size, color) {
        super();
        this.x = x
        this.y = y
        this.goalX = 0
        this.goalY=0
        this.color = color
        this.animateTime=60
        this.data = {
            id: this.id,
            shape: "cube",
            x: x,
            y: y,
            color: color,
        };
    }
    
    drawObj(ctx, obj) {
        ctx.beginPath();
        ctx.fillStyle = "rgba(256, 256, 256, 0.5)";
        ctx.rect(obj.x - 50, obj.y - 50, 100, 100);
        ctx.strokeStyle = "white";
        ctx.lineWidth = 3;
        ctx.fill();
        ctx.stroke();
    }

    //チェーンメソッド
    move(x, y) {
        this.goalX =x
        this.goalY = y;
        this.setData()
        return this
    }
    time(t) {
        this.animateTime=t
        this.setData();
        this.animateTime =60
        return this;
    }
    
    setData() {
        this.data = {
            id: this.id,
            shape: "cube",
            x: this.x,
            y: this.y,
            goalX: this.goalX,
            goalY: this.goalY,
            color: this.color,
            animateTime: this.animateTime,
        };
    }

}

export default Square;