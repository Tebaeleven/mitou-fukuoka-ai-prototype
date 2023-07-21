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
let canvas = document.getElementById("root");
var context = canvas.getContext('2d');



let lines = [];
let redLines=[]
let nodes: Circle[] | { x: number }[] = [];
let texts: any[] = [];
let height = 400;
let left = 240;
let r = 60;
let offsetX=150
let inputX=0

for (let i = 0; i < 4; i++) {
    lines.push(new Line(i*320+offsetX, 180).setColor(COLOR.BLUE));
    redLines.push(new Line(i*320+offsetX, 220).setColor(COLOR.RED));
    nodes.push(new Circle(i*320+offsetX, 200, r, "white"));
}

nodes.push(new Circle(1*320+inputX, 600, r, "white"));
nodes.push(new Circle(2*320+inputX, 600, r, "white"));

lines.push(new Line(1*320+inputX-20, 600).setColor(COLOR.BLUE));
lines.push(new Line(2*320+inputX-20, 600).setColor(COLOR.BLUE));
redLines.push(new Line(1*320+inputX+20, 600).setColor(COLOR.RED));
redLines.push(new Line(2*320+inputX+20, 600).setColor(COLOR.RED));

texts.push(new Text(nodes[0].x, nodes[0].y-15, "🍎", 70, "white"));
texts.push(new Text(nodes[1].x, nodes[1].y+15,"×", 110, "white"));
texts.push(new Text(nodes[2].x, nodes[2].y+15,"×", 110, "white"));
texts.push(new Text(nodes[3].x, nodes[3].y,"出力", 40, "white"));
texts.push(new Text(nodes[4].x, nodes[4].y,"個数", 40, "white"));
texts.push(new Text(nodes[5].x, nodes[5].y,"消費税", 30, "white"));

// texts.push(new Text(nodes[0].x+160, nodes[0].y-50, "100",40, "white").setColor(COLOR.BLUE));
// texts.push(new Text(nodes[1].x+160, nodes[1].y-50, "200",40, "white").setColor(COLOR.BLUE));
// texts.push(new Text(nodes[2].x+160, nodes[2].y-50, "220",40, "white").setColor(COLOR.BLUE));
// texts.push(new Text(nodes[4].x-10, nodes[4].y-100, "2",40, "white").setColor(COLOR.BLUE));

lines.forEach((element) => {
    test.create(element);
});
redLines.forEach((element) => {
    test.create(element);
});
nodes.forEach((element) => {
    test.create(element);
});
nodes.forEach((element) => {
    test.AddFirstAnimation(element);
});

texts.forEach((element) => {
    test.create(element);
});
texts.forEach((element) => {
    test.AddFirstAnimation(element);
});

for (let i = 0; i < 3; i++) {
    test.AddMove(
        lines[i].move2(nodes[i+1].x, nodes[i+1].y-20),
    );
}
for (let i = 0; i < 3; i++) {
    test.AddMove(
        redLines[i].move2(nodes[i+1].x, nodes[i+1].y+20),
    );
}


test.AddMove(
    lines[4].move2(nodes[1].x-20, nodes[1].y),
);
test.AddMove(
    lines[5].move2(nodes[2].x-20, nodes[2].y),
);

test.AddMove(
    redLines[4].move2(nodes[1].x+20, nodes[1].y),
);
test.AddMove(
    redLines[5].move2(nodes[2].x+20, nodes[2].y),
);



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

    useEffect(() => {
        let w1= document.querySelector('#w1 div ')
        console.log("lkjdgfrdfklsgjljk",w1)
        const target=document.getElementById("canvasTop")
        const observer = new MutationObserver(records => {
            // 変化が発生したときの処理を記述
            console.log("感知")
        })
        observer.observe(target, {
            attributes: true,
            subtree: true,
            characterData: true
        })
    }, []);
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

                <div
                id="w1"
                style={{
                    position: "absolute",
                    top: 120,
                    left: 250,
                }}>
                    <NumberCounter 
                        color={COLOR.BLUE} 
                        size={40}
                        max={200}
                        min={0}
                        value={100}
                    />
                </div>
                <div
                style={{
                    position: "absolute",
                    top: 220,
                    left: 250,
                }}>
                    <NumberCounter 
                        color={COLOR.RED} 
                        size={40}
                        max={200}
                        min={0}
                        value={2.2}
                    />
                </div>

                <div
                style={{
                    position: "absolute",
                    top: 120,
                    left: 570,
                }}>
                    <NumberCounter
                        color={COLOR.BLUE}
                        size={40} 
                        value={200}
                    />
                </div>
                <div
                style={{
                    position: "absolute",
                    top: 220,
                    left: 570,
                }}>
                    <NumberCounter color={COLOR.RED} size={40} value={1.1}></NumberCounter>
                </div>

                <div
                style={{
                    position: "absolute",
                    top: 120,
                    left: 890,
                }}>
                    <NumberCounter
                        color={COLOR.BLUE}
                        size={40} 
                        value={220}
                    />
                </div>
                <div
                style={{
                    position: "absolute",
                    top: 220,
                    left: 890,
                }}>
                    <NumberCounter color={COLOR.RED} size={40} value={1}></NumberCounter>
                </div>

                <div
                style={{
                    position: "absolute",
                    top: 370,
                    left: 230,
                }}>
                    <NumberCounter
                        color={COLOR.BLUE}
                        size={40} 
                        value={2}
                    />
                </div>
                <div
                style={{
                    position: "absolute",
                    top: 370,
                    left: 430,
                }}>
                    <NumberCounter color={COLOR.RED} size={40} value={110}></NumberCounter>
                </div>

                <div
                style={{
                    position: "absolute",
                    top: 370,
                    left: 560,
                }}>
                    <NumberCounter
                        color={COLOR.BLUE}
                        size={40} 
                        value={1.1}
                    />
                </div>
                <div
                style={{
                    position: "absolute",
                    top: 370,
                    left: 750,
                }}>
                    <NumberCounter color={COLOR.RED} size={40} value={200}></NumberCounter>
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
