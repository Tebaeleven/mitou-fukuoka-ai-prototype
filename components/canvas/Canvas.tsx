import React, { useEffect, useState } from 'react'
import Scene from "@/components/canvas/scene";
import Object from "@/components/canvas/object";
import { Slider } from '@mui/material';

let obj = new Object();

let test = new Scene("root");

let square = obj.Square(100,300, 50, "green");
let square2 = obj.Square(400, 100, 50, "red");
let circle = obj.Circle(400, 400, 40, "orange", "black");
let circle2 = obj.Circle(200, 200, 40, "orange", "black");

test.create(square);
test.create(square2);
test.create(circle);

test.AddMove(square, 250, 250);
test.AddMove(square2, 400, 250);
test.AddWait(50);

test.AddMove(square, 400, 100);
test.AddMove(circle, 100, 250);
test.AddWait(50);
test.AddMove(square, 100, 100);
test.AddWait(100);

test.AddMove(circle, 100, 400);


console.log(test.animeTask)


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

            if (frameCount < 200) {
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
                推してね
            </button>
            <div className='w-1/2'>
                <Slider
                    defaultValue={0}
                    aria-label="Default"
                    valueLabelDisplay="auto"
                    max={500}
                    step={1}
                    onChange={playBar}
                />
                <p>{frame}</p>
            </div>
        </>
    );
};

