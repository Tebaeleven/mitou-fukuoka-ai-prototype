import dynamic from "next/dynamic";
import React, { useEffect } from "react";

const Canvas = dynamic(() => import("@/components/canvas/Canvas"), {
    ssr: false,
});

export default function JsCanvas() {
    //TODO
    //aタグから移動してきた時はcanvasを取得できるが、linkタグからだとできない
    return (
        <div className="">
            <canvas
                id="root"
                height={500}
                width={500}
                style={{ background: "red" }}
            ></canvas>
            <Canvas></Canvas>
        </div>
    );
}
