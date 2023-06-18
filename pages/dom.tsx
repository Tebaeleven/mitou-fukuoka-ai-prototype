import React, { useEffect } from "react";
import { Button, Switch } from "@material-tailwind/react";
import { createRoot } from "react-dom/client";


export default function Dom() {
    useEffect(() => {
        let instance = []
        for (let i = 0; i < 10; i++) {
            instance.push(
                new MyClass(
                    getRandomArbitrary(0, 500),
                    getRandomArbitrary(0, 500)
                )
            );
        }
        console.log(instance)
        let container = document.getElementById("root");
        let root = createRoot(container);
        //TODO
        //jsxなどで要素を生成し、それをdomにcloneする
        const interval = setInterval(() => {
            let dom=[]
            instance.forEach(function (block) {
                // block.moveElement();
                dom.push(block.renderDOM())
            });
            root.render(dom);
            
            
        }, 1);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div
            className="block  bg-white border  rounded-lg shadow border-gray-700 m-auto my-5 h-[700px] w-[1200px] "
            id="root"
            style={{ position: "relative" }}
        >
        </div>
    );
}

class MyClass {
    
    constructor(x,y) {
        this.x = x; // 初期位置
        this.y = y

    }

    moveElement() {
        this.x += 1; // 移動量
        
    }

    renderDOM() {
        function greeting() {
            alert(this.x);
        }
        return (
            <>
                <div
                    style={{
                        position: "absolute",
                        left: this.x,
                        top: this.y,
                    }}
                    onClick={greeting.bind(this)}
                    className="bg-white rounded-xl border-2 border-black p-5"
                >
                    click
                </div>
            </>
        );
    }

}
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}