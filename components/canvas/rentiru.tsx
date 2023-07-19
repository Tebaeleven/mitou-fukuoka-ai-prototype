import React, { useEffect, useState } from "react";
import Scene from "@/components/canvas/scene";
import Text from "@/components/canvas/Objects/Text";
import COLOR from "@/components/canvas/COLOR/colors";
import NumberLine from "./Objects/NumberLine";
import Arrow from "./Objects/Arrow";

let test = new Scene("root");

let texts = [];
let arrows = [];
let numberLine = [];
let height = 200;
let left = 230;
let distanceText = [];
let r = 60;
for (let i = 0; i < 3; i++) {
    numberLine.push(
        new NumberLine(left, i * height + 150).set_color(COLOR.WHITE)
    );
}
arrows.push(new Arrow(numberLine[1].x1, numberLine[1].y1).set_color(COLOR.GREEN).set_width(10));
arrows.push(new Arrow(numberLine[2].x1, numberLine[2].y1).set_color(COLOR.RED).set_width(10));

numberLine.forEach((element) => {
    test.create(element);
});
arrows.forEach((element) => {
    test.create(element);
});

numberLine.forEach((e) => {
    test.AddMove(e.move2(e.x1 + 800, e.y1));
});

texts.push(
    new Text(numberLine[0].x1, numberLine[0].y1 - 50, "t=0", 40, "white")
);
texts.push(
    new Text(numberLine[0].goalX2, numberLine[0].y1 - 50, "t=9", 40, "white")
);
texts.push(
    new Text(numberLine[1].x1 - 50, numberLine[1].y1, "弟", 40, COLOR.GREEN)
);
texts.push(new Text(numberLine[1].goalX2 + 110, numberLine[1].y1,"分速80m",40,COLOR.GREEN));
texts.push(new Text(numberLine[2].x1 - 50, numberLine[2].y1, "兄", 40, COLOR.RED));
texts.push(new Text(numberLine[2].goalX2 + 110, numberLine[2].y1, "分速240m", 40, COLOR.RED));

texts.forEach((element) => {
    test.create(element);
});
texts.forEach((element) => {
    test.AddFirstAnimation(element);
});
test.AddMove(arrows[0].move2(numberLine[0].x1 + 400, arrows[0].y1));
test.AddMove(arrows[1].move2(numberLine[0].x1 + 200, arrows[1].y1));

distanceText.push(new Text( arrows[0].x1 + (arrows[0].goalX2 - arrows[0].x1) / 2,arrows[0].y1 + 50, "80×(10+t)",40,COLOR.GREEN));
distanceText.push(new Text(arrows[0].x1 + (arrows[1].goalX2 - arrows[1].x1) / 2,arrows[1].y1 + 50,"240×t",40,COLOR.RED));
distanceText.push(new Text(numberLine[0].x1 + (numberLine[0].goalX2 - numberLine[0].x1) / 2,numberLine[0].y1 + 60,"",40,COLOR.YELLOW));

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

    function calcTime(e) {
        let value = e.target.value;

        arrows[1].goalX2 = numberLine[0].x1 + 400;
        let b1 = value * 80 + 800;
        let b2 = value * 240;
        b1 = b1 / 1.95;
        b2 = b2 / 1.95;
        console.log(b2);
        if (b2 < 244) {
            b2 = 244;
        }
        arrows[0].x2 = b1;
        arrows[1].x2 = b2;

        distanceText[2].text = "t=" + value;

        test.drawAll();
    }

    return (
        <>
            <div id="canvasTop">
                <button
                    onClick={handleClick}
                    className="font-bold text-lg bg-blue-500 p-3 rounded-lg text-white active:bg-blue-700 absolute bottom-10 left-5"
                >
                    Play
                </button>
                <input
                    type="range"
                    style={{
                        width: "63%",
                        position: "absolute",
                        top: 175,
                        left: 225,
                    }}
                    min={0}
                    step={0.1}
                    onChange={calcTime}
                    max={9}
                />
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
