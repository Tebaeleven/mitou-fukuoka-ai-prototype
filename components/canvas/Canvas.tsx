import React, { useEffect, useState } from 'react'
import Scene from "@/components/canvas/back";
import Square from "@/components/canvas/Objects/Square";
import Line from "@/components/canvas/Objects/Line"
import { Slider } from '@mui/material';
import Circle from "@/components/canvas/Objects/Circle";
import NumberCounter from "./GUI/Number";


let test = new Scene("root");

let lines = []
let nodes = []
let height = 400;
let left = 280;
let r=60
for (let i = 0; i < 2; i++) {
    lines.push(new Line(left, i * height + 150));
    lines.push(new Line(left, i * height + 150));
    nodes.push(new Circle(left, i * height + 150, r, "white"));
}
for (let i = 0; i < 2; i++) {
    lines.push(new Line(left * 2.4, i * height + 150));
    nodes.push(new Circle(left * 2.4, i * height + 150, r, "white"));
}

nodes.push(new Circle(left*3.7, height-50, r, "white"));

lines.forEach(element => {
    test.create(element);
});

nodes.forEach((element) => {
    test.create(element);
});
nodes.forEach((element) => {
    test.AddFirstAnimation(element);
});

test.AddMove(lines[0].move2(nodes[2].x, nodes[2].y));
test.AddMove(lines[1].move2(nodes[3].x, nodes[3].y));
test.AddMove(lines[2].move2(nodes[2].x, nodes[2].y));
test.AddMove(lines[3].move2(nodes[3].x, nodes[3].y));

test.AddMove(lines[4].move2(nodes[4].x, nodes[4].y));
test.AddMove(lines[5].move2(nodes[4].x, nodes[4].y));



console.log("アニメタスク",test.animeTask)

// test.create(green);


// test.AddMove(green.move(400, 100));
// test.AddMove(red.move(100, 100));

// test.AddMove(
//     green.move(400, 400),
//     red.move(100, 400),
// );
// test.AddMove(green.move(100, 100), red.move(100, 100));

// test.AddMove(square.move(100, 100));
// let square2 = obj.Square(400, 100, 50, "red");
// let circle = obj.Circle(400, 400, 40, "orange", "black");
// let circle2 = obj.Circle(200, 200, 40, "orange", "black");
// console.log("da",square)
// test.create(square);

// test.create(square2);
// test.create(circle);

/**
 * TODO
 * 同じ時間から動かすものは配列でまとめて記載する。まとめて書かれて
 * ないものはその動作が終わってから動かすことにする。
 *
 * 今まで：
 * test.AddMove(square, 400, 100);
 * test.AddMove(circle, 100, 250);
 * 
 * 改良案：
 * test.AddMove(
 *  [square, 400, 100],
 *  [circle, 100, 250]
 * );
 * //同期的に行う処理
 * test.AddMove(circle);
 */

// test.AddMove(square, 250, 250)
// test.AddMove(square2, 400, 250);
// test.AddMove(square2, 0, 0);
// test.AddMove(square2, 400, 400);
// test.AddWait(50);

// test.AddMove(square, 400, 100);
// test.AddMove(circle, 100, 250);
// test.AddWait(50);
// test.AddMove(square, 100, 100);
// test.AddWait(100);

// test.AddMove(circle, 100, 400);




export default function Canvas() {
    const [frame, setFrame] = useState(0);
    const handleClick = () => {
        let frameCount = 0;

        function animate() {
            // ここにフレームごとの処理を記述します
            setFrame(frameCount);
            test.play(frameCount)
            // フレームカウントを増やす
            frameCount++;

            if (frameCount <= test.getFrameLength()) {
                // まだ200フレームに達していない場合、次のフレームをリクエスト
                requestAnimationFrame(animate);
            }
            console.log("アニメーション")
        }

        // 最初のフレームをリクエスト
        requestAnimationFrame(animate);
    };

    const playBar = (event) => {
        let frame = event.target.value;
        setFrame(frame);
        test.play(frame);
    };

    function easeInOutCubic(t) {
        if (t<0.5) {
            return 4 * t * t * t;
        } else {
            return 1 - Math.pow(-2 * t + 2, 3) / 2;
        }
    }
    
    return (
        <>
            <button
                onClick={handleClick}
                className="font-bold text-lg bg-blue-500 p-3 rounded-lg text-white active:bg-blue-700 absolute bottom-20 left-5"
            >
                Play
            </button>
            <div className="">
                <p>{frame}</p>
            </div>
            <div
                style={{
                    position: "absolute",
                    top: 100,
                    left: 400,
                }}
            >
                <NumberCounter color="#59C4DC"></NumberCounter>
            </div>
            <div
                style={{
                    position: "absolute",
                    top: 500,
                    left: 400,
                }}
            >
                <NumberCounter color="#FCFC06"></NumberCounter>
            </div>
            <div
                style={{
                    position: "absolute",
                    top: 500,
                    left:800,
                }}
            >
                <NumberCounter color="#83C066"></NumberCounter>
            </div>
            <input
                type="range"
                style={{ width: "100%" }}
                min={0}
                value={frame}
                onChange={playBar}
                max={test.getFrameLength()}
            />
        </>
    );
    
};