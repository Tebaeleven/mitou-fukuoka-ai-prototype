import React, { useEffect } from "react";
import { Button } from "@material-tailwind/react";
import ReactDOM from "react-dom";
import { relative } from "path";

export default function Dom() {

    if (typeof window !== "undefined") {

        class MyClass {
            constructor() {
                this.x = 0; // 初期位置
            }
            moveElement() {
                this.x += 10; // 移動量
                const element = this.render();
                ReactDOM.render(element, document.getElementById("root"));
            }

            render() {
                return (
                    <>
                        <div
                            variant="gradient"
                            style={{
                                position: "absolute",
                                left: this.x
                            }}
                        >
                            こんにちは
                        </div>
                    </>
                );
            }
        }

        const instance = new MyClass();
        useEffect(() => {
            const interval = setInterval(() => {
                instance.moveElement();
            }, 1000); // 1秒ごとに移動

            return () => {
                clearInterval(interval);
            };
        }, []);
    }

    return (
        <div
            className="block  bg-white border  rounded-lg shadow border-gray-700 m-auto my-5 h-[700px] w-[1200px] "
            id="root"
            style={{ position: "relative" }}
        ></div>
    );
}
