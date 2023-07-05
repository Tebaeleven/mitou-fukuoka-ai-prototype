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
            <div style={{ position: "relative" }}>
                <canvas
                    id="root"
                    width={1280}
                    height={720}
                    className="border-collapse border-2 border-black  drop-shadow-2xl m-auto"
                    style={{ background: "black" }}
                ></canvas>

                <Canvas></Canvas>
            </div>
        </div>
    );
}
