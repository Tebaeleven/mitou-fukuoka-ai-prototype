import React from "react";
import Scene from "@/components/canvas";

export default function JsCanvas() {
    class Test extends Scene {
        constructor() {
            super();
            this.Create("cube",1);
            this.Create("cube",2);
            this.Play(2);
        }
    }

    const test = new Test();
    console.log("全てのオブジェクト",test.object);

    return <div>js-canvas</div>;
}
