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
import NumberLine from "./Objects/NumberLine";
import Arrow from "./Objects/Arrow";
let test = new Scene("root");

let lines = [];
let texts = [];
let nodes = [];
let arrows = []
let numberLine=[]
let height =200;
let left = 230;
let distanceText=[]
let r = 60;
for (let i = 0; i <3; i++) {
    // lines.push(new Line(left, i * height + 150));
    numberLine.push(
        new NumberLine(left, i * height + 150).set_color(COLOR.WHITE)
    );

}
arrows.push(
    new Arrow(numberLine[1].x1, numberLine[1].y1)
        .set_color(COLOR.GREEN)
        .set_width(10)
);
arrows.push(
    new Arrow(numberLine[2].x1, numberLine[2].y1).set_color(COLOR.RED)
);


// texts.push(new Text(lines[1].x1-50, lines[1].y1, "弟", 40, "white"));
// texts.push(new Text(lines[1].x1, lines[1].y1+50, "分速80m", 40, COLOR.GREEN));
// texts.push(new Text(lines[2].x1 - 50, lines[2].y1, "兄", 40, "white"));



numberLine.forEach((element) => {
    test.create(element);
});
arrows.forEach((element) => {
    test.create(element);
});
// nodes.forEach((element) => {
//     test.create(element);
// });

numberLine.forEach((e) => {
    test.AddMove(e.move2(e.x1+800, e.y1));
});


texts.push(new Text(numberLine[0].x1, numberLine[0].y1 - 50, "スタート", 40, "white"));
texts.push(new Text(numberLine[0].goalX2, numberLine[0].y1 - 50, "ゴール", 40, "white"));
texts.push(
    new Text(numberLine[1].x1 - 50, numberLine[1].y1, "弟", 40,COLOR.GREEN)
);
texts.push(
    new Text(
        numberLine[1].goalX2 + 110,
        numberLine[1].y1,
        "分速80m",
        40,
        COLOR.GREEN
    )
);

texts.push(
    new Text(numberLine[2].x1 - 50, numberLine[2].y1, "兄", 40, COLOR.RED)
);
texts.push(
    new Text(numberLine[2].goalX2+110, numberLine[2].y1, "分速240m", 40, COLOR.RED)
);
texts.forEach((element) => {
    test.create(element);
});
texts.forEach((element) => {
    test.AddFirstAnimation(element);
});
test.AddMove(arrows[0].move2(numberLine[0].x1 + 400, arrows[0].y1));
test.AddMove(arrows[1].move2(numberLine[0].x1 + 200, arrows[1].y1));

distanceText.push(
    new Text(
        arrows[0].x1+(arrows[0].goalX2 - arrows[0].x1) / 2,
        arrows[0].y1 + 50,
        "80×(10+x)",
        40,
        COLOR.GREEN
    )
);
distanceText.push(
    new Text(
        arrows[0].x1+(arrows[1].goalX2 - arrows[1].x1) / 2,
        arrows[1].y1 + 50,
        "240×x",
        40,
        COLOR.RED
    )
);
console.log("距離", arrows[1].goalX2 - arrows[1].x1);
console.log("x2", arrows[1].goalX2);
console.log("x1", arrows[1].x1);
distanceText.forEach((element) => {
    test.create(element);
});
distanceText.forEach((element) => {
    test.AddFirstAnimation(element);
});

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
