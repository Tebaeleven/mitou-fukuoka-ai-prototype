import React, { useEffect } from "react";
import Scene from "@/components/canvas/scene";
import Object from "@/components/canvas/object";

export default function JsCanvas() {
    useEffect(() => {
        let obj=new Object()
        class Test extends Scene {
            constructor() {
                super("root");

                let square = obj.Square(110,0,50,"green");
                let square2 = obj.Square(0, 0, 50, "red");

                this.create(square2);
                this.create(square);

                this.AddPlay(square);
                this.AddPlay(square2);

                console.log(this.animeTask)

            }
        }
        new Test();
        
    }, []);

    return <canvas id="root" width={500} height={500}></canvas>;
}
