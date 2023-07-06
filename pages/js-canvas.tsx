import dynamic from "next/dynamic";
import React, { useEffect } from "react";

const Canvas = dynamic(() => import("@/components/canvas/Canvas"), {
    ssr: false,
});

export default function JsCanvas() {
    //TODO
    //aタグから移動してきた時はcanvasを取得できるが、linkタグからだとできない
    return (
        <div className="p-10 ">
            <div
                style={{
                    position: "relative",
                    width: "1280px",
                    backgroundColor: "#323233",
                }}
                className="m-auto"
            >
                <div
                    id="rootDiv"
                    style={{
                        position: "absolute",
                        top: 0,
                        zIndex:1,
                        width: "1280px",
                        height:"728px",
                    }}
                ></div>
                <canvas
                    id="root"
                    width={1280}
                    height={720}
                    className="drop-shadow-2xl"
                    style={{ background: "black" }}
                ></canvas>

                {/* <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                    }}
                    className="bg-white rounded-md m-2 p-2"
                >
                    Neural Network XOR
                </div> */}
                <Canvas></Canvas>
            </div>
        </div>
    );
}
