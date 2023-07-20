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

let test = new Scene("root");

let lines = [];
let nodes: Circle[] | { x: number }[] = [];
let texts: any[] = [];
let height = 400;
let left = 280;
let r = 60;

for (let i = 0; i < 3; i++) {
    lines.push(new Line(left, i * 250 + 100));
    nodes.push(new Circle(left, i * 250 + 100, r, "white"));
}
nodes.push(new Circle(left*2.3, height-50, r, "white"));


texts.push(new Text(nodes[0].x-100, nodes[0].y, "x1", 40, "white"));
texts.push(new Text(nodes[1].x-100, nodes[1].y, "x2", 40, "white"));
texts.push(new Text(nodes[2].x-100, nodes[2].y, "b1", 40, "white"));


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
texts.forEach((element) => {
    test.AddFirstAnimation(element);
});

test.AddMove(
    lines[0].move2(nodes[3].x, nodes[3].y),
    lines[1].move2(nodes[3].x, nodes[3].y),
    lines[2].move2(nodes[3].x, nodes[3].y)
);

function drawGraph(){

    let canvas = document.getElementById("root");
    var context = canvas.getContext('2d');
    // キャンバス全体のピクセル情報を取得
    var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    let width = imageData.width, height = imageData.height;
    var pixels = imageData.data;  // ピクセル配列：RGBA4要素で1ピクセル

    let graphSize=500
    let startX=100
    let startY=100
    // ピクセル単位で操作できる
    for (var y = startX; y < startX+graphSize; ++y) {
        for (var x = startY; x < startY+graphSize; ++x) {
            var base = (y * width + x) * 4;
            // ピクセルに書き込む
            if (calcXOR((x - startX) / graphSize, (y - startY) / graphSize) > 0) { // 修正: calcXOR関数に正しい引数を渡す

                pixels[base + 0] = 0;  // Red
                pixels[base + 1] = 0;  // Green
                pixels[base + 2] = 255  // Blue
            }else{
                pixels[base + 0] = 255;  // Red
                pixels[base + 1] = 0;  // Green
                pixels[base + 2] = 0  // Blue
            }
            pixels[base + 3] = 255;  // Alpha
        }
    }

    // 変更した内容をキャンバスに書き戻す
    context.putImageData(imageData, 0, 0);
}
drawGraph()
function calcXOR(x1,x2){
    let s1 = x1 * 0.5 + x2 * 0.5 - 0.2;
    let s2 = x1 * -0.5 + x2 * -0.5 + 0.7;
    let f1 = s1 > 0 ? 1 : 0; // 修正: f1とf2の計算を簡略化
    let f2 = s2 > 0 ? 1 : 0;
    return f1 !== f2 ? 1 : 0; // 修正: XORの結果を返す
}
function calcOR(x1,x2){
    let result =x1+x2-0.5
    if (result>0) {
        result=1
    }else{
        result=0
    }
    return result
}
console.log("xor",calcXOR(0,0))
console.log("xor",calcXOR(1,0))
console.log("xor",calcXOR(0,1))
console.log("xor",calcXOR(1,1))
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


    return (
        <>
            <div id="canvasTop">
                <button
                    onClick={handleClick}
                    className="font-bold text-lg bg-blue-500 p-3 rounded-lg text-white active:bg-blue-700 absolute bottom-20 left-5"
                >
                    Play
                </button>

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
