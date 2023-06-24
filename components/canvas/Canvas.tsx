import React, { useEffect } from 'react'
import Scene from "@/components/canvas/scene";
import Object from "@/components/canvas/object";

export default function Canvas(){
    let obj = new Object();

    let test = new Scene("root");

    let square = obj.Square(110, 0, 50, "green");
    let square2 = obj.Square(0, 0, 50, "red");
    let circle = obj.Circle(100, 200, 50, "orange","black");

    test.create(square2);
    test.create(square);
    test.create(circle);

    test.AddPlay(square);
    test.AddWait(60);
    test.AddPlay(square2);
    test.AddWait(60);

    console.log(test.animeTask);

    const handleClick = () => {
        test.play();
    };

    return (
        <>
            <button
                onClick={handleClick}
                className="font-bold text-lg bg-blue-500 p-3 rounded-lg text-white active:bg-blue-700 absolute bottom-5 left-5"
            >
                推してね
            </button>
        </>
    );
};

