class Scene {
    object: never[];
    canvas: HTMLElement | null;
    ctx: any;
    animeTask: never[];
    constructor(canvasID: string) {
        this.object = [];
        this.canvas = document.getElementById(canvasID);
        this.ctx = this.canvas.getContext("2d");
        console.log(this.canvas);
        this.animeTask = [];
    }
    create(obj) {
        if (obj.shape === "cube") {
            this.object.push(obj);
            this.draw(obj);
        }
    }
    AddPlay(obj) {
        let task = {
            id: obj.id,
        }
        this.animeTask.push(task);
        this.play(obj);
    }
    play(obj) {
            let findObj = Object.values(this.object).find(
                (find) => find.id === this.animeTask[0].id
            );
            let frames = 30;
            console.log(frames);
            const loop = () => {
                findObj.x -= 1;
                frames--;
                this.clear();
                this.drawAll();
                if (frames > 0) {
                    requestAnimationFrame(loop);
                } else {
                    this.animeTask.splice(0, 1);
                    console.log(this.animeTask);
                }
            };

            loop();
    }
    drawAll() {
        this.object.forEach((o) => {
            this.draw(o);
        });
    }
    draw(obj) {
        switch (obj.shape) {
            case "cube":
                this.ctx.fillStyle = obj.color;
                this.ctx.fillRect(obj.x, obj.y, 100, 100);
                break;

            default:
                break;
        }
    }
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}


export default Scene

// イージング関数: easeOutQuad
function easeOutQuad(t) {
    return t * (2 - t);
}

// イージング関数: easeInOutQuad
function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}
