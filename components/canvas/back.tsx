class Scene {
    object: never[];
    canvas: HTMLElement | null;
    ctx: any;
    animeTask: never[];
    currentFrame: number;
    isPlay: boolean;
    constructor(canvasID) {
        this.object = [];
        this.canvas = document.getElementById(canvasID);
        this.ctx = this.canvas.getContext("2d");
        console.log(this.canvas);
        this.animeTask = [];
        this.currentFrame = 0;
        this.isPlay = false;
        this.clear();
    }
    create(o) {
        let obj = o
        this.object.push(obj);
        console.log(obj)
        this.draw(obj);
    }
    AddMove(...o) {
        let startFrame = 0
        if (o.length !== 1 && this.animeTask.length !== 0) {
            let bottomTask = this.animeTask.slice(-1)[0];
            //スタート時間の設定
            if (bottomTask !== undefined) {
                startFrame = bottomTask.end;
            }
            console.log("開始時刻",startFrame)
        }
        for (let i = 0; i < o.length; i++) {
            let obj = o[i].data;
            console.log("o", o);
            //もし単体だけだったら同期的に動かす
            if (o.length === 1 && this.animeTask.length !== 0) {
                let bottomTask = this.animeTask.slice(-1)[0];
                //スタート時間の設定
                if (bottomTask !== undefined) {
                    startFrame = bottomTask.end;
                }
            }
            let task={}
            if (obj.shape==="line") {
                task = {
                    id: obj.id,
                    shape:"line",
                    start: startFrame,
                    end: startFrame + obj.animateTime,
                    startX1: obj.x1,
                    startY1: obj.y1,
                    startX2: obj.x2,
                    startY2: obj.y2,
                    goalX1: obj.goalX1,
                    goalY1: obj.goalY1,
                    goalX2: obj.goalX2,
                    goalY2: obj.goalY2,
                };
            } else {
                task = {
                    id: obj.id,
                    shape: "obj",
                    start: startFrame,
                    end: startFrame + obj.animateTime,
                    startX: obj.x,
                    startY: obj.y,
                    goalX: obj.goalX,
                    goalY: obj.goalY,
                };
            }
            console.log(obj.shape)

            this.animeTask.push(task);
            let findObj = getItemsById(obj.id, this.animeTask);
            //もしtaskにあったらその最後の座標にしておく
            if (findObj.length > 1) {
                //前に登録されているobjがあったらその座標にする
                let lastIndex = findObj.length - 1;
                let beforeX = findObj[lastIndex - 1].goalX;
                let beforeY = findObj[lastIndex - 1].goalY;
                findObj[lastIndex].startX = beforeX;
                findObj[lastIndex].startY = beforeY;

                // //前に登録されているobjがあったらそのframeから続ける
                // let beforeStart = findObj[lastIndex - 1].start;
                // let beforeEnd = findObj[lastIndex - 1].end;
                // let frameTime = beforeEnd - beforeStart;
                // findObj[lastIndex].start = beforeEnd;
                // findObj[lastIndex].end = beforeEnd + frameTime;
            }
        }

    }
    AddWait(frames) {
        let startFrame = 0;
        if (this.animeTask.length !== 0) {
            startFrame = this.animeTask.slice(-1)[0].start;
        }
        let endFrame = 0;
        if (this.animeTask.length !== 0) {
            endFrame = this.animeTask.slice(-1)[0].end;
        }
        //TODO 強制的に+frameしているが、wait関数が上にあった場合のみwait関数の時間分+するようにする
        let task = {
            id: "wait",
            start: endFrame,
            end: endFrame + frames,
        };
        this.animeTask.push(task);
    }

    play(frame) {
        let findObj;
        this.currentFrame = frame;
        for (let i = 0; i < this.animeTask.length; i++) {
            let id = this.animeTask[i].id;
            let shape = this.animeTask[i].shape
            if (shape === "line") {
                let startFrame = this.animeTask[i].start;
                let endFrame = this.animeTask[i].end;

                let startX1 = this.animeTask[i].startX1;
                let startY1 = this.animeTask[i].startY1;
                let goalX1 = this.animeTask[i].goalX1;
                let goalY1 = this.animeTask[i].goalY1;

                let startX2 = this.animeTask[i].startX2;
                let startY2 = this.animeTask[i].startY2;
                let goalX2 = this.animeTask[i].goalX2;
                let goalY2 = this.animeTask[i].goalY2;

                let animateTime = endFrame - startFrame;

                findObj = Object.values(this.object).find(
                    (find) => find.id === id //this.animeTask[0].id
                );
                if (id === "wait") {
                    this.clear();
                    this.drawAll();
                } else if (
                    //描画できる範囲だったら
                    startFrame <= this.currentFrame &&
                    this.currentFrame <= endFrame
                ) {
                    this.clear();
                    let moveFrameTime = animateTime;
                    let moveFrame = this.currentFrame - startFrame;
                    let t = moveFrame / moveFrameTime;
                    let dx1 = goalX1 - startX1;
                    let dy1 = goalY1 - startY1;

                    let dx2 = goalX2 - startX2;
                    let dy2 = goalY2 - startY2;
                    findObj.x1 = easeInOutCubic(t) * dx1 + startX1;
                    findObj.y1 = easeInOutCubic(t) * dy1 + startY1;

                    findObj.x2 = easeInOutCubic(t) * dx2 + startX2;
                    findObj.y2 = easeInOutCubic(t) * dy2 + startY2;
                    this.drawAll();
                }
            } else {
                let startFrame = this.animeTask[i].start;
                let endFrame = this.animeTask[i].end;

                let startX = this.animeTask[i].startX;
                let goalX = this.animeTask[i].goalX;

                let startY = this.animeTask[i].startY;
                let goalY = this.animeTask[i].goalY;

                let animateTime = endFrame - startFrame;

                findObj = Object.values(this.object).find(
                    (find) => find.id === id //this.animeTask[0].id
                );
                if (id === "wait") {
                    this.clear();
                    this.drawAll();
                } else if (
                    //描画できる範囲だったら
                    startFrame <= this.currentFrame &&
                    this.currentFrame <= endFrame
                ) {
                    this.clear();
                    let moveFrameTime = animateTime;
                    let moveFrame = this.currentFrame - startFrame;
                    let t = moveFrame / moveFrameTime;
                    let dx = goalX - startX;
                    let dy = goalY - startY;
                    findObj.x = easeInOutCubic(t) * dx + startX;
                    findObj.y = easeInOutCubic(t) * dy + startY;
                    this.drawAll();
                }
            }

        }
    }
    drawAll() {
        this.clear();
        this.object.forEach((o) => {
            this.draw(o);
        });
    }
    draw(obj) {
        obj.drawObj(this.ctx, obj);
    }
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    
    getFrameLength() {
        return this.animeTask.slice(-1)[0].end;
    }
}

export default Scene;

// イージング関数: easeOutQuad
function easeOutQuad(t) {
    return t * (2 - t);
}

// イージング関数: easeInOutQuad
function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}
function easeInOutCubic(t) {
    if (t < 0.5) {
        return 4 * t * t * t;
    } else {
        return 1 - Math.pow(-2 * t + 2, 3) / 2;
    }
}

        function getItemsById(id, array) {
            const result = [];
            for (let i = 0; i < array.length; i++) {
                if (array[i].id === id) {
                    result.push(array[i]);
                }
            }
            return result;
        }