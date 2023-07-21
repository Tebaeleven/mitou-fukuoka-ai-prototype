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
    const [w1, setW1] = useState(null);
    const [w2, setW2] = useState(null);
    const [w3, setW3] = useState(null);
    const [w4, setW4] = useState(null);
    const [w5, setW5] = useState(null);

    const [e1, setE1] = useState(null);
    const [e2, setE2] = useState(null);
    const [e3, setE3] = useState(null);
    const [e4, setE4] = useState(null);
    const [e5, setE5] = useState(null);

    useEffect(() => {
        setW1(100);
        setW2(200);
        setW3(220);
        setW4(2);
        setW5(1.1);

        setE1(2.2);
        setE2(1.1);
        setE3(1);
        setE4(110);
        setE5(200);

        const target=document.getElementById("canvasTop")
        const observer = new MutationObserver(records => {
            let w1= Number(document.querySelector('#w1 p')?.textContent)
            let w2= Number(document.querySelector('#w2 p')?.textContent)
            let w3= Number(document.querySelector('#w3 p')?.textContent)
            let w4= Number(document.querySelector('#w4 p')?.textContent)
            let w5= Number(document.querySelector('#w5 p')?.textContent)

            let e1= Number(document.querySelector('#e1 p')?.textContent)
            let e2= Number(document.querySelector('#e2 p')?.textContent)
            let e3= Number(document.querySelector('#e3 p')?.textContent)
            let e4= Number(document.querySelector('#e4 p')?.textContent)
            let e5= Number(document.querySelector('#e5 p')?.textContent)

            
            /**
             * 誤差逆伝播
             */
            //一つ目のニューロン
            e2=e3*w5
            e5=e3*w2

            //二つ目のニューロン
            e1=e2*w4
            e4=e2*w1

            /**
             * 順伝搬
             */
            w2=w1*w4
            w3=w2*w5
            
            setW1(w1);
            setW2(w2);
            setW3(w3);
            setW4(w4);
            setW5(w5);

            setE1(e1);
            setE2(e2);
            setE3(e3);
            setE4(e4);
            setE5(e5);


        })
        observer.observe(target, {attributes: true,subtree: true,characterData: true})
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
                        value={w1}
                    />
                </div>
                <div
                style={{
                    position: "absolute",
                    top: 220,
                    left: 250,
                }}
                id="e1">
                    <NumberCounter 
                        color={COLOR.RED} 
                        size={40}
                        max={200}
                        min={0}
                        value={e1}
                    />
                </div>

                <div
                style={{
                    position: "absolute",
                    top: 120,
                    left: 570,
                }}
                id="w2">
                    <NumberCounter
                        color={COLOR.BLUE}
                        size={40} 
                        value={w2}
                    />
                </div>
                <div
                style={{
                    position: "absolute",
                    top: 220,
                    left: 570,
                }}
                id="e2">
                    <NumberCounter color={COLOR.RED} size={40} value={e2}></NumberCounter>
                </div>

                <div
                style={{
                    position: "absolute",
                    top: 120,
                    left: 890,
                }}
                id="w3">
                    <NumberCounter
                        color={COLOR.BLUE}
                        size={40} 
                        value={w3}
                    />
                </div>
                <div
                style={{
                    position: "absolute",
                    top: 220,
                    left: 890,
                }}id="e3">
                    <NumberCounter color={COLOR.RED} size={40} value={e3}></NumberCounter>
                </div>

                <div
                style={{
                    position: "absolute",
                    top: 370,
                    left: 280,
                }}
                id="w4">
                    <NumberCounter
                        color={COLOR.BLUE}
                        size={40} 
                        value={w4}
                    />
                </div>
                <div
                style={{
                    position: "absolute",
                    top: 370,
                    left: 430,
                }}
                id="e4">
                    <NumberCounter color={COLOR.RED} size={40} value={e4}></NumberCounter>
                </div>

                <div
                style={{
                    position: "absolute",
                    top: 370,
                    left: 600,
                }}
                id="w5">
                    <NumberCounter
                        color={COLOR.BLUE}
                        size={40} 
                        value={w5}
                    />
                </div>
                <div
                style={{
                    position: "absolute",
                    top: 370,
                    left: 750,
                }}id="e5">
                    <NumberCounter color={COLOR.RED} size={40} value={e5}></NumberCounter>
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
