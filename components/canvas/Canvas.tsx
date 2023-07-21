import React, { useEffect, useState } from "react";
import Scene from "@/components/canvas/scene";
import Square from "@/components/canvas/Objects/Square";
import Line from "@/components/canvas/Objects/Line";
import { Slider } from "@mui/material";
import Circle from "@/components/canvas/Objects/Circle";
import NumberCounter from "./GUI/Number";
import Text from "@/components/canvas/Objects/Text";
import { text } from "stream/consumers";
import COLOR from "@/components/canvas/COLOR/colors";
import classes from "./Canvas.module.css";
import { point } from "@/components/canvas/utils/point";
import { calcXOR } from "./calcLogic";

let test = new Scene("root");
let canvas = document.getElementById("root");
var context = canvas.getContext('2d');

let lines = [];
let nodes: Circle[] | { x: number }[] = [];
let texts: any[] = [];
let height = 400;
let left = 240;
let r = 60;
let offsetX=100

for (let i = 0; i < 2; i++) {
    lines.push(new Line(left-offsetX, i * height + 150));
    lines.push(new Line(left-offsetX, i * height + 150));
    nodes.push(new Circle(left-offsetX, i * height + 150, r, "white"));
}
for (let i = 0; i < 2; i++) {
    lines.push(new Line(left * 2.4-offsetX, i * height + 150));
    nodes.push(new Circle(left * 2.4-offsetX, i * height + 150, r, "white"));
}
nodes.push(new Circle(left * 3.7-offsetX, height - 50, r, "white"));

//nodeの値
for (let i = 0; i < 2; i++) {
    texts.push(new Text(nodes[i].x, nodes[i].y, "1.00", 40, "white"));
}
texts.push(new Text(nodes[2].x, nodes[2].y, 0.8, 40, "white"));
texts.push(new Text(nodes[3].x, nodes[3].y, -0.3, 40, "white"));
texts.push(new Text(nodes[4].x, nodes[4].y, -0.3, 40, "white"));

texts.push(new Text(nodes[0].x + 190, nodes[0].y - 30, 0.5, 40, COLOR.BLUE));
texts.push(new Text(nodes[0].x + 100, nodes[0].y + 150, -0.5, 40, COLOR.BLUE));

texts.push(new Text(nodes[1].x + 190, nodes[1].y + 30, -0.5, 40, COLOR.BLUE));
texts.push(new Text(nodes[1].x + 100, nodes[1].y - 150, 0.5, 40, COLOR.BLUE));

texts.push(new Text(nodes[2].x + 190, nodes[2].y + 70, 0.5, 40, COLOR.BLUE));
texts.push(new Text(nodes[3].x + 190, nodes[3].y - 70, 0.5, 40, COLOR.BLUE));

//活性関数
texts.push(new Text(nodes[2].x + 100, nodes[2].y, 1, 40, COLOR.YELLOW));
texts.push(new Text(nodes[3].x + 100, nodes[3].y, 0, 40, COLOR.YELLOW));
texts.push(new Text(nodes[4].x + 100, nodes[4].y, 0, 40, COLOR.YELLOW));

texts.push(new Text(930, 175, 1, 40, COLOR.WHITE));
texts.push(new Text(930, 530, 0, 40, COLOR.WHITE));
texts.push(new Text(1230, 175, 0, 40, COLOR.WHITE));
texts.push(new Text(1230, 530, 1, 40, COLOR.WHITE));

lines.forEach((element) => {
    test.create(element);
});

nodes.forEach((element) => {
    test.create(element);
});
texts.forEach((element) => {
    test.create(element);
});

nodes.forEach((element) => {
    test.AddFirstAnimation(element);
});

test.AddMove(
    lines[0].move2(nodes[2].x, nodes[2].y),
    lines[1].move2(nodes[3].x, nodes[3].y)
);
test.AddMove(
    lines[2].move2(nodes[2].x, nodes[2].y),
    lines[3].move2(nodes[3].x, nodes[3].y)
);
test.AddMove(lines[4].move2(nodes[4].x, nodes[4].y));
test.AddMove(lines[5].move2(nodes[4].x, nodes[4].y));

texts.forEach((element) => {
    test.AddFirstAnimation(element);
});

console.log("アニメタスク", test.animeTask);


export default function Canvas() {

    const [frame, setFrame] = useState(0);
    const handleClick = () => {
        let frameCount = 0;

        function animate() {
            // ここにフレームごとの処理を記述します
            setFrame(frameCount);
            test.play(frameCount);
            // フレームカウントを増やす
            frameCount++;

            if (frameCount <= test.getFrameLength()) {
                // まだ200フレームに達していない場合、次のフレームをリクエスト
                requestAnimationFrame(animate);
            }
            console.log("アニメーション");
        }

        // 最初のフレームをリクエスト
        requestAnimationFrame(animate);
    };

    const playBar = (event: { target: { value: any } }) => {
        let frame = event.target.value;
        setFrame(frame);
        test.play(frame);
    };

    let w1 = texts[5];
    let w2 = texts[6];
    let w3 = texts[8];
    let w4 = texts[7];
    let w5 = texts[9];
    let w6 = texts[10];

    let s1 = texts[2];
    let s2 = texts[3];
    let x1 = texts[0];
    let x2 = texts[1];
    let y = texts[4];
    let f1 = texts[11];
    let f2 = texts[12];
    let f3 = texts[13];
    function calcAll() {
        s1.text = point(x1.text * w1.text + x2.text * w3.text - 0.2, 2);
        s2.text = point(x1.text * w2.text + x2.text * w4.text + 0.7, 2);
        y.text = point(f1.text * w5.text + f2.text * w6.text - 0.8, 2);
        if (s1.text > 0) {
            f1.text = 1;
        } else {
            f1.text = 0;
        }
        if (s2.text > 0) {
            f2.text = 1;
        } else {
            f2.text = 0;
        }
        if (y.text > 0) {
            f3.text = 1;
        } else {
            f3.text = 0;
        }
        drawGraph()

    }
    let px=1530
    let py=200

    function X1(e: { target: { value: any } }) {
        let value = e.target.value;
        x1.text = value;
        px=930+Number(value)*300
        calcAll();
        test.drawAll();
        drawGraph()
        drawPoint()
    }
    function X2(e: { target: { value: any } }) {
        let value = e.target.value;
        x2.text = value;
        py=500-Number(value)*300
        calcAll();
        test.drawAll();
        drawGraph()
        drawPoint()
    }
    function drawPoint(){
        console.log(px)
        console.log(py)
        context.fillStyle = 'rgba(255, 255, 255, 0.5)';
        context.strokeStyle = "white";
        context.beginPath();
        context.arc(
            px,
            py,
            20,
            0,
            10
        );
        context.fill();
        context.lineWidth = 3;
        context.stroke();
    }
    function W1(e: { target: { value: any } }) {
        let value = e.target.value;
        w1.text = value;
        calcAll();
        test.drawAll();
        drawGraph()
        drawPoint()
    }
    function W2(e: { target: { value: any } }) {
        let value = e.target.value;
        w2.text = value;
        calcAll();
        test.drawAll();
        drawGraph()
        drawPoint()
    }
    function W3(e: { target: { value: any } }) {
        let value = e.target.value;
        w3.text = value;
        calcAll();
        test.drawAll();
        drawGraph()
        drawPoint()
    }
    function W4(e: { target: { value: any } }) {
        let value = e.target.value;
        w4.text = value;
        calcAll();
        test.drawAll();
        drawGraph()
        drawPoint()
    }
    function W5(e: { target: { value: any } }) {
        let value = e.target.value;
        w5.text = value;
        calcAll();
        test.drawAll();
        drawGraph()
        drawPoint()
    }
    function W6(e: { target: { value: any } }) {
        let value = e.target.value;
        w6.text = value;
        calcAll();
        test.drawAll();
        drawGraph()
        drawPoint()
    }
    function drawGraph(){

        // キャンバス全体のピクセル情報を取得
        context.willReadFrequently = true;
        var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        let width = imageData.width, height = imageData.height;
        var pixels = imageData.data;  // ピクセル配列：RGBA4要素で1ピクセル
    
        let graphSize=300
        let startX=630
        let startY=200
        // ピクセル単位で操作できる
        for (var y = 0; y < graphSize; ++y) {
            for (var x = 0; x < graphSize; ++x) {
                var base = ((startY + graphSize - y) * width + (startX + graphSize + x)) * 4;
                // ピクセルに書き込む
                let x_normalized = x / graphSize;
                let y_normalized = y / graphSize;
                let result = calcXOR(x_normalized, y_normalized, w1.text, w2.text, w3.text, w4.text, w5.text, w6.text);
    
                if (result > 0) {
                    //赤
                    pixels[base + 0] = 240; // Red
                    pixels[base + 1] = 98; // Green
                    pixels[base + 2] = 89; // Blue
                } else {
                    //青
                    pixels[base + 0] = 89; // Red
                    pixels[base + 1] = 196; // Green
                    pixels[base + 2] = 220; // Blue

                }
                pixels[base + 3] = 255; // Alpha
            }
        }
    
        // 変更した内容をキャンバスに書き戻す
        context.putImageData(imageData, 0, 0);
    }
    drawGraph()
    return (
        <>
            <div id="canvasTop">
                <button
                    onClick={handleClick}
                    className="font-bold text-lg bg-blue-500 p-3 rounded-lg text-white active:bg-blue-700 absolute bottom-20 left-5"
                >
                    Play
                </button>
                <input
                    style={{
                        position: "absolute",
                        top: nodes[0].y + 70,
                        left: nodes[0].x - 65,
                    }}
                    type="range"
                    onChange={X1}
                    min={0}
                    max={1}
                    step={0.01}
                    className={classes.input}
                />
                <input
                    style={{
                        position: "absolute",
                        top: nodes[1].y + 70,
                        left: nodes[1].x - 65,
                    }}
                    type="range"
                    onChange={X2}
                    min={0}
                    max={1}
                    step={0.01}
                    className={classes.input}
                />
                <input
                    style={{
                        position: "absolute",
                        top: nodes[0].y - 70,
                        left: nodes[0].x + 130,
                    }}
                    type="range"
                    onChange={W1}
                    min={-1}
                    max={1}
                    step={0.01}
                    className={classes.input}
                />
                <input
                    style={{
                        position: "absolute",
                        top: nodes[0].y + 170,
                        left: nodes[0].x + 40,
                    }}
                    type="range"
                    onChange={W2}
                    min={-1}
                    max={1}
                    step={0.01}
                    className={classes.input}
                />
                <input
                    style={{
                        position: "absolute",
                        top: nodes[1].y - 130,
                        left: nodes[1].x + 40,
                    }}
                    type="range"
                    onChange={W3}
                    min={-1}
                    max={1}
                    step={0.01}
                    className={classes.input}
                />
                <input
                    style={{
                        position: "absolute",
                        top: nodes[1].y + 50,
                        left: nodes[1].x + 130,
                    }}
                    type="range"
                    onChange={W4}
                    min={-1}
                    max={1}
                    step={0.01}
                    className={classes.input}
                />
                <input
                    style={{
                        position: "absolute",
                        top: nodes[2].y + 30,
                        left: nodes[2].x + 125,
                    }}
                    type="range"
                    onChange={W5}
                    min={-1}
                    max={1}
                    step={0.01}
                    className={classes.input}
                />
                <input
                    style={{
                        position: "absolute",
                        top: nodes[3].y - 50,
                        left: nodes[3].x + 125,
                    }}
                    type="range"
                    onChange={W6}
                    min={-1}
                    max={1}
                    step={0.01}
                    className={classes.input}
                />
                <div className="text-white text-xl inline-block">
                    <p className="">{frame}</p>
                </div>

                <input
                    type="range"
                    style={{ width: "100%" }}
                    min={0}
                    value={frame}
                    onChange={playBar}
                    max={test.getFrameLength()}
                />
            </div>
        </>
    );
}
