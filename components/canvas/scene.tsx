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
        this.currentFrame = 0;
        this.isPlay = false
        this.clear()
    }
    create(obj) {
        this.object.push(obj);
        this.draw(obj);
    }
    AddPlay(obj) {
        let startFrame = 0;
        if (this.animeTask.length !== 0) {
            let bottomTask = this.animeTask.slice(-1)[0];
            //スタート時間の設定
            if (bottomTask !== undefined) {
                //上がwaitだった場合
                if (bottomTask.id === "wait") {
                    startFrame = bottomTask.end;
                } else {
                    startFrame = bottomTask.start;
                }
            }
        }

        let task = {
            id: obj.id,
            start: startFrame,
            end: startFrame + 60,
        };
        this.animeTask.push(task);
    }
    AddWait(frames) {
        let startFrame = 0;
        if (this.animeTask.length !== 0) {
            startFrame = this.animeTask.slice(-1)[0].end;
        }
        //TODO 強制的に+frameしているが、wait関数が上にあった場合のみwait関数の時間分+するようにする
        let task = {
            id: "wait",
            start: startFrame,
            end: startFrame + frames,
        };
        this.animeTask.push(task);
    }

    play() {
        console.log("play")
        let frameCount = 0;
        let lastTime = performance.now();
        const loop = () => {
            console.log(this.currentFrame); //TODO なぜか2回出力される

            // フレーム数をカウント
            frameCount++;

            // 経過時間の計算
            const currentTime = performance.now();
            const deltaTime = currentTime - lastTime;
            if (deltaTime >= 1000) {
                // 1秒以上経過した場合
                console.log("FPS:", frameCount);

                // フレームカウントと時間をリセット
                frameCount = 0;
                lastTime = currentTime;
            }
                let findObj;
                this.currentFrame++;
                for (let i = 0; i < this.animeTask.length; i++) {
                    let id = this.animeTask[i].id;
                    let startFrame = this.animeTask[i].start;
                    let endFrame = this.animeTask[i].end;

                    findObj = Object.values(this.object).find(
                        (find) => find.id === id //this.animeTask[0].id
                    );
                    if (id === "wait") {
                        this.clear();
                        this.drawAll();
                    } else if (
                        startFrame <= this.currentFrame &&
                        this.currentFrame <= endFrame
                    ) {
                        this.clear();
                        this.drawAll();
                        findObj.x += 1;
                    }
                }
                    requestAnimationFrame(loop);

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
            case "circle":
                this.ctx.fillStyle = obj.color;
                this.ctx.strokeStyle = obj.strokeColor;
                this.ctx.beginPath();
                this.ctx.arc(obj.x, obj.y, obj.r, 0, 2 * Math.PI);
                this.ctx.fill();
                this.ctx.lineWidth = 4;
                this.ctx.stroke(); 
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
