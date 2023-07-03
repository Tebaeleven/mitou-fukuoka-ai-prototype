import React, { useEffect, useState } from 'react'
import Scene from "@/components/canvas/back";
import Square from "@/components/canvas/Objects/Square";

import { Slider } from '@mui/material';
import Circle from "@/components/canvas/Objects/Circle";


let test = new Scene("root");

let green = new Circle(100, 100, 50, "white");
let red = new Square(100, 100, 50, "red");

test.create(red);

test.create(green);

test.AddMove(
    green.move(400, 400),
    red.move(100, 400),
);
test.AddMove(green.move(400, 100));
test.AddMove(red.move(100, 100));

test.AddMove(
    green.move(400, 400),
    red.move(100, 400),
);
test.AddMove(green.move(100, 100), red.move(100, 100));
console.log(test.animeTask)

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

            if (frameCount < test.getFrameLength()) {
                // まだ200フレームに達していない場合、次のフレームをリクエスト
                requestAnimationFrame(animate);
            }
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
            <input
                type="range"
                style={{ width: "47%" }}
                defaultValue={0}
                value={frame}
                onChange={playBar}
                max={test.getFrameLength()}
            />
        </>
    );
};

