import React, { useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { createRoot } from "react-dom/client";

export default function Dom() {
    useEffect(() => {
        let instance = []
        instance.push(new MyClass());
        instance.push(new MyClass());
        console.log(instance)
        //TODO
        //jsxなどで要素を生成し、それをdomにcloneする
        

        // const interval = setInterval(() => {
        //     instance.forEach(function (block) {
        //         block.moveElement();
        //     });
            
        // }, 1); // 1秒ごとに移動

        // return () => {
        //     clearInterval(interval);
        // };
    }, []);
    return (
        <div
            className="block  bg-white border  rounded-lg shadow border-gray-700 m-auto my-5 h-[700px] w-[1200px] "
            id="root"
            style={{ position: "relative" }}
        ></div>
    );
}

class MyClass {
    constructor() {
        this.x = 0; // 初期位置
        this.y = this.getRandomArbitrary(0,100)
        this.container = document.getElementById("root");
        this.root = createRoot(this.container);
        this.root.render(this.renderDOM());
        this.e = this.renderDOM();
        console.log(this.element)
    }
    moveElement() {
        this.x += 1; // 移動量
        this.root.render(this.renderDOM());
    }

    renderDOM() {
        return (
            <>
                <div
                    style={{
                        position: "absolute",
                        left: this.x,
                        top:this.y
                    }}
                >
                    こんにちは
                </div>
            </>
        );
    }
    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
}
