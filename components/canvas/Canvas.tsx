import React, { useEffect, useState } from 'react'
import Scene from "@/components/canvas/scene";
import Object from "@/components/canvas/object";
import { Slider } from '@mui/material';

let obj = new Object();

let test = new Scene("root");

let square = obj.Square(200, 0, 50, "green");
let square2 = obj.Square(0, 0, 50, "red");
let circle = obj.Circle(100, 200, 40, "orange", "black");
let circle2 = obj.Circle(200, 200, 40, "orange", "black");

// test.create(square2);
test.create(square);
// test.create(circle);
// test.create(circle2);

test.AddPlay(square);
// test.AddPlay(square2);
// test.AddPlay(circle);
// test.AddPlay(circle2);


export default function Canvas() {
    const [frame, setFrame] = useState(0);

    const handleClick = () => {
        test.play();
    };

    const playBar = (event) => {
        setFrame(event.target.value);
        let moveFrame = 200
        let currentFrame = event.target.value;

        let t = currentFrame / moveFrame

        console.log(t)
        square.x = easeInOutCubic(t) * 200;
        square.y = easeInOutCubic(t) * 100;
        test.drawAll()
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
                    defaultValue={50}
                    aria-label="Default"
                    valueLabelDisplay="auto"
                    max={200}
                    onChange={playBar}
                />
                <p>{frame}</p>
            </div>
        </>
    );
};

